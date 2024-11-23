"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { cx } from "../index";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

export interface TGridContext {
  cols: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
  gap: number;
}

const GridContext = createContext<TGridContext>({
  cols: {
    sm: 12,
    md: 6,
    lg: 8,
    xl: 8,
    "2xl": 8,
  },
  gap: 10,
});

const useGridContext = () => {
  const context = useContext(GridContext);

  if (!context) {
    throw new Error(
      "useGridLayoutContext must be used inside the GridProvider"
    );
  }

  return context;
};

export const GridProvider = ({
  cols,
  gap,
  children,
}: PropsWithChildren & Partial<Pick<TGridContext, "cols" | "gap">>) => {
  return (
    <GridContext.Provider
      value={{
        cols: cols ?? {
          sm: 10,
          md: 6,
          lg: 8,
          xl: 8,
          "2xl": 8,
        },
        gap: gap ?? 10,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

/**
 * To change gap, change margin in Grid and margin and width in GridCol
 */
export const GridClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { gap } = useGridContext();

  return (
    <div
      className={cx("flex flex-wrap justify-center", className)}
      style={{
        margin: `-${gap}px`,
      }}
    >
      {children}
    </div>
  );
};

export const GridColClient = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => {
  const { cols, gap } = useGridContext();

  return (
    <div
      style={{
        padding: `${gap}px`,
      }}
      className={cx(
        "flex flex-[0_0_100%] justify-center",
        cols.sm === 12
          ? "sm:flex-[0_0_8.333333%]"
          : cols.sm === 11
            ? "sm:flex-[0_0_9.090909%]"
            : cols.sm === 10
              ? "sm:flex-[0_0_10%]"
              : cols.sm === 9
                ? "sm:flex-[0_0_11.111111%]"
                : cols.sm === 8
                  ? "sm:flex-[0_0_12.5%]"
                  : cols.sm === 7
                    ? "sm:flex-[0_0_14.285714%]"
                    : cols.sm === 6
                      ? "sm:flex-[0_0_16.666666%]"
                      : cols.sm === 5
                        ? "sm:flex-[0_0_20%]"
                        : cols.sm === 4
                          ? "sm:flex-[0_0_25%]"
                          : cols.sm === 3
                            ? "sm:flex-[0_0_33.333333%]"
                            : cols.sm === 2
                              ? "sm:flex-[0_0_50%]"
                              : cols.sm === 1
                                ? "sm:flex-[0_0_100%]"
                                : "",
        cols.md === 12
          ? "md:flex-[0_0_8.333333%]"
          : cols.md === 11
            ? "md:flex-[0_0_9.090909%]"
            : cols.md === 10
              ? "md:flex-[0_0_10%]"
              : cols.md === 9
                ? "md:flex-[0_0_11.111111%]"
                : cols.md === 8
                  ? "md:flex-[0_0_12.5%]"
                  : cols.md === 7
                    ? "md:flex-[0_0_14.285714%]"
                    : cols.md === 6
                      ? "md:flex-[0_0_16.666666%]"
                      : cols.md === 5
                        ? "md:flex-[0_0_20%]"
                        : cols.md === 4
                          ? "md:flex-[0_0_25%]"
                          : cols.md === 3
                            ? "md:flex-[0_0_33.333333%]"
                            : cols.md === 2
                              ? "md:flex-[0_0_50%]"
                              : cols.md === 1
                                ? "md:flex-[0_0_100%]"
                                : "",
        cols.lg === 12
          ? "lg:flex-[0_0_8.333333%]"
          : cols.lg === 11
            ? "lg:flex-[0_0_9.090909%]"
            : cols.lg === 10
              ? "lg:flex-[0_0_10%]"
              : cols.lg === 9
                ? "lg:flex-[0_0_11.111111%]"
                : cols.lg === 8
                  ? "lg:flex-[0_0_12.5%]"
                  : cols.lg === 7
                    ? "lg:flex-[0_0_14.285714%]"
                    : cols.lg === 6
                      ? "lg:flex-[0_0_16.666666%]"
                      : cols.lg === 5
                        ? "lg:flex-[0_0_20%]"
                        : cols.lg === 4
                          ? "lg:flex-[0_0_25%]"
                          : cols.lg === 3
                            ? "lg:flex-[0_0_33.333333%]"
                            : cols.lg === 2
                              ? "lg:flex-[0_0_50%]"
                              : cols.lg === 1
                                ? "lg:flex-[0_0_100%]"
                                : "",
        cols.xl === 12
          ? "xl:flex-[0_0_8.333333%]"
          : cols.xl === 11
            ? "xl:flex-[0_0_9.090909%]"
            : cols.xl === 10
              ? "xl:flex-[0_0_10%]"
              : cols.xl === 9
                ? "xl:flex-[0_0_11.111111%]"
                : cols.xl === 8
                  ? "xl:flex-[0_0_12.5%]"
                  : cols.xl === 7
                    ? "xl:flex-[0_0_14.285714%]"
                    : cols.xl === 6
                      ? "xl:flex-[0_0_16.666666%]"
                      : cols.xl === 5
                        ? "xl:flex-[0_0_20%]"
                        : cols.xl === 4
                          ? "xl:flex-[0_0_25%]"
                          : cols.xl === 3
                            ? "xl:flex-[0_0_33.333333%]"
                            : cols.xl === 2
                              ? "xl:flex-[0_0_50%]"
                              : cols.xl === 1
                                ? "xl:flex-[0_0_100%]"
                                : "",
        cols["2xl"] === 12
          ? "2xl:flex-[0_0_8.333333%]"
          : cols["2xl"] === 11
            ? "2xl:flex-[0_0_9.090909%]"
            : cols["2xl"] === 10
              ? "2xl:flex-[0_0_10%]"
              : cols["2xl"] === 9
                ? "2xl:flex-[0_0_11.111111%]"
                : cols["2xl"] === 8
                  ? "2xl:flex-[0_0_12.5%]"
                  : cols["2xl"] === 7
                    ? "2xl:flex-[0_0_14.285714%]"
                    : cols["2xl"] === 6
                      ? "2xl:flex-[0_0_16.666666%]"
                      : cols["2xl"] === 5
                        ? "2xl:flex-[0_0_20%]"
                        : cols["2xl"] === 4
                          ? "2xl:flex-[0_0_25%]"
                          : cols["2xl"] === 3
                            ? "2xl:flex-[0_0_33.333333%]"
                            : cols["2xl"] === 2
                              ? "2xl:flex-[0_0_50%]"
                              : cols["2xl"] === 1
                                ? "2xl:flex-[0_0_100%]"
                                : "",

        className
      )}
    >
      {children}
    </div>
  );
};
