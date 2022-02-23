import React, { useState, useEffect } from "react";
import axios from 'axios';

export const TradtionalPlayers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    axios.get('http://localhost:4000/players').then((res) => {
      setData(res.data)
      setIsLoading(false)
    }).catch((error) => {
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h3>NBA Traditional Players</h3>
      {
        data.map((element) => (
          <div style={{ display: "inline-block" }} key={element.id}>
            <img src={element.image} alt={element.name} width="270" height="200" />
            <h3>{element.name}</h3>
            <p>{element.team}</p>
          </div>
        ))
      }
    </>
  )
}