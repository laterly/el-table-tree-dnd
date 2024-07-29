import { TableColumn } from './types';

interface ItemProps {
    id: string | number;
    index: number;
    level: number;
    value: any;
    hasChildren: boolean;
}
interface Props {
    column: TableColumn<any>;
    item: ItemProps;
    expandItem?: (row: any) => void;
    closeItem?: (row: any) => void;
    allowDrag?: (props: {
        dragSource: any;
    }) => undefined | boolean;
    allowDrop?: (props: {
        dragSource: any;
        dropTarget: any;
    }) => undefined | boolean;
}
declare function __VLS_template(): Partial<Record<string, (_: {}) => any>>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_TypePropsToOption<Props>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "node-drag-start": (source: any) => void;
    "node-drag-enter": (source: any, target: any) => void;
    "node-drag-leave": (source: any, target: any) => void;
    "node-drag-over": (source: any, target: any) => void;
    "node-drag-end": (source: any, target: any) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToOption<Props>>> & {
    "onNode-drag-start"?: ((source: any) => any) | undefined;
    "onNode-drag-enter"?: ((source: any, target: any) => any) | undefined;
    "onNode-drag-leave"?: ((source: any, target: any) => any) | undefined;
    "onNode-drag-over"?: ((source: any, target: any) => any) | undefined;
    "onNode-drag-end"?: ((source: any, target: any) => any) | undefined;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
