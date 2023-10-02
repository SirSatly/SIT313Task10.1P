import React from "react"
import CustCard from './CustCard'
import custList from './custList'
import './Card.css'

function cardComponent (cust, i)
{
    if (i < 3)
    {
        return <CustCard
            key = {cust.key}
            avatar = {cust.avatar}
            name = {cust.name}
            position = {cust.position}
            rating = {cust.rating}
        />
    }
}

const CustCardList = () => 
{
    return <div>
        <h1>Featured Customers</h1>
        <div className="row">
            {custList.map(cardComponent)}
        </div>
        <button class="btn btn-secondary">See all customers</button>
    </div>
}

export default CustCardList