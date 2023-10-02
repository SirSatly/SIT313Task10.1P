import React from 'react'
import './Card.css'

const CustCard = (props) => 
{
    return <div className='coloumn col-sm-4'>
        <img className='card-img' src={props.avatar} alt="staff" />
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <p>{props.rating}</p>
    </div>
}

export default CustCard