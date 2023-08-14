import { styled } from "styled-components"

export const RegisterBtn = styled.button`
    width: 96%;
    height: 48px;
    background: var(--color-color-primary-disable);
    border:2px solid var(--color-color-primary-disable);
    color: var(--color-grey-0);
    border-radius: 3px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
    transition: 0.6s;
    &:hover{
        background: var(--color-color-primary);
        border:2px solid var(--color-color-primary);
    }
    @media (max-width:768px){
        width: 300px;
        height: 45px;
    }
`

export const CloseRegisterInput = styled.button`
    width: 30px;
    height: 30px;
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
    font-size: 20px;
    background: none;
    border: none;

`
export const SaveAlt = styled.button`
    width: 204px;
    height: 48px;
    font-family: 'Inter', sans-serif;
    background: var(--color-color-primary-disable);
    color: var(--color-grey-0);
    border: 2px solid var(--color-color-primary-disable);
    border-radius: 4px;
    transition: 0.6s;
    &:hover{
        background-color: var(--color-color-primary-50);
        border: 2px solid var(--color-color-primary-50);
    }
`
export const RemoveRegister = styled.button`
    width: 98px;
    height: 48px;
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
    background: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
    border-radius: 4px;
    transition: 0.6s;
    &:hover{
        background: var(--color-grey-1);
        border: 2px solid var(--color-grey-1);
    }
`

export const BtnRegister = styled.button`
    width: 100%;
    height: 48px;
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
    background: var(--color-color-primary-disable);
    border: 2px solid var(--color-color-primary-disable);
    border-radius: 4px;
    transition: 0.6s;
    &:hover{
        background: var(--color-color-primary);
        border: 1.5px solid var(--color-color-primary);
    }
`