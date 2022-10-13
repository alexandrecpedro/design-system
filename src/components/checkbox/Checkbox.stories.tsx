import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../text/Text';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    // Args for Storybook = props for React
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Remind me for 30 days</Text>
                </div>
            );
        }
    ]
} as Meta<CheckboxProps>

/** VARIATIONS FROM OBJECT **/
export const Default: StoryObj<CheckboxProps> = {}