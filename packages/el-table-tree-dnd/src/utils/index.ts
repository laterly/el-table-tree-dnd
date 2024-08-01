import type { Instruction } from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";

export interface TreeItem {
  id?: string;
  children?: TreeItem[];
}

export type TreeAction =
  | {
      type: "instruction";
      instruction: Instruction;
      itemId: string;
      targetId: string;
    }
  | {
      type: "toggle";
      itemId: string;
    }
  | {
      type: "expand";
      itemId: string;
    }
  | {
      type: "collapse";
      itemId: string;
    }
  | { type: "modal-move"; itemId: string; targetId: string; index: number };

export interface TreeItem {
  id?: string;
  children?: TreeItem[];
  // 可以在这里添加其他属性，例如 isOpen、title 等
}

export const treeHandler = {
  remove<T extends TreeItem>(data: T[], id: string): T[] {
    if (!Array.isArray(data) || !id) {
      throw new Error("Invalid input for remove method");
    }
    return data
      .filter((item) => item.id !== id)
      .map((item) => ({
        ...item,
        children: item.children
          ? treeHandler.remove(item.children, id)
          : undefined,
      }));
  },
  insertBefore<T extends TreeItem>(
    data: T[],
    targetId: string,
    newItem: T
  ): T[] {
    if (!Array.isArray(data) || !targetId || !newItem) {
      throw new Error("Invalid input for insertBefore method");
    }
    return data.reduce<T[]>((acc, item) => {
      if (item.id === targetId) {
        acc.push(newItem, item);
      } else {
        acc.push({
          ...item,
          children: item.children
            ? treeHandler.insertBefore(item.children, targetId, newItem)
            : undefined,
        });
      }
      return acc;
    }, []);
  },
  insertAfter<T extends TreeItem>(
    data: T[],
    targetId: string,
    newItem: T
  ): T[] {
    if (!Array.isArray(data) || !targetId || !newItem) {
      throw new Error("Invalid input for insertAfter method");
    }
    return data.reduce<T[]>((acc, item) => {
      if (item.id === targetId) {
        acc.push(item, newItem);
      } else {
        acc.push({
          ...item,
          children: item.children
            ? treeHandler.insertAfter(item.children, targetId, newItem)
            : undefined,
        });
      }
      return acc;
    }, []);
  },
  insertChild<T extends TreeItem>(
    data: T[],
    targetId: string,
    newItem: T
  ): T[] {
    if (!Array.isArray(data) || !targetId || !newItem) {
      throw new Error("Invalid input for insertChild method");
    }
    return data.map((item) => {
      if (item.id === targetId) {
        return {
          ...item,
          children: [...(item.children ?? []), newItem],
        };
      }
      return {
        ...item,
        children: item.children
          ? treeHandler.insertChild(item.children, targetId, newItem)
          : undefined,
      };
    });
  },
  find<T extends TreeItem>(data: T[], itemId: string): T | undefined {
    if (!Array.isArray(data) || !itemId) {
      throw new Error("Invalid input for find method");
    }
    for (const item of data) {
      if (item.id === itemId) return item;
      if (item.children) {
        const result = treeHandler.find(item.children, itemId);
        if (result) return result as T;
      }
    }
    return undefined;
  },
  getPathToItem<T extends TreeItem>({
    current,
    targetId,
    parentIds = [],
  }: {
    current: T[];
    targetId: string;
    parentIds?: string[];
  }): string[] | undefined {
    if (!Array.isArray(current) || !targetId || !parentIds) {
      throw new Error("Invalid input for getPathToItem method");
    }
    for (const item of current) {
      if (item.id === targetId) return [...parentIds, item.id];
      if (item.children) {
        const nested = treeHandler.getPathToItem({
          current: item.children,
          targetId,
          parentIds: [...parentIds, item.id]?.filter(
            (item) => typeof item !== "undefined"
          ),
        });
        if (nested) return nested;
      }
    }
    return undefined;
  },
  hasChildren<T extends TreeItem>(item: T) {
    return item.children && item.children.length > 0;
  },
  getAllIds<T extends TreeItem>(tree: T[]): string[] {
    if (!Array.isArray(tree)) {
      throw new Error("Invalid input for getAllIds method");
    }
    let ids: string[] = [];

    function traverse(node: T) {
      if (node.id) {
        ids.push(node.id); // 收集当前节点的 id
      }
      if (treeHandler.hasChildren(node)) {
        // 如果有子节点，递归遍历子节点
        node.children?.forEach((child: T) => traverse(child));
      }
    }

    tree.forEach((node) => traverse(node)); // 遍历树中的每个根节点
    return ids;
  },
  traverse<T extends TreeItem>(tree: T[], callback: (node: T) => void): void {
    if (!Array.isArray(tree)) {
      throw new Error("Invalid input for traverseTree method");
    }
    tree.forEach((node) => {
      callback(node); // 调用回调函数
      if (treeHandler.hasChildren(node)) {
        treeHandler.traverse(node.children ?? [], callback); // 递归遍历子节点
      }
    });
  },
};

export function updateTree<T extends TreeItem>(data: T[], action: TreeAction) {
  const item = treeHandler.find(data, action.itemId);
  if (!item) return data;

  if (action.type === "instruction") {
    const instruction = action.instruction;

    if (instruction.type === "reparent") {
      const path = treeHandler.getPathToItem({
        current: data,
        targetId: action.targetId,
      });
      if (!path) {
        console.error(`missing ${path}`);
        return;
      }

      const desiredId = path[instruction.desiredLevel];
      let result = treeHandler.remove(data, action.itemId);
      result = treeHandler.insertAfter(result, desiredId, item);
      return result;
    }

    // the rest of the actions require you to drop on something else
    if (action.itemId === action.targetId) return data;

    if (instruction.type === "reorder-above") {
      let result = treeHandler.remove(data, action.itemId);
      result = treeHandler.insertBefore(result, action.targetId, item);
      return result;
    }

    if (instruction.type === "reorder-below") {
      let result = treeHandler.remove(data, action.itemId);
      result = treeHandler.insertAfter(result, action.targetId, item);
      return result;
    }

    if (instruction.type === "make-child") {
      let result = treeHandler.remove(data, action.itemId);
      result = treeHandler.insertChild(result, action.targetId, item);

      return result;
    }

    console.warn("TODO: action not implemented", instruction);

    return data;
  }

  if (action.type === "modal-move") {
    let result = treeHandler.remove(data, item?.id!);

    const siblingItems = getChildItems(result, action.targetId) ?? [];

    if (siblingItems.length === 0) {
      if (action.targetId === "") {
        /**
         * If the target is the root level, and there are no siblings, then
         * the item is the only thing in the root level.
         */
        result = [item];
      } else {
        /**
         * Otherwise for deeper levels that have no children, we need to
         * use `insertChild` instead of inserting relative to a sibling.
         */
        result = treeHandler.insertChild(result, action.targetId, item);
      }
    } else if (action.index === siblingItems.length) {
      const relativeTo = siblingItems[siblingItems.length - 1];
      /**
       * If the position selected is the end, we insert after the last item.
       */
      result = treeHandler.insertAfter(result, relativeTo.id!, item);
    } else {
      const relativeTo = siblingItems[action.index];
      /**
       * Otherwise we insert before the existing item in the given position.
       * This results in the new item being in that position.
       */
      result = treeHandler.insertBefore(result, relativeTo.id!, item);
    }

    return result;
  }

  return data;
}

function getChildItems<T extends TreeItem>(data: T[], targetId: string) {
  /**
   * An empty string is representing the root
   */
  if (targetId === "") return data;

  const targetItem = treeHandler.find(data, targetId);
  if (!targetItem) {
    console.error(`missing ${targetItem}`);
    return;
  }

  return targetItem.children;
}

export let treeRecordObj: Record<string, boolean> = {};

export const setTreeRecord = (index: number) => {
  treeRecordObj[index] = true;
};

export const resetTreeRecord = () => {
  treeRecordObj = {};
};
