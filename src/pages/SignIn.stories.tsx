import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { rest } from 'msw';
import { SignIn } from './SignIn';

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    // Args for Storybook = props for React
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Successfully logged in!'
                    }))
                })
            ],
        },
    }
} as Meta

/** VARIATIONS FROM OBJECT **/
export const Default: StoryObj = {
    /** AUTOMATED TESTS **/
    // Canvas Element = wireframe with all SignIn screen
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Enter text inside one field form
        userEvent.type(canvas.getByPlaceholderText('Enter your e-mail'), 'email@example.com');
        userEvent.type(canvas.getByPlaceholderText('******'), '12345678');

        // Manual click
        userEvent.click(canvas.getByRole('button'));

        // Change state in React is asynchronous
        await waitFor(() => {
            // Expect
            return expect(canvas.getByText('Successfully logged in!')).toBeInTheDocument();
        });
    }
}