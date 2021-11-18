import React, { useEffect, useState } from "react";
import axios from "axios";

import Test2 from "components/Test2.js";

export default function Test({color}) {
    const [events, getEvents] = useState('');
    const url = 'https://api.github.com/events';

    useEffect (() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`${url}`)
        .then((response) => {
            const eventData = response.data;
            getEvents(eventData);
        })
        .catch(error => console.error(`Error : ${error}`));
    }

    return ( <Test2 events={events}/> )
}