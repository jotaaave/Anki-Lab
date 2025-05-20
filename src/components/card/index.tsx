import { Card, CardBody, CardFooter } from "@heroui/react";
import { CSSProperties, JSX } from "react";
import { MainCard } from "./style";

type OnClick = () => void;

export default function CardSelector(
    { body, footer, onClick, style }: 
    { 
        body: JSX.Element; 
        footer: JSX.Element;
        onClick: OnClick;
        style: CSSProperties  
    }
) {
    return (
        <MainCard isPressable onPress={onClick} style={style}>
            <CardBody className="px-3 py-0 text-small text-default-400">
                {body}
            </CardBody>
            <CardFooter>
                {footer}
            </CardFooter>
        </MainCard>
    )
}