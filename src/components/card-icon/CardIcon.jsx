import {useContext, useEffect} from 'react'

import DropdownContext from '../../contexts/DropdownContext'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartIconContainer, ItemCount, } from'./cardIcon.styles.jsx'


const CardIcon = () => {
    const { isOpen, setIsOpen, cartCount} = useContext(DropdownContext)

    const toggleDropdown = ()=> setIsOpen(!isOpen)
   

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon  />
            <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon