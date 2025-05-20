import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { Container, ContainerAnki, CreateButton, EditAnki, JoinButton, Title } from "./style";
import { Edit2 } from "@deemlol/next-icons";
import CardSelector from "@/components/card";
import { useState } from "react";
import Image from "next/image";
import unicAnki from '@/../public/UNIC_ANKI.png'
import ankiCollection from '@/../public/COLLECTION_ANKI.png'
import ankiFolder from '@/../public/FOLDER_ANKI.png'
import ankiGroup from '@/../public/GROUP_ANKI.png'

export default function Anki() {
    const ankis = [];

    const [selectedCard, setSelected] = useState(-1);

    const ankiSelectionCard = [
        {
            body: <Image alt={'anki_unic'} src={unicAnki} width={150} height={150}/>,
            footer: <p>Perfect to make a unic anki that you can store in the folders</p>,
            key: 1,
        },
        {
            body: <Image alt={'anki_unic'} src={ankiCollection} width={200} height={200}/>,
            footer: <p>The Anki collection is a system for storing Unic Ankis in a single session.</p>,
            key: 2,
        },
        {
            body: <Image alt={'anki_unic'} src={ankiFolder} width={200} height={200}/>,
            footer: <p>Store yours ankis to manage the best form every he</p>,
            key: 3,
        },
        {
            body: <Image alt={'anki_unic'} src={ankiGroup} width={200} height={200}/>,
            footer: <p>Create your group, and share for yours friends ankis :D</p>,
            key: 4,
        },
    ];

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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