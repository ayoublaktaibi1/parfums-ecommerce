import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      )
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        }
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.size === action.payload.size)
        )
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }
    
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  
  const addToCart = (product, size, quantity) => {
    // Support pour les packs et les produits normaux
    const itemId = product.isPack ? product.id : product.id
    const itemSize = product.isPack ? "Pack" : size
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: itemId,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        size: itemSize,
        quantity,
        isPack: product.isPack || false,
        packProducts: product.packProducts || null
      }
    })
  }
  
  const removeFromCart = (id, size) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id, size }
    })
  }
  
  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size)
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, size, quantity }
      })
    }
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
  
  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }
  
  return (
    <CartContext.Provider value={{
      items: state.items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}