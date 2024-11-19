import type { StoryObj } from "@storybook/react";
import { Menu, MenuItem } from "./Menu";
import { FrontLayoutRoot } from "../Layout/FrontLayout/FrontLayout";

export default {
  component: Menu,
};

type Story = StoryObj<typeof FrontLayoutRoot>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </Menu>
  ),
};
