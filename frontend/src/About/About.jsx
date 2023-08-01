import React from 'react'
import mail from '../Logo/mail.png'

export const AboutUs = () => {
    return (
        <div className = 'w-9/12 m-auto pt-10 text-3xl'>
        <section>
            <h1 className = 'text-center underline'>About</h1>
            <p>Connect blog is all about simplicity! We wanted to bring to the world a simple blog site where you can share 
                with the interweb your thoughts and etc! It just started as an idea one night and took many months to bring it live.
            </p>
        </section>
        <section>
            <h1 className = 'text-center underline'>Contact us!</h1>
            <p>
                WE love to hear from you! Please do not hestitate to reach out! We communicate with our users all the time we love it!
            </p>
            
        </section>
        <section className = 'text-center'>
            <img className = 'w-20 m-auto' src = {mail} alt = 'email logo'/>
            <a className = 'no-underline' href="mailto:email@example.com">Send Email</a>
        </section>
        </div>
    )
}