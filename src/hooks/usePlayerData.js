
import { useQuery } from "react-query";
import axios from 'axios';

export const usePlayerData = (playerId) => {
  return useQuery(['player', playerId], () => {
    return axios.get(`http://localhost:4000/players/${playerId}`)
  })
}