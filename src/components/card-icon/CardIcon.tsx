import { useSelector, useDispatch } from 'react-redux'
import { selectIsOpenState, selectCartItemsCount } from '../../redux/selectors/cartSelector'
import { setIsCartOpen } from '../../redux/actions/cart/cartActionCreator'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartIconContainer, ItemCount, } from './cardIcon.styles.jsx'


const CardIcon = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectIsOpenState)
    const cartCount = useSelector(selectCartItemsCount)

    const toggleDropdown = () => dispatch(setIsCartOpen(!isOpen))


    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon />
            <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon