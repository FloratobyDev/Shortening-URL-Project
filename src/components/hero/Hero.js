import React from 'react'
import './heroStyle.scss'
const Hero = () => {
    return (
        <main className='HERO'>
            <img src="/images/illustration-working.svg" alt="person-sitting" className="Person-Sitting" />
            <div className="Call-To-Action-Container">
                <p className="Cta-Quote">More than just shorter links</p>
                <p className="Cta-Desc">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button id='Cta-Button' className='button-clicked'>Get Started</button>
            </div>
        </main>
    )
}

export default Hero