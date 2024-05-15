import React from 'react'
import MenChild from './MenChild'

function MenParent( { addToCart } ) {

    // const styleofcard = {
    //     height : "max-content",
    //     width : "90%",
    //     margin : "30px auto",
    //     padding : "10px",
    //     display : "flex",
    //     alignItems : "center",
    //     justifyContent : "center",
    //     gap : "20px",
    //     flexWrap : "wrap"
    // }
    

    const cards = [
        {
          id: '1',
          imgUrl: "/images/Men1.jpg",
          txt: "Black T-Shirt (Loose-Fit)",
          price: `45$`
        },
        {
          id: '2',
          imgUrl: "/images/Men2.jpg",
          txt: "Creamy T-Shirt (Loose-Fit)",
          price: `40$`
        },
        {
          id: '3',
          imgUrl: "/images/Men3.jpg",
          txt: "GrayScale T-Shirt (Loose-Fit)",
          price: `38$`
        },
        {
          id: '4',
          imgUrl: "/images/Men4.jpg",
          txt: "Checked Shirt (OverSized)",
          price: `55$`
        },
        {
          id: '5',
          imgUrl: "/images/Men5.jpg",
          txt: "Sweatshirt LightPink",
          price: `108$`
        },
        {
            id: '6',
            imgUrl: "/images/Men6.jpg",
            txt: "Half Sleeves Jacket",
            price: `145$`
          },
          {
            id: '7',
            imgUrl: "/images/Men7.jpg",
            txt: "Nike T-shirt",
            price: `88$`
          },
          {
            id: '8',
            imgUrl: "/images/Men8.jpg",
            txt: "Black Blazer",
            price: `158$`
          },
          {
            id: '9',
            imgUrl: "/images/Men9.jpg",
            txt: "High-Neck Sweater",
            price: `95$`
          },
          {
            id: '10',
            imgUrl: "/images/Men10.jpg",
            txt: "White Oversized T-shirt",
            price: `67$`
          },
          {
            id: '11',
            imgUrl: "/images/Men11.jpg",
            txt: "Suit",
            price: `245$`
          },
          {
            id: '12',
            imgUrl: "/images/Men12.jpg",
            txt: "Olive Green Shirt",
            price: `79$`
          },
          {
            id: '13',
            imgUrl: "/images/Men13.jpg",
            txt: "Black Shades",
            price: `103$`
          },
          {
            id: '14',
            imgUrl: "/images/Men14.jpg",
            txt: "Yellow Checked Shirt",
            price: `72$`
          },
          {
            id: '15',
            imgUrl: "/images/Men15.jpg",
            txt: "Long Coat (Grey)",
            price: `118$`
          },
          {
            id: '16',
            imgUrl: "/images/Men16.jpg",
            txt: "OverSized T-shirt",
            price: `68$`
          },
          {
            id: '17',
            imgUrl: "/images/Men17.jpg",
            txt: "Brown Denim Jacket",
            price: `102$`
          },
          {
            id: '18',
            imgUrl: "/images/Men18.jpg",
            txt: "Denim Shirt",
            price: `108$`
          }
      ];

  return (
    <>
        <div>
      {cards.map(card => (
        <MenChild key={card.id} data={card} addToCart={addToCart} />
      ))}
    </div>
    </>
  )
}

export default MenParent