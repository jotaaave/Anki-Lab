import { Button, Listbox } from "@heroui/react";
import styled from "styled-components";

export const Container = styled('div')`
    background-color: ${({ theme }) => theme.colors.purple.low};
    margin: 25px;
    margin-bottom: 0px;
    padding: 25px;
    border-radius: 12px;
`;

export const Title = styled('h1')`
    font-size: 24px;
`;

export const ContainerAnki = styled('div')`
    background-color: ${({ theme }) => theme.colors.purple.light};
    margin: 25px;
    margin-top: 5px;
    padding: 25px;
    border-radius: 12px;
`;

export const EditAnki = styled('button')`
    background: none;
    padding-left: 15px;
    border: none;
    cursor: pointer;
`;

export const CreateButton = styled(Button)`
    background: none;
    border: 2px solid ${({ theme }) => theme.colors.purple.high};
    color: ${({ theme }) => theme.colors.purple.high};
    width: 100px;
    height: 40px;
    margin: 10px;
    border-radius: 30px;
    cursor: pointer;
    
    &:hover {
        opacity: 0.6;
        scale: 1.1;
    }
`;

export const JoinButton = styled(Button)`
    background: none;
    border: 2px solid #0185ff;
    color: #0185ff;
    width: 100px;
    height: 40px;
    margin: 10px;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
        scale: 1.1;
    }
`;
