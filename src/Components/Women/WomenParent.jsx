import React from 'react'
import WomenChild from './WomenChild'

function WomenParent( { addToCart } ) {
    const womenCards = [
        {
          id: '19',
          imgUrl: "/images/Women/Women1.jpg",
          txt: "Red Long-Coat",
          price: `112$`
        },
        {
          id: '20',
          imgUrl: "/images/Women/Women2.jpg",
          txt: "Sweatshirt (Oversized)",
          price: `55$`
        },
        {
          id: '21',
          imgUrl: "/images/Women/Women3.jpg",
          txt: "Top with Dragon print",
          price: `59$`
        },
        {
          id: '22',
          imgUrl: "/images/Women/Women4.jpg",
          txt: "Brown Long-Coat",
          price: `103$`
        },
        {
          id: '23',
          imgUrl: "/images/Women/Women5.jpg",
          txt: "T-Shirt (Printed)",
          price: `45$`
        },
        {
            id: '24',
            imgUrl: "/images/Women/Women6.jpg",
            txt: "Yellow Dress",
            price: `92$`
          },
          {
            id: '25',
            imgUrl: "/images/Women/Women7.jpg",
            txt: "Blue&White Strips Top",
            price: `105$`
          },
          {
            id: '26',
            imgUrl: "/images/Women/Women8.jpg",
            txt: "Flower print sweater",
            price: `78$`
          },
          {
            id: '27',
            imgUrl: "/images/Women/Women9.jpg",
            txt: "Yellow Cap",
            price: `43$`
          },
          {
            id: '28',
            imgUrl: "/images/Women/Women10.jpg",
            txt: "Pink Long-Coat",
            price: `145$`
          },
          {
            id: '29',
            imgUrl: "/images/Women/Women11.jpg",
            txt: "Grey Long-Coat with Collar Furr",
            price: `172$`
          },
          {
            id: '30',
            imgUrl: "/images/Women/Women12.jpg",
            txt: "Frock",
            price: `55$`
          },
          {
            id: '31',
            imgUrl: "/images/Women/Women13.jpg",
            txt: "Pink Shining Jacket",
            price: `89$`
          },
          {
            id: '32',
            imgUrl: "/images/Women/Women14.jpg",
            txt: "Brown Sweatr",
            price: `103$`
          },
          {
            id: '33',
            imgUrl: "/images/Women/Women15.jpg",
            txt: "Top (Flower Printed)",
            price: `95$`
          },
          {
            id: '34',
            imgUrl: "/images/Women/Women16.jpg",
            txt: "Red Long-Coat",
            price: `123$`
          },
          {
            id: '35',
            imgUrl: "/images/Women/Women17.jpg",
            txt: "Red Shirt",
            price: `45$`
          },
          {
            id: '36',
            imgUrl: "/images/Women/Women18.jpg",
            txt: "Denim Jacket",
            price: `111$`
          },
          {
            id: '37',
            imgUrl: "/images/Women/Women19.jpg",
            txt: "Bomber Jacket",
            price: `245$`
          },
          {
            id: '38',
            imgUrl: "/images/Women/Women20.jpg",
            txt: "Beautiful Dress",
            price: `103$`
          },
          {
            id: '39',
            imgUrl: "/images/Women/Women21.jpg",
            txt: "Japanese Print Suit",
            price: `85$`
          },
          {
            id: '40',
            imgUrl: "/images/Women/Women22.jpg",
            txt: "Woolen Oversized Sweater",
            price: `103$`
          }
      ];
      
      return (
        <>
          <div>
            {womenCards.map(card => (
              <WomenChild key={card.id} data={card} addToCart={addToCart} />
            ))}
          </div>
        </>
      );
      
}

export default WomenParent