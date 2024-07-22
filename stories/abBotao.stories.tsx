import React from 'react';

import { abBotao } from '../src';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Component/AbBotao',
    component: abBotao
} as ComponentMeta<typeof abBotao>

const Template: ComponentStory<typeof abBotao> = () => <abBotao />

export const Primario = Template.bind({})