import { Editable } from "slate-react";
import styled from "styled-components";

export const Container = styled('div')`
    width: 50%;
    height: 85vh;
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 auto;
`;

export const QuestArea = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: gray;
    border-radius: 15px;
    margin: 15px;
    width: max-content;
    height: 90%;
    border: 5px solid white;

-webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
-moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const ToolsArea = styled('div')`
    background-color: oklch(35.9% .144 278.697);
    width: max-content;
    border-radius: 16px;
    height: 90%;
    border: 5px solid white;

    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const ToolButton = styled('button')`
    width: 40px;
    margin: 10px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 12px;
    height: 40px;

    &:hover {
        background-color: gray;
    }
`;

export const Title = styled('h1')`
    font-size: 26px;
`;

export const InputText = styled('textarea')`
    margin: 30px;
    padding: 30px;
    font-size: 16px;
    height: 30px;
    min-height: 200px;
    border-radius: 30px;
`;

export const Edit = styled(Editable)`
    max-width: 300px;
    min-width: 300px;
    padding: 20px;
    font-size: 16px;
    border-radius: 30px;
`;
