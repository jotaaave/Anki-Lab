import { ButtonList, DivProfile, GreenPoint, ItemList, Line, List, ProfileLogo, SearchList, SubMenuContainer, Username } from "./style";
import { House, Layers, Settings, File } from "@deemlol/next-icons";
import icon from '@/../public/profileMock.jpeg';
import { AnimatePresence, motion } from "motion/react";

export default function SubMenu({ hidden }: { hidden: boolean }) {
    return (
        <SubMenuContainer>
            <AnimatePresence>
                {hidden ? <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                >
                    <List>
                        <DivProfile>
                            <ProfileLogo src={icon} alt="logo" width={60} height={50}/>
                            <GreenPoint />
                            <div style={{ display: "flex", flexDirection: "column", padding: "10px 5px 5px 5px"}}>
                                <Username>Jotinha Rapaiz</Username>
                            </div>
                        </DivProfile>
                        <ItemList>
                            <SearchList type="text" placeholder="Search..."/>
                        </ItemList>
                        <ItemList>
                            <ButtonList href="/profile">
                                <House size={24} color="#ffffff" style={{ marginRight: '15px'}} />
                                Profile
                            </ButtonList>
                            <ButtonList href="/">
                                <Layers size={24} color="#ffffff" style={{ marginRight: '15px'}} />
                                Ankis
                            </ButtonList>
                            <ButtonList href="/plugins">
                                <File size={24} color="#ffffff" style={{ marginRight: '15px'}} />
                                Plugins
                            </ButtonList>
                            <ButtonList href="/configuration">
                                <Settings size={24} color="#ffffff" style={{ marginRight: '15px'}} />
                                Config
                            </ButtonList>
                        </ItemList>
                        <Line />
                    </List>
                </motion.div> : null}
            </AnimatePresence>
        </SubMenuContainer>
    );
};