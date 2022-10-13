import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    // Args for Storybook = props for React
    args: {
        children: 'Create account',
        // Default size = md
        size: 'md',
    },
    argTypes: {}
} as Meta<ButtonProps>

/** VARIATIONS FROM OBJECT **/
export const Default: StoryObj<ButtonProps> = {}