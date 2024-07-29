import { TableProps as ElTableProps, TableInstance, PaginationProps, TableColumnCtx } from 'element-plus';

export type ElTableRef = TableInstance;
export interface TableRefExpose {
    getElTableExpose: () => Promise<ElTableRef>;
}
export type TableColumn<T extends any> = {
    slots?: {
        default?: string;
        header?: string;
    };
} & Partial<TableColumnCtx<T>>;
interface DNDProps<T extends any> {
    draggable?: boolean;
    allowDrag?: (props: {
        dragSource: T;
    }) => undefined | boolean;
    allowDrop?: (props: {
        dragSource: T;
        dropTarget: T;
    }) => undefined | boolean;
}
export type TableProps<T extends any> = {
    data?: T[];
    columns?: T[];
    pagination?: Partial<PaginationProps>;
} & Omit<Partial<ElTableProps<T[]>>, "data"> & DNDProps<T>;
export interface EmitsDNDProps<T extends any> {
    (e: "node-drag-start", props: {
        dragSource: T;
    }): void;
    (e: "node-drop", props: {
        oldNodeData: T[];
        newNodeData: T[];
        dragSource: T;
        dropTarget: T;
    }): void;
    (e: "node-drag-enter", props: {
        dragSource: T;
        dropTarget: T;
    }): any;
    (e: "node-drag-leave", props: {
        dragSource: T;
        dropTarget: T;
    }): any;
    (e: "node-drag-over", props: {
        dragSource: T;
        dropTarget: T;
    }): any;
    (e: "node-drag-end", props: {
        dragSource: T;
        dropTarget: T;
    }): any;
}
interface EmitsTableProps<T extends any> {
    (e: "selection-change", data: T[]): void;
    (e: "size-change", val: number): void;
    (e: "current-change", val: number): any;
}
export type TableEmitsProps<T> = EmitsDNDProps<T> & EmitsTableProps<T>;
export {};
