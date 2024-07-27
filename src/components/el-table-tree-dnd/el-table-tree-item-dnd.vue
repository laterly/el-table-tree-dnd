<script setup lang="ts">
import {
  h,
  ref,
  render,
  onMounted,
  unref,
  onBeforeUnmount,
  watchEffect,
} from "vue";
import {
  draggable,
  dropTargetForElements,
  monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  type Instruction,
  attachInstruction,
  extractInstruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { treeRecordObj, setTreeRecord } from "./utils";
import { TableColumn } from "./types";

interface ItemProps {
  id: string | number;
  index: number;
  level: number;
  value: any;
  hasChildren: boolean;
}

interface Props {
  column: TableColumn;
  item: ItemProps;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  // 节点开始拖拽时触发的事件
  (e: "node-drag-start"): void;
}>();

const spanRef = ref();
const isDragging = ref(false);

const instruction = ref<Extract<
  Instruction,
  { type: "reorder-above" | "reorder-below" | "make-child" }
> | null>(null);

let dndFunction;

onMounted(() => {
  let rowElement;
  if (spanRef.value) {
    rowElement = spanRef.value?.closest(".el-table__row");
  }
  const elRef = ref(rowElement);
  const currentElement = unref(elRef);

  if (!currentElement) {
    return;
  }

  if (treeRecordObj[props.item?.index]) {
    return;
  }

  setTreeRecord(props.item?.index);
  
  const item = {
    ...props.item.value,
    level: props.item.level,
    id: props.item.id,
  };

  dndFunction = combine(
    draggable({
      element: currentElement,
      getInitialData: () => item,
      onDragStart: () => {
        console.log('开始')
        isDragging.value = true;
        emits("node-drag-start");
      },
      onDrop: () => {
        isDragging.value = false;
      },
      onGenerateDragPreview({ nativeSetDragImage }) {
        setCustomNativeDragPreview({
          getOffset: pointerOutsideOfPreview({ x: "16px", y: "8px" }),
          render: ({ container }) => {
            return render(
              h(
                "div",
                {
                  class:
                    "bg-white text-blackA11 rounded-md text-sm font-medium px-3 py-1.5",
                },
                item.id
              ),
              container
            );
          },
          nativeSetDragImage,
        });
      },
    }),

    dropTargetForElements({
      element: currentElement,
      getData: ({ input, element }) => {
        const data = { id: item.id };
        return attachInstruction(data, {
          input,
          element,
          indentPerLevel: 16,
          currentLevel: props.item.level,
          mode: "standard",
          block: [],
        });
      },
      canDrop: ({ source }) => {
        return source.data.id !== item.id;
      },
      onDrag: ({ self }) => {
        console.log("onDrag", self);
        instruction.value = extractInstruction(
          self.data
        ) as typeof instruction.value;
      },

      onDragLeave: () => {
        instruction.value = null;
      },
      onDrop: () => {
        instruction.value = null;
      },
      getIsSticky: () => true,
    }),

    monitorForElements({
      canMonitor: ({ source }) => {
        return source.data.id !== item.id;
      },
    })
  );
});
onBeforeUnmount(() => {
  dndFunction?.();
});

// watchEffect(() => {
//   const rowElement = spanRef.value?.closest(".el-table__row") as HTMLDivElement;

//   rowElement?.classList?.add("relative");
//   if (isDragging.value) {
//     rowElement?.classList?.add("opacity-50");
//   } else {
//     rowElement?.classList?.remove("opacity-50");
//   }

//   // const cellElement = spanRef.value?.closest(
//   //   ".el-table__cell"
//   // ) as HTMLDivElement;
//   // if (instruction?.value) {
//   //   rowElement?.classList?.remove("relative");
//   // } else {
//   //   rowElement?.classList?.add("relative");
//   // }
// });
</script>
<template>
  <span ref="spanRef" :class="{ 'opacity-50': isDragging }">
    <span class="pl-2" v-if="props.column?.slots?.default">
      <slot :name="props.column?.slots?.default"></slot>
    </span>
    <span v-else class="pl-2">{{
      props?.column?.formatter?.(
        props.item?.value,
        props.column,
        props.item?.index
      ) || props.item?.value?.[props.column?.field]
    }}</span>
    <span
      v-if="instruction"
      class="absolute h-full w-full top-0 border-blue-500"
      :style="{
        left: `5px`,
        width: `calc(100% - ${
          instruction?.currentLevel * instruction?.indentPerLevel
        }px)`,
      }"
      :class="{
        '!border-b-2': instruction?.type === 'reorder-below',
        '!border-t-2': instruction?.type === 'reorder-above',
        '!border-2 rounded': instruction?.type === 'make-child',
      }"
    />
  </span>
</template>

<style lang="css" scoped>
@import url('./table-tree-item-dnd.css');
</style>