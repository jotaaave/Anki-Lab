import { addToast, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { Container, ContainerAnki, CreateButton, EditAnki, JoinButton, Title } from "./style";
import { Edit2 } from "@deemlol/next-icons";
import CardSelector from "@/components/card";
import { useState } from "react";
import { ankiSelectionCard } from "@/data/cards-data";
import { redirect } from "next/navigation";

export default function Anki() {
    const ankis = [];

    const [selectedCard, setSelected] = useState(-1);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [actualCard, setCardLink] = useState('/');

    const createClick = () => {
        redirect(actualCard);
    }

    const EnoughAnki = () => {
        return (
            <div>
                <p>You dont have a Anki/Anki Group. Join Than :D</p>
                <CreateButton onClick={() => setSelected(-1)} onPress={onOpen}>Create Anki</CreateButton>
                <Modal onOpenChange={onOpenChange} isOpen={isOpen}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Select your type</ModalHeader>
                                <ModalBody className="gap-2 grid grid-cols-2 px-8 py-0 text-small text-default-400">
                                    {ankiSelectionCard.map(({body, footer, key, page}, index) => (
                                        <CardSelector
                                        onClick={() => {
                                            setSelected(index);
                                            setCardLink(page);
                                        }}
                                        style={{
                                            background: index == selectedCard ? 'yellowgreen' : 'white'
                                        }}
                                        key={key}
                                        body={body}
                                        footer={footer}/>
                                    ))}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="success" onPress={() => createClick()}>
                                        Create
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <JoinButton>Join a Group</JoinButton>
            </div>
    );
}

    const editAnkiButton = () => {
        if (!ankis.length) {
            addToast({
                title: "You don't have anki's to edit.",
                description: "Create any anki to edit her",
                color: 'danger',
                timeout: 6000,
                shouldShowTimeoutProgress: true,
            })
        }
    };

    return (
        <>
            <Container>
                <Title>My Anki
                    <EditAnki variant="flat" onPress={editAnkiButton}>
                        <Edit2 size={24} color="#FFFFFF" />
                    </EditAnki></Title>
            </Container>
            <ContainerAnki>
                {ankis.length ? "Tem Anki" : <EnoughAnki />}
            </ContainerAnki>
        </>
    );
}