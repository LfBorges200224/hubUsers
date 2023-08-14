import { styled } from "styled-components"

export const RegisterForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 370px;
    height: 725px;
    background: var(--color-grey-3);
    padding: 20px;
    @media (max-width:768px){
        width: 350.83px;
        height: 741.96px;
    }
    .contInputs{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    >select{
        width: 100%;
    }

    .RegisterBtn{
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
    }
`

export const SelectStyled = styled.select`
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
`