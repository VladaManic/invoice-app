import type { Meta, StoryObj } from '@storybook/react'

import EditBtn from './index'
import { Provider } from 'react-redux'
import { store } from '../../../state/store'
import { BrowserRouter } from 'react-router-dom'

const meta: Meta<typeof EditBtn> = {
    component: EditBtn,
    title: 'Edit Button',
    decorators: [
        (Story) => (
            <Provider store={store}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </Provider>
        ),
    ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        colorTheme: 'light',
    },
}

export const Dark: Story = {
    args: {
        colorTheme: 'dark',
    },
}
