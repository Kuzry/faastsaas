import { PropsWithChildren } from "react";
type PropsWithChildrenAndClassName = PropsWithChildren & {
    className?: string;
};
export declare const AdminLayoutProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutBurgerClient: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutNavbarMobileOverlayClient: ({ className, children, }: PropsWithChildrenAndClassName) => false | import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutNavbarMobileClient: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export {};
