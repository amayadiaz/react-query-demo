
import { useQuery } from "react-query";
import axios from 'axios';

export const usePlayersData = () => {
  return useQuery('players', () => {
    return axios.get('http://localhost:4000/players')
  }, {
    onSuccess: (data) => {
      console.log('Perform side effect after success ', data);
    },
    onError: (error) => {
      console.log('Perform side effect after error ', error);
    },
    select: (data) => {
      // Data Transformation
      return data.data.map(player => player);
    }
  })
}