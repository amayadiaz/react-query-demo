import React from "react";
import { useParams } from "react-router-dom";
import { usePlayerData } from "../hooks/usePlayerData";

export const RQPlayerDetails = () => {

  const { playerId } = useParams()
  const { isLoading, isError, error, data} = usePlayerData(playerId);

  if (isLoading) return <h2>Loading ...</h2>;
  if (isError) return <h2>{error.message}</h2>

  return (
    <>
      <img src={data?.data.image} alt={data?.data.name} width="270" height="200" />
      <h3>{data?.data.name}</h3>
      <p>Team: {data?.data.team}</p>
    </>
  )
}