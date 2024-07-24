import React from 'react';
import styled from 'styled-components';

export interface abBotaoProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
    onClick?: () => void
}

const BotaoEstilizado = styled.button<abBotaoProps>`
    background: ${(props: abBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: abBotaoProps) => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: abBotaoProps) => props.tipo === 'primario' 
        ? css`
            &hover {
                background: #B87900;
                border: 2px solid #B87900;
            }
        ` 
        : css`
            &hover {
                background: #FFF;
                border: 2px solid #B87900;
                color: #B87900;
            }
        `
    }

`

export const abBotao = ({texto, onClick, tipo = 'primario'}: abBotaoProps) => {
    return (
        <BotaoEstilizado onClick={onClick} tipo={tipo}>
            {texto}
        </BotaoEstilizado>
    )
}

