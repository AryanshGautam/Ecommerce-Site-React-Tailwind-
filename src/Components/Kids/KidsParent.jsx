import React from 'react'
import KidsChild from './KidsChild'

function KidsParent( { addToCart } ) {
    const kidsCards = [
        {
          id: '41',
          imgUrl: "/images/Kids/Kid1.jpg",
          txt: "Denim Jacket (Light Blue)",
          price: `76$`
        },
        {
          id: '42',
          imgUrl: "/images/Kids/Kid2.jpg",
          txt: "Denim Pants",
          price: `65$`
        },
        {
          id: '43',
          imgUrl: "/images/Kids/Kid3.jpg",
          txt: "Sweatshirt (Pink)",
          price: `79$`
        },
        {
          id: '44',
          imgUrl: "/images/Kids/Kid4.jpg",
          txt: "Baby Vest (Knitting Pattern)",
          price: `99$`
        },
        {
          id: '45',
          imgUrl: "/images/Kids/Kid5.jpg",
          txt: "Basketball Jersey",
          price: `110$`
        },{
            id: '46',
            imgUrl: "/images/Kids/Kid6.jpg",
            txt: "Cute Dress",
            price: `66$`
          },
          {
            id: '47',
            imgUrl: "/images/Kids/Kid7.jpg",
            txt: "Woolen Sweater",
            price: `78$`
          },
          {
            id: '48',
            imgUrl: "/images/Kids/Kid8.jpg",
            txt: "Girl Top",
            price: `59$`
          },
          {
            id: '49',
            imgUrl: "/images/Kids/Kid9.jpg",
            txt: "Jacket (Blue)",
            price: `89$`
          },
          {
            id: '50',
            imgUrl: "/images/Kids/Kid10.jpg",
            txt: "Frock-Dress",
            price: `110$`
          },
          {
            id: '51',
            imgUrl: "/images/Kids/Kid11.jpg",
            txt: "Sweat-Shirt (Racoon Print)",
            price: `66$`
          },
          {
            id: '52',
            imgUrl: "/images/Kids/Kid12.jpg",
            txt: "Frock Dress (White)",
            price: `58$`
          },
          {
            id: '53',
            imgUrl: "/images/Kids/Kid13.jpg",
            txt: "Bow for Babies",
            price: `23$`
          },
          {
            id: '54',
            imgUrl: "/images/Kids/Kid14.jpg",
            txt: "Christmas Sweater",
            price: `67$`
          },
          {
            id: '55',
            imgUrl: "/images/Kids/Kid15.jpg",
            txt: "Team Hoodie",
            price: `101$`
          },
          {
            id: '56',
            imgUrl: "/images/Kids/Kid16.jpg",
            txt: "Baby Hoodie (Blue)",
            price: `46$`
          },
          {
            id: '57',
            imgUrl: "/images/Kids/Kid17.jpg",
            txt: "Bombber Jacket",
            price: `66$`
          },
          {
            id: '58',
            imgUrl: "/images/Kids/Kid18.jpg",
            txt: "Baby Costume",
            price: `89$`
          },
          {
            id: '59',
            imgUrl: "/images/Kids/Kid19.jpg",
            txt: "Sweatshirt (Printed)",
            price: `99$`
          },
          {
            id: '60',
            imgUrl: "/images/Kids/Kid20.jpg",
            txt: "Yellow Jacket",
            price: `110$`
          },
          {
            id: '61',
            imgUrl: "/images/Kids/Kid21.jpg",
            txt: "Top (Blue & White Pattern)",
            price: `56$`
          },
          {
            id: '62',
            imgUrl: "/images/Kids/Kid22.jpg",
            txt: "Animal Print Sweatshirt",
            price: `77$`
          },
          {
            id: '63',
            imgUrl: "/images/Kids/Kid23.jpg",
            txt: "Sweatshirt (Bear Print)",
            price: `79$`
          },
          {
            id: '64',
            imgUrl: "/images/Kids/Kid24.jpg",
            txt: "Baby Bottoms",
            price: `88$`
          },
          {
            id: '65',
            imgUrl: "/images/Kids/Kid25.jpg",
            txt: "Babby Bear Coustume",
            price: `110$`
          }
      ];
      
      return (
        <>
          <div>
            {kidsCards.map(card => (
              <KidsChild key={card.id} data={card} addToCart={addToCart} />
            ))}
          </div>
        </>
      );
}

export default KidsParent