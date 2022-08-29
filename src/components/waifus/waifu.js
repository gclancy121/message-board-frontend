import React, {useEffect, useState} from 'react';
import axios from 'axios';
import URL from '../../url';

const Waifu = (props) => {
    const [waifu, setWaifu] = useState('');

    const {id} = useParams();

    useEffect(() => {
        axios.get(`${URL}/waifus/`)
    })
}