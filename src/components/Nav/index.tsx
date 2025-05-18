import Image from "next/image";
import { Container, Profile } from "./style";
import icon from '@/../public/ANKI_LOGO_NB.png';
import profileMock from '@/../public/profileMock.jpeg';
import SubMenu from "./SubMenu";
import { useState } from "react";

export default function Nav() {
    const [profile, setProfile] = useState(false);

    return (
        <>
            <Container>
                <div style={{ width: "1000%", display: "flex", justifyContent: "center"}}>
                    <Image src={icon} alt="logo" width={150} height={150}/>
                </div>
                <div style={{ width: "50%", display: "flex", justifyContent: "end" }}>
                    <Profile src={profileMock} alt="logo" width={150} height={150} onClick={() => setProfile(!profile)}/>
                </div>
            </Container>
            <SubMenu hidden={profile} />
        </>
    );
}