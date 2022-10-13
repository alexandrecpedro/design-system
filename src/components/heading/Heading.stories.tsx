import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    // Args for Storybook = props for React
    args: {
        children: 'Lorem ipsum.',
        // Default size = md
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

/** VARIATIONS FROM OBJECT **/
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
        )
    },
    argTypes: {
        // Property we want to remove from the UI
        children: {
            table: {
                disable: true,
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        }
    }
}