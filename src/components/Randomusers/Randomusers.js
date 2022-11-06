import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Randomusers.css';

const Randomusers = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => setUsers(data.results))
        .catch(err => console.error(err))
    },[])

    return (
        <div>
            <h1><a href="https://www.linkedin.com/in/mdmonirulislammonir/" target="_blank" rel="noopener noreferrer" title='This site is built with React JS. By - Monirul Islam'>Random User Generator</a></h1>
            

            <div className='user-container'>
            {
                users.map(user => <User user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Randomusers;