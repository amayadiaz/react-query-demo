import React from "react";
import { useQuery } from "react-query";
import axios from 'axios';

export const TeamsPage = () => {
  
  const { isLoading, data, isError, error } = useQuery('teams', () => {
    return axios.get('http://localhost:4000/teams1')
  })

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h3>NBA Teams Page</h3>
      {
        data?.data.map((element) => (
          <div style={{ display: "inline-block" }} key={element.id}>
            <img src={element.image} alt={element.name} width="270" height="200" />
            <h3>{element.name}</h3>
          </div>
        ))
      }
    </>
  )
}