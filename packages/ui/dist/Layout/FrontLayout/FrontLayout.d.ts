import { PropsWithChildren } from "react";
type PropsWithChildrenAndClassName = PropsWithChildren & {
    className?: string;
};
export declare const FrontLayoutRoot: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutBurger: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutHeader: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutNavbarMobile: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutMain: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutSection: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutSectionTitleContainer: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutSectionTitle: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutContainer: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutFooter: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutHero: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutHeroTitle: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutHeroText: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutMobileOverlay: ({ className, children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutMobileVisible: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const FrontLayoutDesktopVisible: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export {};