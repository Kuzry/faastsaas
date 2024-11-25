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
  FrontLayoutSectionTitleContainer,
} from "./FrontLayout";

export default {
  component: FrontLayoutRoot,
  parameters: {
    layout: "fullscreen",
  },
};

type Story = StoryObj<typeof FrontLayoutRoot>;

export const Default: Story = {
  render: () => (
    <FrontLayoutRoot>
      <FrontLayoutMobileOverlay />
      <FrontLayoutHeader>
        <FrontLayoutContainer className="flex">
          <FrontLayoutBurger />
          FaastSaas
        </FrontLayoutContainer>
      </FrontLayoutHeader>
      <FrontLayoutNavbarMobile>
        Front Layout Navbar Mobile
      </FrontLayoutNavbarMobile>
      <FrontLayoutMain>
        <FrontLayoutHero>
          <FrontLayoutHeroTitle>FrontLayoutHeroTitle</FrontLayoutHeroTitle>
          <FrontLayoutHeroText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
            quam vestibulum, mollis nunc vel, suscipit ligula. Nunc laoreet eros
            nec lorem ultricies, id vulputate lorem tempor. Morbi in interdum
            dui. Ut id arcu ligula. Proin vitae tempus turpis. Nullam nec
            bibendum odio. Sed vestibulum eros eget elit tempus gravida
          </FrontLayoutHeroText>
        </FrontLayoutHero>
        <FrontLayoutSection>
          <FrontLayoutSectionTitleContainer>
            <FrontLayoutSectionTitle>
              People love using FaastSaas.
            </FrontLayoutSectionTitle>
          </FrontLayoutSectionTitleContainer>
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
        <FrontLayoutContainer>Footer...</FrontLayoutContainer>
      </FrontLayoutFooter>
    </FrontLayoutRoot>
  ),
};
