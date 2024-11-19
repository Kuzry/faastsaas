import { jsx } from 'react/jsx-runtime';
import { cx } from '../index.mjs';

const Menu = ({ orientation = "horizontal", className, children, }) => {
    return (jsx("ul", { className: cx("m-0 flex list-none gap-4 p-0", orientation === "vertical" && "flex-col", className), children: children }));
};
const MenuItem = ({ className, children, }) => {
    return (jsx("li", { className: cx("flex items-center text-sm", className), children: children }));
};

export { Menu, MenuItem };
