import unicAnki from '@/../public/UNIC_ANKI.png'
import ankiCollection from '@/../public/COLLECTION_ANKI.png'
import ankiFolder from '@/../public/FOLDER_ANKI.png'
import ankiGroup from '@/../public/GROUP_ANKI.png'
import Image from 'next/image';
import { genId } from '@/utils/genId';

export const ankiSelectionCard = [
        {
            body: <Image alt={'anki_unic'} src={unicAnki} width={150} height={150}/>,
            footer: <p>Perfect to make a unic anki that you can store in the folders</p>,
            page: `/anki/unique/${genId()}`,
            key: 1,
        },
        {
            body: <Image alt={'anki_unic'} src={ankiCollection} width={200} height={200}/>,
            footer: <p>The Anki collection is a system for storing Unic Ankis in a single session.</p>,
            page: `/anki/unique/${genId()}`,
            key: 2,
        },
        {
            body: <Image alt={'anki_unic'} src={ankiFolder} width={200} height={200}/>,
            footer: <p>Store yours ankis to manage the best form every he</p>,
            page: `/anki/unique/${genId()}`,
            key: 3,
        },
        {
            body: <Image alt={'anki_unic'} src={ankiGroup} width={200} height={200}/>,
            footer: <p>Create your group, and share for yours friends ankis :D</p>,
            page: `/anki/unique/${genId()}`,
            key: 4,
        },
];