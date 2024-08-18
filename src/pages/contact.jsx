import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import '../assets/styles.css';

function Contact() {
    return (
        <div>
            <div className="card">
                <div className="card-header">Contact Us</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                        </div>
                        <div className="form-group mg">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;