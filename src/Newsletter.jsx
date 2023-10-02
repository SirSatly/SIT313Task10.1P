import React from 'react'
import './Card.css'

const Newsletter = () => 
{
    return <form action = "/" method="POST">
        <div className="container-fluid bg-light">
            <p><b>SIGN UP FOR OUR DAILY INSIDER</b>
            <input name="email" type="text" placeholder="Enter your email" className='m-1' />
            <button name="submit" type="submit" className="btn btn-secondary btn-sm">Subscribe</button></p>
        </div>
    </form>
}

export default Newsletter