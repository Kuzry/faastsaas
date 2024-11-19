"use client";
import { jsx, Fragment } from 'react/jsx-runtime';
import { createContext, useState, useEffect, useContext } from 'react';
import { cx } from '../../index.mjs';

const AdminLayoutContext = createContext({
    mobileNavbarOpened: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setMobileNavbarOpened: (opened) => {
        //
    },
});
const useAdminLayoutContext = () => {
    const context = useContext(AdminLayoutContext);
    if (!context) {
        throw new Error("useAdminLayoutContext must be used inside the AdminLayoutProvider");
    }
    return context;
};
const AdminLayoutProvider = ({ children }) => {
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
    return (jsx(AdminLayoutContext.Provider, { value: {
            mobileNavbarOpened,
            setMobileNavbarOpened,
        }, children: children }));
};
const AdminLayoutBurgerClient = ({ className, children = "=", }) => {
    const { mobileNavbarOpened, setMobileNavbarOpened } = useAdminLayoutContext();
    return (jsx("button", { className: cx("inline-block h-6 w-6 rounded bg-gray-200 px-2 lg:hidden", className), onClick: () => setMobileNavbarOpened(!mobileNavbarOpened), children: children }));
};
const AdminLayoutNavbarMobileOverlayClient = ({ className, children, }) => {
    const { mobileNavbarOpened, setMobileNavbarOpened } = useAdminLayoutContext();
    if (!mobileNavbarOpened) {
        return false;
    }
    return (jsx("div", { className: cx("fixed bottom-0 top-0 z-10 w-full bg-black/60 backdrop-blur-sm lg:hidden", className), onClick: () => setMobileNavbarOpened(false), children: children }));
};
const AdminLayoutNavbarMobileClient = ({ className, children, }) => {
    const { mobileNavbarOpened } = useAdminLayoutContext();
    return (jsx(Fragment, { children: mobileNavbarOpened && (jsx("div", { className: cx("fixed z-20 h-full w-[260px] overflow-scroll overscroll-contain border-gray-300 bg-gray-50 shadow-[2px_0px_3px_-1px_rgba(0,0,0,0.1),1px_0px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:hidden", className), children: children })) }));
};

export { AdminLayoutBurgerClient, AdminLayoutNavbarMobileClient, AdminLayoutNavbarMobileOverlayClient, AdminLayoutProvider };
