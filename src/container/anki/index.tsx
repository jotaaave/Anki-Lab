import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { Container, ContainerAnki, CreateButton, EditAnki, JoinButton, Title } from "./style";
import { Edit2 } from "@deemlol/next-icons";
import CardSelector from "@/components/card";
import { useState } from "react";

export default function Anki() {
    const ankis = [];

    const [selectedCard, setSelected] = useState(-1);

    const ankiSelectionCard = [
        {
            body: <h3>Unic Anki</h3>,
            footer: <p>Perfect to make a unic anki that you can store in the folders</p>,
            key: 1,
        },
        {
            body: <h3>Collect</h3>,
            footer: <p>Here you can store anything anki</p>,
            key: 2,
        },
    ];

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const EnoughAnki = () => {
        return (
            <div>
                <p>You dont have a Anki/Anki Group. Join Than :D</p>
                <CreateButton onPress={onOpen}>Create Anki</CreateButton>
                <Modal onOpenChange={onOpenChange} isOpen={isOpen}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Select your type</ModalHeader>
                                <ModalBody className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                                    {ankiSelectionCard.map(({body, footer, key}, index) => (
                                        <CardSelector
                                        onClick={() => {
                                            setSelected(index)
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
                                    <Button color="success" onPress={onClose}>
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

    return (
        <>
            <Container>
                <Title>My Anki
                    <EditAnki>
                        <Edit2 size={24} color="#FFFFFF" />
                    </EditAnki></Title>
            </Container>
            <ContainerAnki>
                {ankis.length ? "Tem Anki" : <EnoughAnki />}
            </ContainerAnki>
        </>
    );
}