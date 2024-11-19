"use client";
import { jsx, Fragment } from 'react/jsx-runtime';
import { createContext, useState, useEffect, useContext } from 'react';
import { cx } from '../../index.mjs';
import { Menu } from 'lucide-react';

const FrontLayoutContext = createContext({
    mobileNavbarOpened: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setMobileNavbarOpened: (opened) => {
        //
    },
    desktopSize: "lg",
});
const useFrontLayoutContext = () => {
    const context = useContext(FrontLayoutContext);
    if (!context) {
        throw new Error("useFrontLayoutContext must be used inside the FrontLayoutProvider");
    }
    return context;
};
const FrontLayoutProvider = ({ desktopSize = "lg", children, }) => {
    const [mobileNavbarOpened, setMobileNavbarOpened] = useState(false);
    useEffect(() => {
        const closeNavbarOnEscape = (e) => {
            if (e.key === "Escape") {
                setMobileNavbarOpened(false);
            }
        };
        window.addEventListener("keydown", closeNavbarOnEscape);
        return () => window.removeEventListener("keydown", closeNavbarOnEscape);
    }, []);
    return (jsx(FrontLayoutContext.Provider, { value: {
            mobileNavbarOpened,
            setMobileNavbarOpened,
            desktopSize,
        }, children: children }));
};
const FrontLayoutBurgerClient = ({ className, children = jsx(Menu, { size: 14 }), }) => {
    const { mobileNavbarOpened, setMobileNavbarOpened, desktopSize } = useFrontLayoutContext();
    return (jsx("button", { className: cx(`mr-2 flex h-6 w-6 items-center justify-center rounded bg-gray-200 ${desktopSize}:hidden`, className), onClick: () => setMobileNavbarOpened(!mobileNavbarOpened), children: children }));
};
const FrontLayoutNavbarMobileOverlayClient = ({ className, children, }) => {
    const { mobileNavbarOpened, setMobileNavbarOpened, desktopSize } = useFrontLayoutContext();
    if (!mobileNavbarOpened) {
        return false;
    }
    return (jsx("div", { className: cx(`fixed bottom-0 top-0 z-10 w-full bg-black/60 backdrop-blur-sm ${desktopSize}:hidden`, className), onClick: () => setMobileNavbarOpened(false), children: children }));
};
const FrontLayoutNavbarMobileClient = ({ className, children, }) => {
    const { mobileNavbarOpened, desktopSize } = useFrontLayoutContext();
    return (jsx(Fragment, { children: mobileNavbarOpened && (jsx("div", { className: cx(`fixed top-0 z-20 h-full w-[260px] overflow-scroll overscroll-contain border-gray-300 bg-gray-50 shadow-[2px_0px_3px_-1px_rgba(0,0,0,0.1),1px_0px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${desktopSize}:hidden`, className), children: children })) }));
};
const FrontLayoutMobileVisibleClient = ({ children, }) => {
    const { desktopSize } = useFrontLayoutContext();
    return jsx("div", { className: `block ${desktopSize}:hidden`, children: children });
};
const FrontLayoutDesktopVisibleClient = ({ children, }) => {
    const { desktopSize } = useFrontLayoutContext();
    return jsx("div", { className: `hidden ${desktopSize}:block`, children: children });
};

export { FrontLayoutBurgerClient, FrontLayoutDesktopVisibleClient, FrontLayoutMobileVisibleClient, FrontLayoutNavbarMobileClient, FrontLayoutNavbarMobileOverlayClient, FrontLayoutProvider };
