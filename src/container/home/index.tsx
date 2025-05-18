import Nav from "@/components/Nav";
import { Container } from "./style";
import Anki from "../anki";

export default function HomePage() {
    return (
        <Container>
            <Nav />
            <Anki />
        </Container>
    );
}