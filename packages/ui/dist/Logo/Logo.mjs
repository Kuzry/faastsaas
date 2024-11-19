import { jsx } from 'react/jsx-runtime';
import { cx } from '../index.mjs';

const Logo = ({ href = "/", className, children, ...props }) => (jsx("a", { href: href, className: cx("text-gray-8 hover:text-gray-9 inline-block items-center whitespace-nowrap font-bold leading-[12px] no-underline", className), ...props, children: children }));
const LogoDescription = ({ children, }) => (jsx("span", { className: "mt-1.5 block text-[8px] font-normal leading-[0px]", children: children }));

export { Logo, LogoDescription };
