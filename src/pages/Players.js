import React, { useState, useEffect } from "react";
import axios from 'axios';

export const PlayersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:4000/players').then((res) => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  return (
    <>
      <h3>NBA Players Page</h3>
      {
        data.map((element) => (
          <div style={{ display: "inline-block" }}>
            <img src={element.image} alt={element.name} width="270" height="200" />
            <h3>{element.name}</h3>
            <p>{element.team}</p>
          </div>
        ))
      }
    </>
  )
}