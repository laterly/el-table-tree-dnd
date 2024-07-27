import {
  type TableProps as ElTableProps,
  type TableInstance,
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

export interface TableColumn {
  prop?: string;
  label?: string;
  type?: "index" | "selection";
  slots?: {
    default?: string;
    header?: string;
  };
  index?: number | ((index: number) => number);
  columnKey?: string;
  width?: string | number;
  minWidth?: string | number;
  fixed?: boolean | "left" | "right";
  sortMethod?: (...args: any[]) => number;
  sortBy?: string | string[] | ((...args: any[]) => string | string[]);
  sortOrders?: (string | null)[];
  resizable?: boolean;
  formatter?: (row: Recordable, column: TableColumn, $index?: number) => any;
  showOverflowTooltip?: boolean;
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
  className?: string;
  labelClassName?: string;
  selectable?: (...args: any[]) => boolean;
  reserveSelection?: boolean;
  filters?: Array<{ text: string; value: string }>;
  filterPlacement?: string;
  filterMultiple?: boolean;
  filterMethod?: (...args: any[]) => boolean;
  filteredValue?: string[];
  [key: string]: any;
}

export interface TableSlotDefault {
  row: Recordable;
  column: TableColumn;
  $index: number;
  [key: string]: any;
}

export interface Pagination {
  small?: boolean;
  background?: boolean;
  pageSize?: number;
  defaultPageSize?: number;
  total?: number;
  pageCount?: number;
  pagerCount?: number;
  currentPage?: number;
  defaultCurrentPage?: number;
  layout?: string;
  pageSizes?: number[];
  popperClass?: string;
  prevText?: string;
  nextText?: string;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
}

export interface TableProps extends Omit<Partial<ElTableProps<any[]>>, "data"> {
  // 数据源
  data?: Recordable;
  // 表头
  columns?: TableColumn[];
  // 是否展示分页
  pagination?: Pagination | undefined;
  // 分页每页大小
  pageSize?: number;
  // 分页当前页
  currentPage?: number;
  // 是否所有的超出隐藏，优先级低于schema中的showOverflowTooltip,
  showOverflowTooltip?: boolean;
  // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
  reserveSelection?: boolean;
  // 加载状态
  loading?: boolean;
  // 对齐方式
  align?: "left" | "center" | "right";
  // 表头对齐方式
  headerAlign?: "left" | "center" | "right";
  sortable?: boolean;
}
