import React,{useState} from 'react'
import { UseCustom } from '../Reducer/ShopingContext';
import Carto from './Carto';
// import Cart from './Cart';

import './ShoppingPage.css';
import ShoppingTwo from './ShoppingTwo';
 


const data=[{
    id:1,
    category:'lunch',
    title:'Sambar Rice',
    price:170,
    desc:'This is a very special item in oir menu which is recomended by all our customers',
    quantity:0

},
{
    id:2,
    category:'lunch',
    title:'North indian thali',
    price:170,
    desc:'This is a very special item in oir menu which is recomended by all our customers in LUNCH!',
    quantity:0

},
{
    id:3,
    category:'snacks',
    title:'pani puri',
    price:70,
    desc:'This is a very special item in oir menu which is recomended by all our customers in LUNCH',
    quantity:0

},
{
    id:4,
    category:'BreakFast',
    title:'Masala Dosa',
    price:100,
    desc:'This is a very special item in oir menu which is recomended by all our customers in BREAKFAST!',
    quantity:0

},
{
    id:5,
    category:'snacks',
    title:'punugulu',
    price:70,
    desc:'This is a very special item in oir menu which is recomended by all our customers in SNACKS!',
    quantity:0

},
]

const Shoppingpage = () => {
    const {clearcart,items,quan}=UseCustom();
   

    const [store, setStore] = useState(data);
    const [storeclear, setStoreClear] = useState(false)
    const [cart, setCart] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [ZeroAvailable, setZeroAvailable] = useState(true)
    // const [add, setAdd] = useState(0)
    // const {additem}=UseCustom();
    // console.log(additem);
    //      console.log(store);
         
       


         const RemovieItemHandler=()=>
         {
            //  setStoreClear(true)
            clearcart();
            setStoreClear(true)
             document.getElementById('hide').style.visibility='hidden'
         }
        //  const relo=location.reload();
         const refreshpage=()=>
         {
            window.location.reload();
         }


        const ShowCartModal=()=>
        {
            if(items.length <=0)
            {
                setShowModal(true)
                setZeroAvailable(true)
                
            }
            else
            {
                setZeroAvailable(false)
                setShowModal(true)
            }
              
        }

        const closemodal=()=>
        {
            
            setShowModal(false)
        }

    return (
        <>
        <div>
            <h2>Total items {items.length} and Quantity is {quan}</h2>
            
        </div>
        <div>
            <button onClick={ShowCartModal}>CART</button>
        </div>
        {showModal && <Carto  Zero={ZeroAvailable} clik={closemodal}/>}
        
       
        {storeclear ? <div>
            <h1>All items are removed</h1>
            <button onClick={refreshpage}>Refresh page</button>
        </div>:   store.map((val)=>
        {
            return <ShoppingTwo name={val.title} price={val.price} Key={val.id} id={val.id} quantity={val.quantity} ></ShoppingTwo>
        })}
       
       
       
        </>
        
       
    )
}

export default Shoppingpage
