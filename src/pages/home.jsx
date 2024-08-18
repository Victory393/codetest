import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles.css';

function Home() {
    return (
        <div className='home'>
            <img src="https://images.pexels.com/photos/6457492/pexels-photo-6457492.jpeg?auto=compress&cs=tinysrgb&w=400/500/400" alt="background" className="img-fluid bg-pic" />
            <div className='content'>
                <p>Some text about the home page</p>
                    <button className='btn btn-primary home-btn'>Contact Us</button>
            </div>
        </div>
    );
}

export default Home;