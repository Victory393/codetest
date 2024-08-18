import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function About() {
    return (
        <div className='card'>
            <div className="card-header">About Us</div>
            <div className="card-body">
                <p>This is the about page</p>
            </div>
            <img src="https://images.pexels.com/photos/5324958/pexels-photo-5324958.jpeg?auto=compress&cs=tinysrgb&w=400/500/400" alt="about pic" className="img-fluid" />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <button className="btn btn-primary">Learn More</button>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    );
}

export default About;