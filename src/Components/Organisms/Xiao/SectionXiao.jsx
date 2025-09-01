import { useState } from 'react'
import Card from '../../Molecules/Xiao/Card'

function SectionXiao() {
  const [data, setData] = useState([
    {index:1, src: "vite.svg", name: "name", price: "price"}, 
    {index:2, src: "<image_url_2>", name: "name", price: "price"}, 
    {index:3, src: "<image_url_3>", name: "name", price: "price"}, 
    {index:4, src: "<image_url_4>", name: "name", price: "price"}, 
    {index:5, src: "<image_url_5>", name: "name", price: "price"}, 
    {index:6, src: "<image_url_6>", name: "name", price: "price"}, 
    {index:7, src: "<image_url_7>", name: "name", price: "price"}, 
    {index:8, src: "<image_url_8>", name: "name", price: "price"},
    {index:9, src: "<image_url_4>", name: "name", price: "price"}, 
    {index:10, src: "<image_url_5>", name: "name", price: "price"}, 
    {index:11, src: "<image_url_6>", name: "name", price: "price"}, 
    {index:12, src: "<image_url_7>", name: "name", price: "price"}, 
    {index:13, src: "<image_url_8>", name: "name", price: "price"}
  ])
  return (
    <div className='w-full border grid gap-3 grid-cols-2 p-5 h-full'>
      {data && data.map(item => (
        <Card key={item.index} item={item}  />
      ))}
    </div>
  )
}

export default SectionXiao