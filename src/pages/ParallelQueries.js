import React from "react";
import { useQuery } from "react-query";
import axios from 'axios';


const fetchPlayers = () => {
  return axios.get(`http://localhost:4000/players`);
}

const fetchTeams = () => {
  return axios.get(`http://localhost:4000/teams`);
}

export const ParallelQueries = () => {
  const { data: players } = useQuery('players', fetchPlayers);
  const { data: teams } = useQuery('teams', fetchTeams);
  console.log(players);
  console.log(teams);
  return (
    <h3>ParallelQueries</h3>
  )
};
