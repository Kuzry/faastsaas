import { PropsWithChildren } from "react";
import { cx } from "../index";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

export const Menu = ({
  orientation = "horizontal",
  className,
  children,
}: {
  orientation?: "horizontal" | "vertical";
} & PropsWithChildrenAndClassName) => {
  return (
    <ul
      className={cx(
        "m-0 flex list-none gap-4 p-0",
        orientation === "vertical" && "flex-col",
        className
      )}
    >
      {children}
    </ul>
  );
};

export const MenuItem = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return (
    <li className={cx("flex items-center text-sm", className)}>{children}</li>
  );
};

// export const MenuLink = ({}) => {
//   return;
// };
//
// export const MenuDummyLink = ({}) => {
//   return;
// };
