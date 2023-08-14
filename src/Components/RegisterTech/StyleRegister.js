import { styled } from "styled-components";


export const Dialog = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    flex-direction: column;
    justify-content: flex-start;
`
export const ModalRegisterDiv =  styled.div`
    display: flex;
    position: absolute;
    top: 250px;
    justify-content: space-between;
    flex-direction: column; 
    max-width: 325px;
    width: 100%;
    height: 342px;
    background: var(--color-grey-3);
    position: absolute;
`

export const HeaderTech = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 10px;
    background: var(--color-grey-2);
`
export const FormRegister =  styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px;
`

export const SelectTech = styled.select`
    width: 100%;
    height: 48px;
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
    background: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
    border-radius: 4px;
`
export const Label  =  styled.label`
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
`

export const ContButton = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    height: 48px;
`