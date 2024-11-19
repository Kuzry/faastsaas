import { PropsWithChildren } from "react";
type PropsWithChildrenAndClassName = PropsWithChildren & {
    className?: string;
};
interface TFrontLayoutContext {
    mobileNavbarOpened: boolean;
    setMobileNavbarOpened: (opened: boolean) => void;
    desktopSize: string;
}
export declare const FrontLayoutProvider: ({ desktopSize, children, }: PropsWithChildren & Partial<Pick<TFrontLayoutContext, "desktopSize">>) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutBurgerClient: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutNavbarMobileOverlayClient: ({ className, children, }: PropsWithChildrenAndClassName) => false | import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutNavbarMobileClient: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutMobileVisibleClient: ({ children, }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutDesktopVisibleClient: ({ children, }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export {};
