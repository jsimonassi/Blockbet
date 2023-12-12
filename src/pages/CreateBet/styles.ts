import styled from "styled-components";
import { DEVICE } from "../../constants/screenSize";


export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    width: 100%;
`;

export const ResultsMatches = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    grid-gap: 5px;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 30px;

    @media ${DEVICE.DESKTOP} {
        grid-template-columns: auto auto;
    }

    @media ${DEVICE.TABLET} {
        grid-template-columns: auto;
    }
`;