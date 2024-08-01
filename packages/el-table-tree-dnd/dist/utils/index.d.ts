import { Instruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item';

export interface TreeItem {
    id?: string;
    children?: TreeItem[];
}
export type TreeAction = {
    type: "instruction";
    instruction: Instruction;
    itemId: string;
    targetId: string;
} | {
    type: "toggle";
    itemId: string;
} | {
    type: "expand";
    itemId: string;
} | {
    type: "collapse";
    itemId: string;
} | {
    type: "modal-move";
    itemId: string;
    targetId: string;
    index: number;
};
export interface TreeItem {
    id?: string;
    children?: TreeItem[];
}
export declare const treeHandler: {
    remove<T extends TreeItem>(data: T[], id: string): T[];
    insertBefore<T extends TreeItem>(data: T[], targetId: string, newItem: T): T[];
    insertAfter<T extends TreeItem>(data: T[], targetId: string, newItem: T): T[];
    insertChild<T extends TreeItem>(data: T[], targetId: string, newItem: T): T[];
    find<T extends TreeItem>(data: T[], itemId: string): T | undefined;
    getPathToItem<T extends TreeItem>({ current, targetId, parentIds, }: {
        current: T[];
        targetId: string;
        parentIds?: string[];
    }): string[] | undefined;
    hasChildren<T extends TreeItem>(item: T): boolean | undefined;
    getAllIds<T extends TreeItem>(tree: T[]): string[];
    traverse<T extends TreeItem>(tree: T[], callback: (node: T) => void): void;
};
export declare function updateTree<T extends TreeItem>(data: T[], action: TreeAction): T[] | undefined;
export declare let treeRecordObj: Record<string, boolean>;
export declare const setTreeRecord: (index: number) => void;
export declare const resetTreeRecord: () => void;
