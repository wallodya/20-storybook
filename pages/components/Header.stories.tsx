import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "./Header";

export default {
    title: "Test/Header",
    component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const withNavBar = Template.bind({})
withNavBar.args = {
    hasNavbar: true,
    logoText: "LOGO"
}

export const withoutNavBar = Template.bind({})
withoutNavBar.args = {
    hasNavbar: false,
    logoText: "LOGO"
}