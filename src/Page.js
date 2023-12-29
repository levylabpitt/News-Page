
import React, { useEffect, useState } from 'react';
import News from './News.js'
import runGoogleScript from './data.js';

export function Page() {

    const [data, setData] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await runGoogleScript('getNews');
            setData(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className = "page">
            <h1>Recent News</h1>
            {data.map( (news) => {
                return (
                    <News 
                        key = {news.id} 
                        {...news} 
                    />
                )
            })}
        </div>
    )
}

