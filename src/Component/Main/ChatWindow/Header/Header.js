import React from 'react'

const Header = (props) => {
    console.log(props)
    const {userName, status} = props.user
    return (
        <div>
            <h2>{userName}</h2>
            <p>{status}</p>
        </div>
    )
};

export default Header;
