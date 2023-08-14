import { styled } from "styled-components"

export const NameContain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 131px;
    padding: 12px;
    background: var(--color-grey-4);
    border-top: 1px solid var(--color-grey-3);
    border-radius: 4px;
    border-bottom: 1px solid var(--color-grey-3);
    padding-left: clamp(40px , 50%, 200px);
    padding-right: clamp(40px , 50%, 200px);
    @media (max-width: 768px) {
        padding-left: clamp(40px , 2.5rem, 200px);
        padding-right: clamp(40px , 2.5rem, 200px); 
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

`