import React,{useState,useRef} from 'react'
import { UseCustom } from '../Reducer/ShopingContext'
import Shoppingpage from './Shoppingpage'
import './ShoppingPage.css';

const ShoppingTwo = ({name,price,id,quantity}) => {
   
    // console.log(id);
   
             const [totalqunatity, setTotalQunatity] = useState(0)
             const [error, setError] = useState(false)
             console.log(totalqunatity.length);
             const len =totalqunatity.length;
             console.log(typeof(len));

  

    const {additem,removeitem,items,quan}=UseCustom();

    const additemHandler=()=>
    {
    if(len===undefined )
    {
        setError(true)
    }
    // else if(items.length <=0)
    // {
    //     setTotalQunatity(0)

    // }
    else
    {
        
        additem({
            id:id,
            name:name,
            price:price,
            amount:+totalqunatity

        })
        
        setError(false)
    }
  }
    
     

    // 


    // const RemoveitemHandler=(ids)=>
    // {
    //     console.log('removed');
    //     console.log(ids);
    //     removeitem(ids);

    //     }
    

//    setTimeout(()=>
//     {
//            setError(false);
//            setAddError(false);
//     },3000)

  
   
    return (
        <>
        
        <div className='MainClass'>
        
       
        <h2><span style={{color:'gold'}}>Item</span>-{name}  </h2>  
                    <h3>Price-{price}-/</h3>  
                    {error && <p style={{color:'red',fontWeight:'bold'}}>plz select Quantity</p>}
                    <label >Quantity</label> 
                    <input type='number' max='5' min='1' onChange={(e)=>setTotalQunatity(e.target.value) } value={totalqunatity} placeholder='0'></input>
                    <button className='BtnOne'  onClick={additemHandler} >Add</button> 
                   
            
        </div>

        </>
    )
}

export default ShoppingTwo
