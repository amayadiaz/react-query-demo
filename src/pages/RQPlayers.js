import React from "react";
import { Link } from "react-router-dom";
import { usePlayersData } from '../hooks/usePlayersData';

export const RQPlayers = () => {
  
  const { isLoading, data, isError, error, isFetching, refetch } = usePlayersData()

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
      <button onClick={refetch}>Fetch Players</button>
      {
        <div>
        {data.map((element) => (
          <div style={{ display: "inline-block", textDecoration: 'none' }} key={element.id}>
            <Link to={`/rq-players/${element.id}`}>
            <img src={element.image} alt={element.name} width="270" height="200" />
            <h3>{element.name}</h3>
            </Link>
          </div>
        ))}
        </div>
      }
    </>
  )
}