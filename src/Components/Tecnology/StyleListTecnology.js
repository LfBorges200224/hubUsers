import { styled } from "styled-components";

export const ContInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const TitleInformation = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    width: 100%;
    height: 32px;
`
export const AddTech = styled.button`
    width: 32.49px;
    height: 32px;
    color: var(--color-grey-0);
    font-size: 20px;
    background: var(--color-grey-3);
    border: 2px solid var(--color-grey-3);
    border-radius: 4px;
    transition: 0.6s;
    &:hover{
        background: var(--color-grey-2);
        border: 2px solid var(--color-grey-2)
    }
`

export const ListUl = styled.ul`
    display: flex;
    padding: 10px;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    width: 100%;
    height: 616px;
    border: 2px solid var(--color-grey-4);
    border-radius: 4px;
    background: var(--color-grey-3);

    >li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        width: 100%;
        height: 49px;
        border: 2px solid var(--color-grey-4);
        border-radius: 4px;
        background: var(--color-grey-4);
        transition: 0.6s;
        &:hover{
            border: 2px solid var(--color-grey-1);
            background: var(--color-grey-1);
        }
    }
`


