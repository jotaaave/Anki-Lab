import { Card, CardBody, CardFooter } from "@heroui/react";
import { CSSProperties, JSX } from "react";

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
        <Card isPressable onPress={onClick} style={style}>
            <CardBody>
                {body}
            </CardBody>
            <CardFooter>
                {footer}
            </CardFooter>
        </Card>
    )
}