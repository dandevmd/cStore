import {useContext} from 'react'

import DropdownContext from '../../contexts/DropdownContext'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cardIcon.styles.scss'


const CardIcon = () => {
    const {isOpen, setIsOpen, cartCount} = useContext(DropdownContext)

    return (
        <div className='cart-icon-container' onClick={() => setIsOpen(!isOpen)}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count" >{cartCount}</span>
        </div>
    )
}

export default CardIcon