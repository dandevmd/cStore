import DirectoryItem from '../directory-item/DirectoryItem';
import {categories} from '../../constants/categories';
import { DirectoryContainer } from './directory.styles.jsx';


const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />

            ))}
        </DirectoryContainer >
    )
}

export default Directory