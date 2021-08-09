import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";

import Weather3 from "./weather3";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Weather3",
  component: Weather3,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Weather3>> = (args) => (
  <Weather3 {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  /*👇 The args you need here will depend on your component */
};
