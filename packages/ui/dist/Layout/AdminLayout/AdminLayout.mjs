import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { cx } from '../../index.mjs';
import { AdminLayoutProvider, AdminLayoutBurgerClient, AdminLayoutNavbarMobileClient, AdminLayoutNavbarMobileOverlayClient } from './AdminLayout.client.mjs';

const AdminLayoutRoot = ({ className, children, }) => (jsx(AdminLayoutProvider, { children: jsx("div", { className: cx("bg-gray-50", className), children: children }) }));
const AdminLayoutBurger = ({ className, children, }) => (jsx(AdminLayoutBurgerClient, { className: className, children: children }));
const AdminLayoutHeader = ({ className, children, }) => (jsx("div", { className: cx("sticky flex h-14 items-center border-b border-dashed border-gray-300 px-6", className), children: children }));
const AdminLayoutNavbarMobile = ({ className, children, }) => (jsx(AdminLayoutNavbarMobileClient, { className: className, children: children }));
const AdminLayoutNavbar = ({ className, children, mobile, }) => (jsxs(Fragment, { children: [jsx("div", { className: cx("fixed z-10 hidden h-full w-[260px] border-r border-dashed border-gray-300 lg:block", className), children: children }), mobile] }));
const AdminLayoutMain = ({ className, children, }) => (jsx("div", { className: cx("min-h-dvh flex-1 bg-gray-50 pb-6 lg:ml-[260px]", className), children: children }));
const AdminLayoutBreadcrumbs = ({ breadcrumbs, }) => (jsxs("div", { className: "mb-1 flex gap-2 text-sm", children: [jsx("div", { className: `after:ml-2 after:content-['>'] last:after:content-['']`, children: "Home" }), breadcrumbs.map((breadcrumb, index) => (jsx("div", { className: `text-nowrap after:ml-2 after:content-['>'] last:after:content-['']`, children: breadcrumb }, index)))] }));
const AdminLayoutMainTitle = ({ children, breadcrumbs, burger = jsx(AdminLayoutBurger, {}), }) => (jsx("div", { children: jsxs("div", { className: "flex flex-col justify-center py-8", children: [breadcrumbs, jsxs("div", { className: "flex items-center gap-2", children: [burger, jsx("h1", { className: "text-2xl font-semibold", children: children })] })] }) }));
const AdminLayoutContainer = ({ className, children, }) => (jsx("div", { className: cx("container", className), children: children }));
const AdminLayoutMobileOverlay = ({ className, children, }) => (jsx(AdminLayoutNavbarMobileOverlayClient, { className: className, children: children }));

export { AdminLayoutBreadcrumbs, AdminLayoutBurger, AdminLayoutContainer, AdminLayoutHeader, AdminLayoutMain, AdminLayoutMainTitle, AdminLayoutMobileOverlay, AdminLayoutNavbar, AdminLayoutNavbarMobile, AdminLayoutRoot };
