import { useState, useEffect } from 'react';
import axios from 'axios';
import BbsCard from './bbsCard/BBSCard';


export const Dashboard = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        else{
            (async () => {
                try {
                    const {data} = await axios.get(   
                                    'http://localhost:8000/dashboard/', {
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }
                                );
                    setMessage(data.message);
                } catch (e) {
                    console.log("MADE ITTT")
                }
            })()
        };
    }, []);
    return (
        <div className="form-signin mt-5 text-center">
            <BbsCard/>
        </div>
    );
}
