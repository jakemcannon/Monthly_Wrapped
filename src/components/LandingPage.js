import React from 'react'
import Button from 'react-bootstrap/Button';
import song_image from '../example_songs.png'
import artist_image from '../example_artists.png'
import axios from 'axios'
import '../App.css'

function LandingPage() {

    const [tempAuth, setTempAuth] = ([])

    let myConfig = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
     }

    const tempAuthFunc = () => {
        axios.get('http://127.0.0.1:5000/login', myConfig)
        .then(res => {
            window.location = res.data.data
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="landing-page">
            <h1 className="heading">
                Create monthly stories based on
                <span> your Spotify listening trends</span>
            </h1>
            <p className="sub-heading"> Once a month we will email or text you your official Spotify listening trends for the month </p>
            <ul className="photo-list">
                <li>
                <img className="photo-list-image" src={song_image} className="App-photo" />
                </li>
                <li>
                <img className="photo-list-image" src={artist_image} className="App-photo" />
                </li>
            </ul>
            <div className="login-btn">
            <Button variant="success shadow-none" onClick={tempAuthFunc}> Login </Button>
            </div>
        </div>
    )
}

export default LandingPage