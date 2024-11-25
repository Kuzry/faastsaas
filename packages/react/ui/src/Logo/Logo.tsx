import { HTMLAttributes, PropsWithChildren } from "react";
import { cx } from "../index";

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

export const Logo = ({
  href = "/",
  className,
  children,
  ...props
}: LogoProps & PropsWithChildrenAndClassName) => (
  <a
    href={href}
    className={cx(
      "text-gray-8 hover:text-gray-9 inline-block items-center whitespace-nowrap font-bold leading-[12px] no-underline",
      className
    )}
    {...props}
  >
    {children}
  </a>
);

export const LogoDescription = ({
  children,
}: PropsWithChildrenAndClassName) => (
  <span className="mt-1.5 block text-[8px] font-normal leading-[0px]">
    {children}
  </span>
);
