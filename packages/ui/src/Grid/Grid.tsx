import { PropsWithChildren } from "react";
import {
  GridClient,
  GridColClient,
  GridProvider,
  TGridContext,
} from "./Grid.client";

type PropsWithChildrenAndClassName = PropsWithChildren & {
  className?: string;
};

/**
 * To change gap, change margin in Grid and margin and width in GridCol
 */
export const Grid = ({
  cols,
  gap,
  className,
  children,
}: PropsWithChildrenAndClassName &
  Partial<Pick<TGridContext, "cols" | "gap">>) => (
  <GridProvider cols={cols} gap={gap}>
    <GridClient className={className}>{children}</GridClient>
  </GridProvider>
);

export const GridCol = ({
  className,
  children,
}: PropsWithChildrenAndClassName) => (
  <GridColClient className={className}>{children}</GridColClient>
);
