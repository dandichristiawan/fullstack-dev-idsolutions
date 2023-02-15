import React, { useState } from 'react';

export const ContactForm = () => {

    //setState 
    const [details, setDetails] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(details)
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">Contact Me</legend>
                <div className="uk-margin">
                    <h4>Name</h4>
                    <input className="uk-input" type="text" name="name" placeholder="Your name" aria-label="Input" onChange={handleChange} />
                </div>

                <div className="uk-margin">
                    <h4>Email</h4>
                    <input className="uk-input" type="text" name="email" placeholder="Your email address" aria-label="Input" onChange={handleChange} />
                </div>
                <div className="uk-margin">
                    <h4>Subject</h4>
                    <input className="uk-input" type="text" name="subject" placeholder="" aria-label="Input" onChange={handleChange} />
                </div>
                <div className="uk-margin">
                    <h4>Message</h4>
                    <textarea className="uk-textarea" type="text" name="message" rows="5" placeholder="" aria-label="Textarea" onChange={handleChange} />
                </div>
                <div className="uk-margin">
                    <button type="submit" className='uk-button uk-button-default'>Submit</button>
                </div>
            </fieldset>
        </form>
    )
}
