<script setup lang="ts">
import {
  ref,
  onMounted,
  unref,
  onBeforeUnmount,
  computed,
  nextTick,
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
// import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview";
// import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { treeRecordObj, setTreeRecord } from "./utils";
import { Recordable, TableColumn } from "./types";

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
  expandItem?: (row: Recordable) => void;
  closeItem?: (row: Recordable) => void;
  allowDrag?: (props: { dragSource: Recordable }) => undefined | boolean;
  allowDrop?: (props: {
    dragSource: Recordable;
    dropTarget: Recordable;
  }) => undefined | boolean;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  // 节点开始拖拽时触发的事件
  (e: "node-drag-start", source: Recordable): void;
  (e: "node-drag-enter", source: Recordable, target: Recordable): void;
  (e: "node-drag-leave", source: Recordable, target: Recordable): void;
  (e: "node-drag-over", source: Recordable, target: Recordable): void;
  (e: "node-drag-end", source: Recordable, target: Recordable): void;
}>();

const spanRef = ref();
const isDragging = ref(false);

const mode = computed(() => {
  if (props.item.hasChildren) return "expanded";
  return "standard";
});

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

  // console.log("props", props.item);

  setTreeRecord(props.item?.index);

  dndFunction = combine(
    draggable({
      element: currentElement,
      getInitialData: () => ({
        ...props.item.value,
        level: props.item.level,
        id: props.item.id,
      }),
      onDragStart: (data) => {
        // console.log("data", data);
        isDragging.value = true;
        props?.closeItem?.(props.item.value);
        emits("node-drag-start", data.source);
      },
      canDrag() {
        return props?.allowDrag && typeof props.allowDrag === "function"
          ? !!props?.allowDrag?.({
              dragSource: props.item.value,
            })
          : true;
      },
      onDrop: () => {
        isDragging.value = false;
        props?.expandItem?.(props.item.value);
      },
      // onGenerateDragPreview({ nativeSetDragImage }) {
      //   setCustomNativeDragPreview({
      //     getOffset: pointerOutsideOfPreview({ x: "16px", y: "8px" }),
      //     render: ({ container }) => {
      //       return render(
      //         h(
      //           "div",
      //           {
      //             class:
      //               "bg-white text-blackA11 rounded-md text-sm font-medium px-3 py-1.5",
      //           },
      //           props.item.id
      //         ),
      //         container
      //       );
      //     },
      //     nativeSetDragImage,
      //   });
      // },
    }),

    dropTargetForElements({
      element: currentElement,
      getData: ({ input, element }) => {
        const data = { id: props.item.id };
        return attachInstruction(data, {
          input,
          element,
          indentPerLevel: 16,
          currentLevel: props.item.level,
          mode: mode.value,
          block: [],
        });
      },
      canDrop: ({ source }) => {
        return props?.allowDrop && typeof props.allowDrop === "function"
          ? !!props?.allowDrop?.({
              dragSource: source?.data,
              dropTarget: props.item?.value,
            })
          : source.data.id !== props.item.id;
      },
      onDrag: ({ self, source, location }) => {
        instruction.value = extractInstruction(
          self.data
        ) as typeof instruction.value;

        emits(
          "node-drag-over",
          source?.data,
          location?.current?.dropTargets?.[0]?.data
        );
      },
      onDragEnter: ({ source, location }) => {
        if (source.data.id !== props.item.id) {
          props?.expandItem?.(props.item?.value);
        }
        emits(
          "node-drag-enter",
          source?.data,
          location?.current?.dropTargets?.[0]?.data
        );
      },

      onDragLeave: ({ source, location }) => {
        instruction.value = null;
        emits(
          "node-drag-leave",
          source?.data,
          location?.current?.dropTargets?.[0]?.data
        );
      },
      onDrop: ({ source, location, self }) => {
        instruction.value = null;
        if (location.current.dropTargets[0].data.id === props.item.id) {
          nextTick(() => {
            props?.expandItem?.(props.item?.value);
          });
        }
        emits(
          "node-drag-end",
          source?.data,
          location?.current?.dropTargets?.[0]?.data
        );
      },
      getIsSticky: () => true,
    }),

    monitorForElements({
      canMonitor: ({ source }) => {
        return source.data.id !== props.item.id;
      },
    })
  );
});
onBeforeUnmount(() => {
  dndFunction?.();
});
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
        left: `${instruction?.currentLevel * instruction?.indentPerLevel}px`,
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

<style lang="css">
@import url("./table-tree-item-dnd.css");
</style>
