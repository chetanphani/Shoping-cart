import React from 'react'

import Shoppingpage from './Components/Shoppingpage'
import ShoppingTwo from './Components/ShoppingTwo'
import ShopingContext from './Reducer/ShopingContext'




const ShoppingCartApp = () => {
    
    return (
               <>
               <ShopingContext>
               
                 <Shoppingpage/>
                 
               </ShopingContext>
               
               </>
    )
}

export default ShoppingCartApp
