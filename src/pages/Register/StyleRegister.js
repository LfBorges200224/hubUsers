import { styled } from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    gap: 10px; 
    padding: 10px;
    .headerCont{
        display: flex;
        flex-direction: row;
        width: 365px;
        justify-content: space-between;
        @media (max-width:768px){
            width: 100%;
            padding: 10px;
        }
    }
    .BtnBack{
        display: flex;
        align-items: center;
        flex-direction: center;
        width: 79.54px;
        height: 31.95px;
        font-family: 'Inter';
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background: var(--color-grey-3);
        border: 2px solid var(--color-grey-3);
        border-radius: 4px;
        color: var(--color-grey-0);
        transition: 0.6s;
        font-weight: 600;
        font-size: 9.59437px;
        line-height: 23px;
        &:hover{
            background: var(--color-grey-2);
            border: 1.5px solid var(--color-grey-2);
        }
    }
`
