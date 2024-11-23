import type { StoryObj } from "@storybook/react";
import { Grid, GridCol } from "./Grid";

export default {
  component: Grid,
};

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid
      cols={{
        sm: 4,
        md: 6,
        lg: 7,
        xl: 8,
      }}
      gap={10}
    >
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 1</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 2</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 3</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 4</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 5</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 6</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 7</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 8</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 9</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 10</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 11</div>
      </GridCol>
      <GridCol>
        <div className="w-full bg-cyan-900 text-center text-white">Item 12</div>
      </GridCol>
    </Grid>
  ),
};
