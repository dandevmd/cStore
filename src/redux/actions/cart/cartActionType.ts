import {CategoryItem} from '../categories/categoryActionType'

export enum CART_ACTIONS_TYPES  {
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_IS_OPEN = 'cart/SET_IS_OPEN',
    SET_CART_COUNT= 'cart/SET_CART_COUNT',
    SET_CART_TOTAL= 'cart/SET_CART_TOTAL',
}

export type CartItem = CategoryItem & {
    quantity: number;
}