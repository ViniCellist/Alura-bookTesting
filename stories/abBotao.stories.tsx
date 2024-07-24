import React from 'react';
import { abBotao } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Component/AbBotao',
    component: abBotao
} as ComponentMeta<typeof abBotao>

const Template: ComponentStory<typeof abBotao> = (args) => <abBotao {...args} />

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Ab Botão Primário',
    tipo: 'primario'
} as abBotaoProps

export const Secundario = Template.bind({})

Secundario.args = {
    texto: 'Ab Botão Secundário',
    tipo: 'secundario'
} as abBotaoProps