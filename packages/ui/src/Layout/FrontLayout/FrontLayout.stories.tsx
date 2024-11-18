import type { StoryObj } from "@storybook/react";
import {
  FrontLayoutBurger,
  FrontLayoutContainer,
  FrontLayoutDesktopVisible,
  FrontLayoutFooter,
  FrontLayoutHeader,
  FrontLayoutHero,
  FrontLayoutHeroText,
  FrontLayoutHeroTitle,
  FrontLayoutMain,
  FrontLayoutMobileOverlay,
  FrontLayoutMobileVisible,
  FrontLayoutNavbarMobile,
  FrontLayoutRoot,
  FrontLayoutSection,
  FrontLayoutSectionTitle,
} from "./FrontLayout";
export default {
  component: FrontLayoutRoot,
  parameters: {
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof FrontLayoutRoot>;
export const Basic: Story = {
  render: () => (
    <FrontLayoutRoot>
      <FrontLayoutMobileOverlay />
      <FrontLayoutHeader>
        <FrontLayoutContainer>
          <div className="flex">
            <FrontLayoutBurger />
            FaastSaas
          </div>
        </FrontLayoutContainer>
      </FrontLayoutHeader>
      <FrontLayoutNavbarMobile>
        Front Layout Navbar Mobile
      </FrontLayoutNavbarMobile>
      <FrontLayoutMain>
        <FrontLayoutSection>
          <FrontLayoutHero>
            <FrontLayoutHeroTitle>FrontLayoutHeroTitle</FrontLayoutHeroTitle>
            <FrontLayoutHeroText>FrontLayoutHeroText</FrontLayoutHeroText>
          </FrontLayoutHero>
        </FrontLayoutSection>
        <FrontLayoutSection>
          <FrontLayoutSectionTitle>
            FrontLayoutSectionTitle
          </FrontLayoutSectionTitle>
        </FrontLayoutSection>
        <FrontLayoutSection>
          <FrontLayoutContainer>
            <FrontLayoutMobileVisible>Only on mobile</FrontLayoutMobileVisible>
            <FrontLayoutDesktopVisible>
              Only on desktop
            </FrontLayoutDesktopVisible>
          </FrontLayoutContainer>
        </FrontLayoutSection>
        <FrontLayoutSection>
          <FrontLayoutContainer>
            Ut laoreet lacinia nunc, vel dictum neque. Curabitur sit amet cursus
            felis. Cras euismod elit cursus lorem vulputate porta. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nam eu magna nisl.
            Mauris semper ut ante ut commodo. Phasellus non nisl mi. In ac ante
            mattis, bibendum nisi non, suscipit tellus. Donec sagittis mattis
            imperdiet. Fusce mollis, odio sit amet eleifend pretium, sapien
            lacus pellentesque lorem, sit amet aliquet risus nulla placerat
            mauris. Pellentesque dapibus tortor eget dui auctor, non aliquam
            odio condimentum. Ut commodo lacinia cursus.
          </FrontLayoutContainer>
        </FrontLayoutSection>
      </FrontLayoutMain>
      <FrontLayoutFooter>
        <FrontLayoutSection>
          <FrontLayoutContainer>Footer...</FrontLayoutContainer>
        </FrontLayoutSection>
      </FrontLayoutFooter>
    </FrontLayoutRoot>
  ),
};
