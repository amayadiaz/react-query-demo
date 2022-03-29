import React from "react";
import { useQuery } from "react-query";
import axios from 'axios';


const fetchPlayerByTeam = (playerId) => {
  return axios.get(`http://localhost:4000/players/${playerId}`);
}

const fetchTeams = (teamId) => {
  return axios.get(`http://localhost:4000/teams/${teamId}`);
}

export const DependentQueries = ({ playerId }) => {
  const { data: player } = useQuery(['player', playerId], () => fetchPlayerByTeam(playerId), {
    refetchOnWindowFocus: false,
  });
  console.log({ player });
  const teamId = player?.data?.teamId;
  console.log({ teamId });
  const { data: team } = useQuery(['teams', teamId], () => fetchTeams(teamId), {
    enabled: !!teamId,
    refetchOnWindowFocus: false,
  });
  console.log({ team });
  return (
    <h3>DependentQueries</h3>
  )
};
