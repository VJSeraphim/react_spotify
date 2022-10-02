import { CreateApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cd6cd91bf3msh6905a6c6b241644p1e8a3djsndcdb9fa298bd',
      'X-RapidAPI-Host': ''
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = CreateApi({
        reducerPath: 'shazamCoreApi'
    })