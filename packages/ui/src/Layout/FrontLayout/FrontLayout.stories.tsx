import type { StoryObj } from "@storybook/react";
import {
  FrontLayoutBurger,
  FrontLayoutContainer,
  FrontLayoutHeader,
  FrontLayoutMain,
  FrontLayoutMobileOverlay,
  FrontLayoutNavbarMobile,
  FrontLayoutRoot,
} from "./FrontLayout";
export default {
  component: FrontLayoutRoot,
};

type Story = StoryObj<typeof FrontLayoutRoot>;
export const Basic: Story = {
  render: () => (
    <FrontLayoutRoot>
      <FrontLayoutMobileOverlay />
      <FrontLayoutHeader>
        <FrontLayoutContainer>
          <FrontLayoutBurger />
          FaastSaas
        </FrontLayoutContainer>
      </FrontLayoutHeader>
      <FrontLayoutNavbarMobile>
        Front Layout Navbar Mobile
      </FrontLayoutNavbarMobile>
      <FrontLayoutMain>Aaaa</FrontLayoutMain>
    </FrontLayoutRoot>
  ),
};
