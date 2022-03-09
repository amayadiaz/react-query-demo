import React from "react";
import { useQueries } from "react-query";
import axios from 'axios';


const fetchPlayers = (playerId) => {
  return axios.get(`http://localhost:4000/players/${playerId}`);
}

export const DynamicParallelQueries = ({ playersId }) => {
  const queryResults = useQueries(
    playersId.map((id) => {
      return {
        queryKey: ['player', id],
        queryFn: () => fetchPlayers(id),
      }
    })
  )
  console.log({ queryResults });
  return <h3>Dynamic ParallelQueries</h3>;
};
