import {
  type TableProps as ElTableProps,
  type TableInstance,
  type PaginationProps,
  type TableColumnCtx,
} from "element-plus";

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
  draggable?: boolean; // 是否开启拖拽节点功能
  allowDrag?: (props: { dragSource: T }) => undefined | boolean;
  allowDrop?: (props: { dragSource: T; dropTarget: T }) => undefined | boolean; // 是否允许放置
}

export type TableProps<T extends any> = {
  data?: T[];
  columns?: T[];
  // 是否展示分页
  pagination?: Partial<PaginationProps>;
} & Omit<Partial<ElTableProps<T[]>>, "data"> &
  DNDProps<T>;

export interface EmitsDNDProps<T extends any> {
  (e: "node-drag-start", props: { dragSource: T }): void; // 节点开始拖拽时触发的事件
  (
    e: "node-drop",
    props: {
      oldNodeData: T[];
      newNodeData: T[];
      dragSource: T;
      dropTarget: T;
    }
  ): void; // 拖拽成功完成时触发的事件
  (
    e: "node-drag-enter",
    props: {
      dragSource: T;
      dropTarget: T;
    }
  );
  (
    e: "node-drag-leave",
    props: {
      dragSource: T;
      dropTarget: T;
    }
  );
  (
    e: "node-drag-over",
    props: {
      dragSource: T;
      dropTarget: T;
    }
  );
  (
    e: "node-drag-end",
    props: {
      dragSource: T;
      dropTarget: T;
    }
  );
}

interface EmitsTableProps<T extends any> {
  (e: "selection-change", data: T[]): void; // 改变selection
  (e: "size-change", val: number): void;
  (e: "current-change", val: number);
}

export type TableEmitsProps<T> = EmitsDNDProps<T> & EmitsTableProps<T>;
