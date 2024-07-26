<script setup lang="ts">
import { h, ref, render, watchEffect, unref } from "vue";
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
import "./table-tree-item-dnd.css";

interface Props {
  id: string | number;
  index: number;
  level: number;
  value: any;
  hasChildren: boolean;
}

const props = defineProps<{
  item: Props;
}>();

const spanRef = ref();
const isDragging = ref(false);

const instruction = ref<Extract<
  Instruction,
  { type: "reorder-above" | "reorder-below" | "make-child" }
> | null>(null);

watchEffect((onCleanup) => {
  let rowElement;
  if (spanRef.value) {
    rowElement = spanRef.value?.closest(".el-table__row");
  }
  const elRef = ref(rowElement);
  const currentElement = unref(elRef);

  if (!currentElement) return;

  const item = {
    ...props.item.value,
    level: props.item.level,
    id: props.item.id,
  };

  const dndFunction = combine(
    draggable({
      element: currentElement,
      getInitialData: () => item,
      onDragStart: () => {
        isDragging.value = true;
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

  onCleanup(() => dndFunction());
});
</script>
<template>
  <span ref="spanRef" :class="{ 'opacity-50': isDragging }">
    <span class="pl-2">{{ props.item.value.title }}</span>
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
