import styled from "styled-components";


export const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${(props) => props.theme.palette.surface1};
    border-radius: 8px;
    padding: 16px;
    margin-top: 3%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);

    hr {
        opacity: 0.5;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`;

export const PickChampionshipContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 8px;
`;

