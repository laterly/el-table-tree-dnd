import {
  type TableProps as ElTableProps,
  type TableInstance,
  type PaginationProps,
  type TableColumnCtx,
} from "element-plus";

type NonNullableKey<K> = K extends null | undefined ? never : K;

export type Recordable<T = any, K extends string | number = string> = Record<
  NonNullableKey<K>,
  T
>;

export type ElTableRef = TableInstance;

export interface TableRefExpose {
  getElTableExpose: () => Promise<ElTableRef>;
}

export type TableColumn = {
  slots?: {
    default?: string;
    header?: string;
  };
} & Partial<TableColumnCtx<Recordable>>;

interface DNDProps {
  draggable?: boolean; // 是否开启拖拽节点功能
  allowDrag?: (props: { dragSource: Recordable }) => undefined | boolean;
  allowDrop?: (props: {
    dragSource: Recordable;
    dropTarget: Recordable;
  }) => undefined | boolean; // 是否允许放置
}

export type TableProps = {
  data?: Recordable[];
  columns?: TableColumn[];
  // 是否展示分页
  pagination?: Partial<PaginationProps>;
} & Omit<Partial<ElTableProps<any[]>>, "data"> &
  DNDProps;

export interface EmitsDNDProps {
  (e: "node-drag-start", props: { dragSource: Recordable }): void; // 节点开始拖拽时触发的事件
  (
    e: "node-drop",
    props: {
      nodeData: Recordable[];
      dragSource: Recordable;
      dropTarget: Recordable;
    }
  ): void; // 拖拽成功完成时触发的事件
  (
    e: "node-drag-enter",
    props: {
      dragSource: Recordable;
      dropTarget: Recordable;
    }
  );
  (
    e: "node-drag-leave",
    props: {
      dragSource: Recordable;
      dropTarget: Recordable;
    }
  );
  (
    e: "node-drag-over",
    props: {
      dragSource: Recordable;
      dropTarget: Recordable;
    }
  );
  (
    e: "node-drag-end",
    props: {
      dragSource: Recordable;
      dropTarget: Recordable;
    }
  );
}

interface EmitsTableProps {
  (e: "selection-change", data: Recordable[]): void; // 改变selection
  (e: "size-change", val: number): void;
  (e: "current-change", val: number);
}

export type TableEmitsProps = EmitsDNDProps & EmitsTableProps;
