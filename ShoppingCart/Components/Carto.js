import React,{useState} from 'react';
import { UseCustom } from '../Reducer/ShopingContext';
import './Backdrop.css';

const Carto = ({clik,Zero}) => {
    const {items,clearcart,removeitem,TotalPrice,quan,PlusItem,MinusItem}=UseCustom();
    const [zeroitems, setZeroItems] = useState(Zero)
    console.log(zeroitems);
    // const totalprice= items.reduce((0,10)=>
    // {
    //       return val.price + val.price;
    // })
    // console.log(totalprice);

    const RemoveItemformCart =(id)=>
    {
       removeitem(id)
        
    }

    const ClearCartHandler=()=>
    {
         clearcart();
        setZeroItems(true)
    }
    const plusHandler=(id)=>{
      PlusItem(id)
      console.log(id);
      console.log('clicked');
    }
    return (

    <>
          <h1>Cart</h1>
          <div className="Backdrop" style={{cursor:'pointer'}} onClick={clik} /> 


          

       {zeroitems ? 
              <div className="Cart_Modal" >
              
                        <h1>Your cart is empty</h1>  <button  onClick={clik}>close</button> </div>  : <div className='Cart_Modal'>

                 {items.map((val)=>
                 
                 {     
                   console.log(val)
                   
                     return <div>
                     
                     <h2><span style={{color:'gold'}}>Item</span>-{val.name}  <span style={{color:'red',cursor:'pointer',fontWeight:'bolder'}} onClick={()=>RemoveItemformCart(val.id)} >X</span></h2>  
                       <h3>Price-{val.price}-/</h3>  
                       <button className='BtnOne' onClick={()=>plusHandler(val.id)} >+</button> <span style={{fontSize:'30px',padding:'5px'}}  >{quan}</span>
                       <button  min='0' onClick={()=>MinusItem(val.id) } >-</button>
                     </div>
                 })}
               <div>
                   <h2>Total Pirce is Rs {TotalPrice}</h2>
                  <button onClick={ClearCartHandler} id='clrCart'>Clear Cart</button>
                  <button id='procdBtn'>Proceed</button>
               </div>
              <button  onClick={clik}>close</button>
            </div>
       }
    
     </>

    )
}

export default Carto
