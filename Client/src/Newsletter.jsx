import React, {useState} from 'react'
import './Card.css'

const Newsletter = () => 
{
    var [email, setEmail] = useState("")
    var [signedUp, setSignedUp] = useState("")

    const handleClick = async()=>{
        var re = /\S+@\S+\.\S+/;
        if (!re.test(email)) return

        await fetch ('http://localhost:8080/', { 
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email})
        })
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .then(setSignedUp(true))
        .catch(err => {
            console.log("Error:" + err)
        })
    }

    if (signedUp)
    {
        return <div className="container-fluid bg-light">
            <p><b>THANK YOU FOR SIGNING UP FOR OUR DAILY INSIDER</b></p>
        </div>
    }

    return <form>
        <div className="container-fluid bg-light">
            <p><b>SIGN UP FOR OUR DAILY INSIDER</b>
            <input name="email" type="email" placeholder="Enter your email" className='m-1' required onChange={e => setEmail(e.target.value)} />
            <button name="submit" type="submit" className="btn btn-secondary btn-sm" onClick= {handleClick}>Subscribe</button></p>
        </div>
    </form>
}

export default Newsletter