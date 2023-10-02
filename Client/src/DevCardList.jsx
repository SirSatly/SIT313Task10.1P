import React from "react"
import DevCard from './DevCard'
import devList from './devList'
import './Card.css'

function cardComponent (dev, i)
{
    if (i < 3)
    {
        return <DevCard
            key = {dev.key}
            avatar = {dev.avatar}
            name = {dev.name}
            position = {dev.position}
            rating = {dev.rating} 
        />
    }
}

const DevCardList = () => 
{
    return <div>
        <h1>Featured Freelancers</h1>
        <div className="row">
            {devList.map(cardComponent)}
        </div>
        <button class="btn btn-secondary">See More</button>
    </div>
}

export default DevCardList