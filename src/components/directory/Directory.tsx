import {FC, Key} from 'react'
import DirectoryItem from '../directory-item/DirectoryItem';
import {categories} from '../../constants/categories'
import { DirectoryContainer } from './directory.styles.jsx';


export type DirectoryCategory = {
    id: Key;
    title: string;
    imageUrl: string;
    route: string;
};

const Directory:FC<DirectoryCategory> = ():JSX.Element => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />

            ))}
        </DirectoryContainer >
    )
}

export default Directory