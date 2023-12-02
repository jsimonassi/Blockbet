import styled from "styled-components";

export const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: ${(props) => props.theme.palette.surface1};
    border-radius: 8px;
    padding: 16px;
    margin-top: 3%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    width: 100%;
    margin-right: 5px;
    margin-left: 5px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
        scale: 1.1;
    }
    transition: all 0.3s ease-in-out;
`;

export const LogosContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    img {
        max-width: 60px;
        height: 60px;
    }
`;