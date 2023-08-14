import { styled } from "styled-components"

export const InputsStyle = styled.input`
    width: 100%;
    height: 38.5px;
    background: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
    border-radius: 3px;
    color: var(--color-grey-0);
    padding: 0px 13.0293px;
    transition: 0.6s;
    &:hover{
        border: 2px solid var(--color-grey-0);
    }
`

export const RegisterInput = styled.input`
    width: 100%;
    height: 38.38px;
    color: var(--color-grey-0);
    font-family: 'Inter';
    padding: 0px 12.9865px;
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: 3px;
    transition: 0.6s;
    &:hover{
        border: 1px solid var(--color-grey-0);
    }
    ::placeholder{
        color: var(--color-grey-1);
    }
`

export const RegisterTechInput = styled.input`
    width: 100%;
    height: 48px;
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
    background: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
    border-radius: 4px;
`