import { jsx } from 'react/jsx-runtime';
import { cx } from '../../index.mjs';
import { FrontLayoutProvider, FrontLayoutBurgerClient, FrontLayoutNavbarMobileClient, FrontLayoutNavbarMobileOverlayClient, FrontLayoutMobileVisibleClient, FrontLayoutDesktopVisibleClient } from './FrontLayout.client.mjs';

const FrontLayoutRoot = ({ className, children, }) => (jsx(FrontLayoutProvider, { children: jsx("div", { className: cx("", className), children: children }) }));
const FrontLayoutBurger = ({ className, children, }) => (jsx(FrontLayoutBurgerClient, { className: className, children: children }));
const FrontLayoutHeader = ({ className, children, }) => (jsx("header", { className: cx("border-primary-100 sticky flex h-14 items-center border-b", className), children: children }));
const FrontLayoutNavbarMobile = ({ className, children, }) => (jsx(FrontLayoutNavbarMobileClient, { className: className, children: children }));
const FrontLayoutMain = ({ className, children, }) => (jsx("main", { className: cx("", className), children: children }));
const FrontLayoutSection = ({ className, children, }) => (jsx("div", { className: cx("border-primary-200 border-t py-16", className), children: children }));
const FrontLayoutSectionTitleContainer = ({ className, children, }) => {
    return jsx("div", { className: cx("mb-10", className), children: children });
};
const FrontLayoutSectionTitle = ({ className, children, }) => (jsx("h3", { className: cx("text-pretty text-center text-4xl font-medium tracking-tighter", className), children: children }));
const FrontLayoutContainer = ({ className, children, }) => (jsx("div", { className: cx("container", className), children: children }));
const FrontLayoutFooter = ({ className, children, }) => (jsx("footer", { className: cx("border-primary-200 border-t py-16", className), children: children }));
const FrontLayoutHero = ({ className, children, }) => (jsx("div", { className: cx("mx-auto mb-10 mt-24 flex max-w-6xl flex-col items-center gap-6 py-16 text-center", className), children: children }));
const FrontLayoutHeroTitle = ({ className, children, }) => (jsx("h1", { className: cx("text-pretty py-6 text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-7xl", className), children: children }));
const FrontLayoutHeroText = ({ className, children, }) => (jsx("p", { className: cx("text-muted-foreground max-w-[64rem] text-balance px-6 text-lg md:text-xl", className), children: children }));
const FrontLayoutMobileOverlay = ({ className, children, }) => (jsx(FrontLayoutNavbarMobileOverlayClient, { className: className, children: children }));
const FrontLayoutMobileVisible = ({ children }) => {
    return (jsx(FrontLayoutMobileVisibleClient, { children: children }));
};
const FrontLayoutDesktopVisible = ({ children }) => {
    return (jsx(FrontLayoutDesktopVisibleClient, { children: children }));
};

export { FrontLayoutBurger, FrontLayoutContainer, FrontLayoutDesktopVisible, FrontLayoutFooter, FrontLayoutHeader, FrontLayoutHero, FrontLayoutHeroText, FrontLayoutHeroTitle, FrontLayoutMain, FrontLayoutMobileOverlay, FrontLayoutMobileVisible, FrontLayoutNavbarMobile, FrontLayoutRoot, FrontLayoutSection, FrontLayoutSectionTitle, FrontLayoutSectionTitleContainer };
