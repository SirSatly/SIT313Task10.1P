import React from "react"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"
import './Footer.css'

const Footer = () => 
{
    return <div className='footer-div container-fluid'>
        <div className="row">
            <div className='col-sm-4'>
                <h4>For Dev</h4>
                <p><a href="#">How it works</a>
                <br />
                <a href="#">How to create a profile</a>
                <br />
                <a href="#">Find jobs</a></p>
            </div>
            <div className='col-sm-4'>
                <h4>For Clients</h4>
                <p><a href="#">How it works</a>
                <br />
                <a href="#">How to post a job</a>
                <br />
                <a href="#">Find dev</a></p>
            </div>
            <div className='col-sm-4'>
                <h4>Stay Connected</h4>
                <a href="https://www.facebook.com/"><img className="social-image" src={facebook} alt="facebook"></img></a>
                <a href="https://www.twitter.com/"><img className="social-image" src={twitter} alt="twitter"></img></a>
                <a href="https://www.instagram.com/"><img className="social-image" src={instagram} alt="instagram"></img></a>
            </div>
        </div>
        <br />
        <div className="centered-column">
            <h4>DEVLink</h4>
            <div className="d-flex justify-content-around">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Code of Conduct</a>
            </div>
        </div>
    </div>
}

export default Footer