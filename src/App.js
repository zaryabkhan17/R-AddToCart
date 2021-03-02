import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [value, setvalue] = useState(0);
  const [cart , setcart] = useState([])
  const [prod, setprod] = useState(
    [{
      id: 1,
      Name: "Rasmalai",
      Price: 200,
      Imagee:  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VRdC4zJZHh3D8Jg_LIR1PL6_NQFTgMt_Qg&usqp=CAU" width="245px" height="400px" />
    },
    {
      id: 2,
      Name: "Kalakand",
      Price: 400,
      Imagee: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeDfyTMUHGRnIXxjiGc0_wVR43XTC7N5F7Q&usqp=CAU" width="245px" height="400px" />
    },
    {
      id: 3,
      Name: "Rabdi",
      Price: 600,
      Imagee: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxxb_rnz5JtSYvOuUQ_XgBstxifsfSQFLKw&usqp=CAU" width="245px" height="400px" />
    }]
  );


  function add() {
    setvalue(value + 1)
  }
  function sub() {
    if (value >= 2) {
      setvalue(value - 1)
    }
  }


  return (<>
    <h3>Cart</h3>
    <h4>{cart}</h4>
    <button onClick={add}> <b>+++++</b> </button>
   Quantity {value}
    <button onClick={sub}> <b>-----</b> </button>
    <br />
    {prod.map((eachProduct, index) => {
     return <div className="main" key={index}>
      {eachProduct.Imagee}
       <br/>
       {eachProduct.Name}
       {"  "}
       {eachProduct.Price}
       <br/>
       <button onClick={()=>{
       
           setcart(cart  + eachProduct.Name + " , ")
         
       }}>Add To Cart</button>
       <br/>
      
       
      </div>


    })
    }



    {/* <div>
   <img src="" width="300px" height="400px" />
   <br/>
<button onClick={prod.map()}>add to cart</button>
 </div> */}


  </>);

}

export default App;