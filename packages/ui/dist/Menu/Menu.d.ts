import { PropsWithChildren } from "react";
type PropsWithChildrenAndClassName = PropsWithChildren & {
    className?: string;
};
export declare const Menu: ({ orientation, className, children, }: {
    orientation?: "horizontal" | "vertical";
} & PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const MenuItem: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export {};
