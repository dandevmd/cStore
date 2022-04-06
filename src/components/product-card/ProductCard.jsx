import {useContext} from 'react'

import DropdownContext from '../../contexts/DropdownContext'

import Button from '../button/Button.jsx'
import './productCard.styles.scss'

const ProductCard = ({product}) => {
    const { name, price, imageUrl, quantity} = product
    const { addItemToCart } = useContext(DropdownContext)

  const addItem = () => addItemToCart(product)

  return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
            <span className="price">{quantity} </span>
        </div>
        <Button buttonType='inverted' onClick={addItem}>BUY</Button>
    </div>
  )
}

export default ProductCard