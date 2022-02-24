import React from "react";
import { useQuery } from "react-query";
import axios from 'axios';

export const RQPlayers = () => {
  
  const { isLoading, data, isError, error, isFetching } = useQuery('teams', () => {
    return axios.get('http://localhost:4000/players')
  }, {
    // Default Values
    cacheTime: 5 * 60 * 1000,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    // refetchInterval: 3000,
    // refetchIntervalInBackground: true,
  })

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h3>NBA RQ Players</h3>
      {
        data?.data.map((element) => (
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