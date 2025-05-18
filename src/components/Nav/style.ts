import Image from "next/image";
import styled from "styled-components";

export const Container = styled('div')`
    display: flex;
    background-color: ${({ theme }) => theme.colors.purple.medium };
    height: 75px;
    align-items: center;
    padding-left: 15px;
`

export const Profile = styled(Image)`
    border: 1px solid black;
    margin-right: 30px;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    cursor: pointer;
`
