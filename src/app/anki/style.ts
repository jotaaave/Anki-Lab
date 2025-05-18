import styled from "styled-components";

export const Container = styled('div')`
    background-color: ${({ theme }) => theme.colors.purple.low};
    width: 50%;
    height: 85vh;
    display: flex;
    border-radius: 30px;
    justify-self: center;
    flex-direction: column;
`;

export const QuestArea = styled('div')`
    background-color: white;
    border-radius: 30px 30px 0px 0px;
    margin: auto;
    width: 95%;
    height: 30vh;
`;

export const AsnwerArea = styled('div')`
    background-color: gray;
    border-radius: 0px 0px 30px 30px;
    width: 100%;
    margin: auto;
    width: 95%;
    height: 30vh;
`;