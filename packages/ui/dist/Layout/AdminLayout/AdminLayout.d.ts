import { PropsWithChildren, ReactElement } from "react";
type PropsWithChildrenAndClassName = PropsWithChildren & {
    className?: string;
};
export declare const AdminLayoutRoot: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutBurger: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutHeader: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutNavbarMobile: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutNavbar: ({ className, children, mobile, }: PropsWithChildrenAndClassName & {
    mobile?: ReactElement;
}) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutMain: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutBreadcrumbs: ({ breadcrumbs, }: {
    breadcrumbs: string[];
}) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutMainTitle: ({ children, breadcrumbs, burger, }: PropsWithChildren & {
    breadcrumbs?: ReactElement;
    burger?: ReactElement;
}) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutContainer: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const AdminLayoutMobileOverlay: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export {};
