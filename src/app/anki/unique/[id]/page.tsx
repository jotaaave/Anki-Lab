"use client";
import Nav from "@/components/Nav";
import { theme } from "@/style/theme";
import { ThemeProvider } from "styled-components";
import { Container, Edit, InputText, QuestArea, Title, ToolButton, ToolsArea } from "./style";
import { useState } from "react";
import { Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { CustomEditor } from "@/utils/customEditor";

export default function Page() {

    const initialValue = [
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ]

    const [editor] = useState(() => withReact(createEditor()));
    const CSEditor = new CustomEditor(editor);

    const Leaf = props => {
        return (
            <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
            >
            {props.children}
            </span>
        )
    }

    const [buttonAct, setActBtn] = useState(true);

    const activeButton = () => {
        CSEditor.toggleBoldMark();
        setActBtn(!buttonAct);
    };
    
    return <Slate onChange={() => {
        // setActBtn(CSEditor.isBoldMarkActive());
    }} editor={editor} initialValue={initialValue}>
        <ThemeProvider theme={theme}>
            <Nav />
            <Container>
                <ToolsArea className="grid grid-flow-col grid-col-4">
                    <ToolButton style={{
                        backgroundColor: buttonAct ? 'black' : 'white',
                        color: buttonAct ? 'white' : 'black',
                    }} onClick={() => activeButton()}>B</ToolButton>
                    <ToolButton>I</ToolButton>
                </ToolsArea>
                <QuestArea style={{ background: '#FF9B45' }}>
                    <Title>Front</Title>
                    {/* <InputText style={{ background: '#FF9B45' }} required/> */}
                    <Edit
                        placeholder="Escreva sua carta frontal aqui!"
                        disableDefaultStyles
                        renderLeaf={Leaf}
                        onKeyDown={(ev) => {
                            if (!ev.ctrlKey) {
                                return;
                            }

                            switch(ev.key) {
                                case "b": {
                                    setActBtn(!buttonAct);
                                    ev.preventDefault();
                                    CSEditor.toggleBoldMark();
                                    break;
                                }
                            }
                        }}
                    />
                </QuestArea>
                <QuestArea style={{ background: '#8DD8FF'}}>
                    <Title>Back</Title>
                    <InputText style={{ background: '#8DD8FF'}} required/>
                </QuestArea>
                <ToolsArea className="grid grid-flow-col grid-col-4">
                    <ToolButton>B</ToolButton>
                    <ToolButton>I</ToolButton>
                </ToolsArea>
            </Container>
        </ThemeProvider>
    </Slate>
}
