import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaPinterest} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { BsFillEnvelopeOpenFill} from "react-icons/bs";
import {FaUsb} from "react-icons/fa";
import {FaSearch} from 'react-icons/fa';


const ReviewLinks = (props) => {
    return (
        <div>
            <img src='https://i.imgur.com/LapAnWf.png'alt='something' className="gonzoEggs"/>(8)
            <a className='gonzoReview1'href="#PaulApp" >Write a Review</a>
            <a className='gonzoReview2' href="#PaulApp">See <b>2</b> Questions | <b>25</b>Answers</a>
            <p className='viewMoreItems'><FaSearch/>See More <u className='masks'>"Masks"</u></p>
            <div>
            <div className='dropdown'>
                <button className='dropbtn'><FaUsb/><b>SHARE</b></button>
                <div className='dropDownContent'>
                    <div>
                            <button className="email"><a className="email" href="https://gmail.com/" data-widget-id="Page ID"><BsFillEnvelopeOpenFill/>Email</a></button> 
                            <br></br>
                            <button className="facebook"><a className="facebook" href="https://facebook.com/login" data-widget-id="Page ID"><FaFacebook/>Like</a></button>   
                            <br></br>
                            <button className='share'><a className='share' href="https://yahoo.com">Share</a></button>
                            <br></br>
                            <button className="twitter"><a className="twitter" href="https://twitter.com/" data-widget-id="Page ID"><FaTwitter/>Tweet</a></button>        
                            <br></br>
                            <button className="pintrest"><a className="pintrest" href="https://pintrest.com/" data-widget-id="Page ID"><FaPinterest/>Save</a></button>      
                            <br></br>
                            <button><a href="http://www.tv.com/shows/silicon-valley" alt='' data-widget-id="Page ID"><img src='https://i.imgur.com/O4e3wEF.png'className='pp'/>#CurrFavShow</a></button>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        </div>
    )
}
export default ReviewLinks

