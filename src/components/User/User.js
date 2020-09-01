import React, { useState } from 'react';
import './User.css'

const User = (props) => {
    const { name, picture, email, website, phone } = props.user;
    const addMember = props.addMember;

    const [mobile, setMobile] = useState('');

    // console.log(props)
    const fullName = name.first + ' ' + name.last;
    const showPhone = () => setMobile(phone);
    return (
        <div className="user-container">
            <div className="user-img">
                <img src={picture.large} />
            </div>
            <div className="user-info">
                <h3>Name : {fullName}</h3>
                <p>Email : {email}</p>
                <p><a href={website} target="_blank">Learn about me</a></p>
                <p>Phone : {mobile} </p>
                <button onClick={showPhone}>Show Phone Number</button>
                <button onClick={()=>addMember(fullName)}>Add me</button>
            </div>
        </div>
    );
};

export default User;