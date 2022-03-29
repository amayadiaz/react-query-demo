
import { useQuery, useQueryClient } from "react-query";
import axios from 'axios';

export const usePlayerData = (playerId) => {
  const queryClient = useQueryClient()
  return useQuery(['player', playerId], () => {
    return axios.get(`http://localhost:4000/players/${playerId}`)
  }, {
    initialData: () => {
      console.log(queryClient.getQueryData('players'));
      const player = queryClient.getQueryData('players')?.data?.find((player) => player.id === playerId)
      console.log({ player });
      if (player) return { data: player };
      return undefined;
    }
  })
}