import React, { useEffect, useState } from 'react'
import { fetchContent } from './../utils/fetchContent';

export default function Navbar() {
    const [data, setData] = useState({ title: "", subtitle: "" });
    useEffect(() => {
        fetchContent("hero.json").then(setData);
    },[])
    useEffect(() => {
        console.log("Data at Hero section ", data)
    }, [data])
  return (
     <div>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
     </div>
  )
}
