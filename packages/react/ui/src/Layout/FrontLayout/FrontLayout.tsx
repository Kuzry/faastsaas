import { PropsWithChildren } from "react";
import { cx } from "../../index";
import {
  FrontLayoutBurgerClient,
  FrontLayoutDesktopVisibleClient,
  FrontLayoutMobileVisibleClient,
  FrontLayoutNavbarMobileClient,
  FrontLayoutNavbarMobileOverlayClient,
  FrontLayoutProvider,
} from "./FrontLayout.client";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

export const FrontLayoutRoot = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <FrontLayoutProvider>
    <div className={cx("", className)}>{children}</div>
  </FrontLayoutProvider>
);

export const FrontLayoutBurger = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <FrontLayoutBurgerClient className={className}>
    {children}
  </FrontLayoutBurgerClient>
);

export const FrontLayoutHeader = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <header
    className={cx(
      "border-primary-100 sticky flex h-14 items-center border-b",
      className
    )}
  >
    {children}
  </header>
);

export const FrontLayoutNavbarMobile = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <FrontLayoutNavbarMobileClient className={className}>
    {children}
  </FrontLayoutNavbarMobileClient>
);

export const FrontLayoutMain = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <main className={cx("", className)}>{children}</main>
);

export const FrontLayoutSection = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <div className={cx("border-primary-200 border-t py-16", className)}>
    {children}
  </div>
);

export const FrontLayoutSectionTitleContainer = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  return <div className={cx("mb-10", className)}>{children}</div>;
};

export const FrontLayoutSectionTitle = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <h3
    className={cx(
      "text-pretty text-center text-4xl font-medium tracking-tighter",
      className
    )}
  >
    {children}
  </h3>
);

export const FrontLayoutContainer = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <div className={cx("container", className)}>{children}</div>
);

export const FrontLayoutFooter = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <footer className={cx("border-primary-200 border-t py-16", className)}>
    {children}
  </footer>
);

export const FrontLayoutHero = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <div
    className={cx(
      "mx-auto mb-10 mt-24 flex max-w-6xl flex-col items-center gap-6 py-16 text-center leading-9",
      className
    )}
  >
    {children}
  </div>
);

export const FrontLayoutHeroTitle = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <h1
    className={cx(
      "text-pretty py-6 text-5xl/tight font-semibold leading-none tracking-tight sm:text-6xl/tight md:text-7xl/tight lg:text-7xl/tight",
      className
    )}
  >
    {children}
  </h1>
);

export const FrontLayoutHeroText = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <p
    className={cx(
      "text-muted-foreground max-w-[64rem] text-balance px-6 text-lg md:text-xl",
      className
    )}
  >
    {children}
  </p>
);

export const FrontLayoutMobileOverlay = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <FrontLayoutNavbarMobileOverlayClient className={className}>
    {children}
  </FrontLayoutNavbarMobileOverlayClient>
);

export const FrontLayoutMobileVisible = ({ children }: PropsWithChildren) => {
  return (
    <FrontLayoutMobileVisibleClient>{children}</FrontLayoutMobileVisibleClient>
  );
};

export const FrontLayoutDesktopVisible = ({ children }: PropsWithChildren) => {
  return (
    <FrontLayoutDesktopVisibleClient>
      {children}
    </FrontLayoutDesktopVisibleClient>
  );
};
