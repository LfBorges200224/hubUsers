import { styled } from "styled-components";

export const MainHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px; 
    
`

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 72px;
    justify-content:space-between;
    padding-top: 20px;
    padding-left: clamp(40px , 50%, 200px);
    padding-right: clamp(40px , 50%, 200px);
    @media (max-width: 768px) {
        padding-left: clamp(40px , 2.5rem, 200px);
        padding-right: clamp(40px , 2.5rem, 200px);
    }
    >img{
        width: 105.53px;
        height: 14.63px;
    }

    .ReturnBtnHome{
        width: 79.54px;
        height: 31.95px;
        font-family: 'Inter';
        background: var(--color-grey-3);
        border: 2px solid var(--color-grey-3);
        border-radius: 4px;
        color: var(--color-grey-0);
        font-weight: 600;
        font-size: 12px;
        line-height: 23px;
        transition: 0.6s;
        &:hover{
            background: var(--color-grey-2);
            border: 1.5px solid var(--color-grey-2);
        }
    }
    
`
export const NotDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: fit-content;
    padding-left: clamp(40px , 50%, 200px);
    padding-right: clamp(40px , 50%, 200px);
    @media (max-width: 768px) {
        padding-left: clamp(40px , 2.5rem, 200px);
        padding-right: clamp(40px , 2.5rem, 200px); 
        justify-content: center;
    }
`