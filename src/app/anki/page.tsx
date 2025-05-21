"use client";
import Nav from "@/components/Nav";
import { theme } from "@/style/theme";
import { ThemeProvider } from "styled-components";
import { Container, QuestArea } from "./unique/[id]/style";

export default function Page() {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Container>
                <QuestArea />
            </Container>
        </ThemeProvider>
    );
}