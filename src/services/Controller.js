import axios from 'axios'

const SERVER_URL = 'https://pokeapi.co/api/v2';

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 15000
  });
  export default {
      getPokemon: (id) => instance.get('/pokemon/'+id,{
          transformResponse: (res) => {
              return JSON.parse(res)
          }
      })
  }