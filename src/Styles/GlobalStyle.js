import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    max-width: 100vw;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background: var(--color-grey-4);
}   

:root {
    --color-color-primary: #ff577f;
    --color-color-primary-50: #ff427f;
    --color-color-primary-disable: #59323f;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343b41;
    --color-grey-1: #868e96;
    --color-grey-0: #f8f9fa;
    --color-sucess: #3fe864;
    --color-negative: #e83f5b;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading{
  width: 60px;
  height: 60px;
  border-radius:50%;
  animation: spin 1.2s linear infinite;
 
  &::before,
  &::after{
  content: "";
  position: absolute;
  border-radius: inherit;
  }
  &::before{
    width: 100%;
    height: 100%;
   background-image: 
   linear-gradient(0deg,
    #f8f9fa 0%,
    #59323f 100%
    );
  }
    &::after{
      width: 85%;
    height: 85%;
    background:var(--color-grey-4);
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
  }

  .loadingContainer{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width : 100% ;
  height: 100%;
  position: absolute;

  }
`