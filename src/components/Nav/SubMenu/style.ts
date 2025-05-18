import Image from "next/image";
import styled from "styled-components";

export const SubMenuContainer = styled('div')`
    background-color: ${({theme}) => theme.colors.purple.medium};
    display: flex;
    margin: 10px 20px 0px 0px;
    border-radius: 15px;
    justify-self: end;
    width: 200px;
`;

export const List = styled('ul')`
    margin: 10px 10px 0px 0px;
    background-color: ${({theme}) => theme.colors.purple.medium};
    border-radius: 15px;
    position: fixed;
    padding: 15px;
    list-style: none;
`;

export const ItemList = styled('li')`

`;

export const SearchList = styled('input')`
    display: flex;
    margin: 0px 0px 20px 0px;
    align-items: center;
    color: black;
    background-color: white;
    width: 170px;
    height: 40px;
    font-size: 18px;
    border: none;
    text-align: start;
    padding-left: 10px;
    cursor: pointer;
    border-radius: 15px;
`

export const ButtonList = styled('a')`
    display: flex;
    text-decoration: none;
    margin: 0px 0px 20px 0px;
    align-items: center;
    color: white;
    background-color: ${({theme}) => theme.colors.purple.medium};
    width: 170px;
    height: 40px;
    font-size: 18px;
    border: none;
    text-align: start;
    padding-left: 10px;

    &:hover {
        border-radius: 8px;
        background-color: ${({theme}) => theme.colors.purple.light};
        cursor: pointer;
    }
`;

export const ProfileLogo = styled(Image)`
    border-radius: 12px;
`;

export const DivProfile = styled('div')`
    display: flex;
    margin-bottom: 30px;
`;

export const Username = styled('p')`
    font-size: 16px;
`;

export const UserDescription = styled('p')`
    font-size: 12px;
`

export const GreenPoint = styled('div')`
    background-color: #24ff00;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    position: relative;
    top: 55px;
    right: 10px;
`;

export const Line = styled('div')`
    background-color: white;
    width: 100%;
    height: 1px;
`
