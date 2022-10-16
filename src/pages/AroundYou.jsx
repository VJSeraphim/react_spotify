import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'

const CountryTracks = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying} = useSelector((state) => state.player)

    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_LLMrDzYCfEbmDBsp916vBwDf9WqzG')
        .then((res) => setCountry(res?.data?.location?.country))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [country])
    

    return (
        <div>

        </div>
    )
}

export default CountryTracks;
