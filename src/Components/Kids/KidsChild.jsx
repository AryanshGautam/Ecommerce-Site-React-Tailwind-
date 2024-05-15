import React from 'react'
import './Kids.css'

function KidsChild(props) {

  const press = () =>{
    props.addToCart(props.data);
  }

  return (
    <>
    <div className="card-container">
        <div className='card'>
            <div className='cardimage'>
                <img src={props.data.imgUrl} alt="" />
            </div>

            <div className='cardtext'>
                <h4>{props.data.txt}</h4>
                <h2>{props.data.price}</h2>
                <button onClick={()=>press()}>Add to Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default KidsChild