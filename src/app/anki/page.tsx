"use client";
import Nav from "@/components/Nav";
import { theme } from "@/style/theme";
import { ThemeProvider } from "styled-components";
import { Container, QuestArea, AsnwerArea } from "./style";

export default function Page() {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Container>
                <QuestArea />
                <AsnwerArea />
            </Container>
        </ThemeProvider>
    );
}