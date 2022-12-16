import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavLink } from "../pages/components/ui/NavLink";

export default {
    title: "Example/Navlink",
    component: NavLink,

} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />

export const Active = Template.bind({})
Active.args =  {
    text: "Active",
    link: "/link"
}

export const Disabled = Template.bind({})
Disabled.args = {
    text: "Disabled",
    link: "/link",
    isActive: false
}