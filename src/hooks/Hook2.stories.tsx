import React from "react";
import { Story, Meta } from "@storybook/react";

import { Hook2, HookProps } from "./Hook2";

export default {
  title: "Hook2",
  component: Hook2,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<HookProps> = (args) => <Hook2 {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  name: "cheer",
  display: "cheer's",
  startNum: 0,
};
