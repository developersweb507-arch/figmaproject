import React, { useState } from 'react'
import { Card, Input } from 'antd';




const herbalProducts = [
  {
    id: 1,
    name: "Ashwagandha Root Capsules",
    category: "Adaptogen",
    primary_benefit: "Stress relief and energy support",
    form: "Capsule",
    organic: true
  },
  {
    id: 2,
    name: "Echinacea Goldenseal Tincture",
    category: "Immune Support",
    primary_benefit: "Boosts immune system",
    form: "Liquid tincture",
    organic: false
  },
  {
    id: 3,
    name: "Turmeric Curcumin with Black Pepper",
    category: "Anti-inflammatory",
    primary_benefit: "Joint health and inflammation reduction",
    form: "Tablet",
    organic: true
  },
  {
    id: 4,
    name: "Organic Chamomile Flowers",
    category: "Nervine & Relaxant",
    primary_benefit: "Promotes calm and sleep",
    form: "Dried herb (tea)",
    organic: true
  },
  {
    id: 5,
    name: "Milk Thistle Extract",
    category: "Liver Support",
    primary_benefit: "Detoxifies and protects liver",
    form: "Softgel",
    organic: false
  },
  {
    id: 6,
    name: "Elderberry Syrup",
    category: "Immune Support",
    primary_benefit: "Cold and flu relief",
    form: "Syrup",
    organic: true
  },
  {
    id: 7,
    name: "Ginger Root Powder",
    category: "Digestive Aid",
    primary_benefit: "Reduces nausea and aids digestion",
    form: "Powder",
    organic: true
  },
  {
    id: 8,
    name: "Holy Basil (Tulsi) Drops",
    category: "Adaptogen",
    primary_benefit: "Mental clarity and stress resilience",
    form: "Liquid extract",
    organic: true
  },
  {
    id: 9,
    name: "Saw Palmetto Softgels",
    category: "Prostate & Hormone Health",
    primary_benefit: "Supports urinary and prostate function",
    form: "Softgel",
    organic: false
  },
  {
    id: 10,
    name: "Lavender Essential Oil",
    category: "Aromatherapy",
    primary_benefit: "Relieves anxiety and improves sleep",
    form: "Essential oil",
    organic: true
  }
];






function RandomImg() {

const [herbal, setHerbal] = useState(herbalProducts)

// function handlefiltere(prod){

// const filterdata = herbalProducts.filter(i => (i.name) )
// setHerbal(filterdata)

// }


 function handleChange(e) {
   
    const filterdata = herbalProducts.filter(i=>(i.name.includes (e.target.value)))
    setHerbal(filterdata)

  }



  return (
    <div>
        <br/>
        <br/>
        <br/>
        <Input placeholder='search'  onChange={handleChange} / >
        <br/>
<div>
{herbal.map(i=>(
<Card><h1>{i.name}</h1>
<p>{i.category}</p>
</Card>

))}

</div>



    </div>
  )
}

export default RandomImg