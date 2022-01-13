import React, { createContext, useContext,useReducer } from "react";



export const Shopingcont=createContext();





//REDUCER



        export const reducerFunc=(state,action)=>
        {

            if(action.type==='ADD')
            {
                const ExistingItem = state.items.findIndex((item)=>
           
                     item.id === action.payload.id
                )
                console.log(ExistingItem );
                const ExistedItem=state.items[ExistingItem]
                console.log(ExistedItem);
                let UpdatedItams;

                if(ExistedItem)
                {
                    const updatedItems={...ExistedItem,
                    // quan:ExistedItem.amount + action.payload.amount
                              }
                              console.log(updatedItems);
                   UpdatedItams=[...state.items];
                   console.log(UpdatedItams);
                   UpdatedItams[ExistedItem]=updatedItems
                   console.log(updatedItems);
                }
       
                else{
                     UpdatedItams=state.items.concat(action.payload);
                }

        
        //  const UpdatedItams=state.items.concat(action.payload);
         const updatedTotalAmount=state.totalAmount + action.payload.price * action.payload.amount;
         const Quant=action.payload.amount
         console.log(Quant);
        
                return{
                    ...state,
                       items:UpdatedItams,
                       totalAmount:updatedTotalAmount,
                       quan:Quant
                    }
                  
              }
      
               if(action.type==='CLEAR')
               {
                   const clearitems=[];
                   return{
                       items:clearitems
                   }
               }
               if(action.type==='REMOVE')
               {
        // const remove=state.items.filter((val)=>val.id !== action.payload)

               return{
                   ...state,
                   items:state.items.filter((val)=>val.id !== action.payload)
               }
               
       
              }
           


           if(action.type==='PLUS_ITEM')
           {
               const Increment=state.items.map((val)=>
               {
                     if(val.id===action.payload)
                     {
                         return state.quan+1
                     }
               })
               return{
                   ...state,
                   quan:+Increment
                }
             }

             if(action.type==='MINUS_ITEM')
             {
                const Decrement=state.items.map((val)=>
                {
                      if(val.id===action.payload)
                      {
                          return state.quan-1
                      }
                })
                return{
                    ...state,
                    quan:+Decrement
                 }
             }
        
           return state
}
      

const initialState={
    items:[],
    totalAmount:0,
    quan:+0
    // Quantity:0
}


const ShopingContext=({children})=>
{
    const [state, dispatch] = useReducer(reducerFunc, initialState);


   const additemtocart=(itam)=>
   {
    //    console.log(itam);
       dispatch({type:'ADD',payload:itam})
   }
   


   const clearcartHandler=()=>
   {
       dispatch({type:'CLEAR'})
   }

   const removeitemHandler=(ids)=>
   {
       dispatch({type:'REMOVE',payload:ids})
    //    console.log(ids);
   }
  const PlusItemHandler=(id)=>
  {
          dispatch({type:'PLUS_ITEM',payload:id})
  }
  const MinusItemHandler=(id)=>
  {
    dispatch({type:'MINUS_ITEM',payload:id})
  }


    
    
  

    const data={
        items:state.items,
        TotalPrice:state.totalAmount,
        quan:state.quan,
        additem:additemtocart,
        clearcart:clearcartHandler,
        removeitem:removeitemHandler,
        PlusItem:PlusItemHandler,
        MinusItem:MinusItemHandler
    
    }
    console.log(state);
    console.log(state.items);
    console.log(state.quan);
    // console.log(state.totalAmount);

   return <Shopingcont.Provider value={data}>
       {children}
   </Shopingcont.Provider>
}

//customHook
export const UseCustom=()=>
{
    return useContext(Shopingcont);
}

export default ShopingContext