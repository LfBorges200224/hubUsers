import { styled } from "styled-components"

export const OverlayModal= styled.div`
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

export const HeaderModify = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 10px;
    background: var(--color-grey-2);
`
export const FormModify =  styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px;
`

export const ModalDivModify = styled.div`
    display: flex;
    position: absolute;
    top: 250px;
    flex-direction: column; 
    max-width: 325px;
    width: 100%;
    height: 342px;
    background: var(--color-grey-3);
    position: absolute;
`


