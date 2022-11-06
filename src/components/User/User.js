import React from 'react';
import './User.css';

const User = (props) => {
    const {name, picture, dob, gender, email, cell, phone, location} = props.user;
    console.log(props.user)
        return (
        <div className="user">
            <img src={picture.large} alt={name.first}/>
            <h4>{name.title} {name.first} {name.last}</h4>
            <small><strong>AGE:</strong> </small><small>{dob.age}</small>, <small><small><strong>Gender:</strong> </small>{gender}</small>
             <br></br>
             <small><strong>DOB:</strong> </small><small>{dob.date}</small>
            <br></br>
            <small><small><strong>Email:</strong> </small>{email}</small>
            <br></br>
            <small><small><strong>Cell:</strong> </small>{cell}</small>, <small><small><strong>Phone:</strong> </small>{phone}</small>
            <br></br>
            <small><small><strong>Address:</strong> </small>
            <br></br>
            {location.street.number}, {location.street.name}, {location.city}-{location.postcode},
            <br></br>
            {location.state}, {location.country}
            </small>
            <br></br>
            <button type='button' onClick={()=> window.location.reload(false)} className="btn" title='Click to generate random user.'>Generate</button>
        </div>
    );
};

export default User;