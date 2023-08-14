import { styled } from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    justify-content: center;
    height: 100vh;
    align-items: center;
`
export const LoginContainer= styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    gap: 30px;
    background: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    border-radius: 4px;
    width: 340px;
    height: 440px;
    @media (max-width:768px){
        width: 296px;
        height: 426.69px;

    }


    .containInput{
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 10px;
        justify-content: flex-start;   
    }

    .containRegister{
        display: flex;
        gap: 10px;
        width: 100%;
        align-items: center;
        flex-direction: column;

        >a{
            width: 100%;
        }

    }
    
    .btnSubmiteLogin{
        width: 100%;
        height: 55px;
        background: var(--color-color-primary-disable);
        border: 1.5px solid var(--color-color-primary-disable);
        color: var(--color-grey-0);
        border-radius: 4px;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 12.8347px;
        transition: 0.6s;
        line-height: 21px;
        &:hover{
            background: var(--color-color-primary);
            border: 1.5px solid var(--color-color-primary);
        }
        @media (max-width:768px){
            width: 259.9px;
            height: 38.5px;
        }
    }
    
    .BtnRegisterStyle{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 55px;
        background: var(--color-grey-2);
        border: 1.5px solid var(--color-grey-2);
        color: var(--color-grey-0);
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 12.8347px;
        transition: 0.6s;
        line-height: 21px;
        &:hover{
            background: var(--color-grey-1);
            border: 1.5px solid var(--color-grey-1);
        }
    }
`