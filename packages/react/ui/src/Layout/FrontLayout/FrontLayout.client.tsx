"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { cx } from "../../index";
import { Menu } from "lucide-react";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

interface TFrontLayoutContext {
  mobileNavbarOpened: boolean;
  setMobileNavbarOpened: (opened: boolean) => void;
  desktopSize: string;
}

const FrontLayoutContext = createContext<TFrontLayoutContext>({
  mobileNavbarOpened: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMobileNavbarOpened: (opened: boolean) => {
    //
  },
  desktopSize: "lg",
});

const useFrontLayoutContext = () => {
  const context = useContext(FrontLayoutContext);

  if (!context) {
    throw new Error(
      "useFrontLayoutContext must be used inside the FrontLayoutProvider"
    );
  }

  return context;
};

export const FrontLayoutProvider = ({
  desktopSize = "lg",
  children,
}: PropsWithChildren & Partial<Pick<TFrontLayoutContext, "desktopSize">>) => {
  const [mobileNavbarOpened, setMobileNavbarOpened] =
    useState<TFrontLayoutContext["mobileNavbarOpened"]>(false);

  useEffect(() => {
    const closeNavbarOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileNavbarOpened(false);
      }
    };

    window.addEventListener("keydown", closeNavbarOnEscape);

    return () => window.removeEventListener("keydown", closeNavbarOnEscape);
  }, []);

  return (
    <FrontLayoutContext.Provider
      value={{
        mobileNavbarOpened,
        setMobileNavbarOpened,
        desktopSize,
      }}
    >
      {children}
    </FrontLayoutContext.Provider>
  );
};

export const FrontLayoutBurgerClient = ({
  className,
  children = <Menu size={14} />,
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened, setMobileNavbarOpened, desktopSize } =
    useFrontLayoutContext();

  return (
    <button
      className={cx(
        `mr-2 flex h-6 w-6 items-center justify-center rounded bg-gray-200 ${desktopSize}:hidden`,
        className
      )}
      onClick={() => setMobileNavbarOpened(!mobileNavbarOpened)}
    >
      {children}
    </button>
  );
};

export const FrontLayoutNavbarMobileOverlayClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened, setMobileNavbarOpened, desktopSize } =
    useFrontLayoutContext();

  if (!mobileNavbarOpened) {
    return false;
  }

  return (
    <div
      className={cx(
        `fixed bottom-0 top-0 z-10 w-full bg-black/60 backdrop-blur-sm ${desktopSize}:hidden`,
        className
      )}
      onClick={() => setMobileNavbarOpened(false)}
    >
      {children}
    </div>
  );
};

export const FrontLayoutNavbarMobileClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { mobileNavbarOpened, desktopSize } = useFrontLayoutContext();

  return (
    <>
      {mobileNavbarOpened && (
        <div
          className={cx(
            `fixed top-0 z-20 h-full w-[260px] overflow-scroll overscroll-contain border-gray-300 bg-gray-50 shadow-[2px_0px_3px_-1px_rgba(0,0,0,0.1),1px_0px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${desktopSize}:hidden`,
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export const FrontLayoutMobileVisibleClient = ({
  children,
}: PropsWithChildren) => {
  const { desktopSize } = useFrontLayoutContext();

  return <div className={`block ${desktopSize}:hidden`}>{children}</div>;
};

export const FrontLayoutDesktopVisibleClient = ({
  children,
}: PropsWithChildren) => {
  const { desktopSize } = useFrontLayoutContext();

  return <div className={`hidden ${desktopSize}:block`}>{children}</div>;
};
