import { HTMLAttributes, PropsWithChildren } from "react";
interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
    href?: string;
}
type PropsWithChildrenAndClassName = PropsWithChildren & {
    className?: string;
};
export declare const Logo: ({ href, className, children, ...props }: LogoProps & PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export declare const LogoDescription: ({ children, }: PropsWithChildrenAndClassName) => import("react/jsx-runtime").JSX.Element;
export {};
