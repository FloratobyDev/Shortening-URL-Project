import React, { useRef } from 'react'
import './navbarStyle.scss';

const Navbar = () => {
    const tabLoginRef = useRef(undefined)
    const tabCurrentStatus = useRef(true)

    const toggleTabContainer = () => {
        if (tabCurrentStatus.current) {
            tabLoginRef.current.style.opacity = '100%';
        }
        else {
            tabLoginRef.current.style.opacity = '0%';
        }

        tabCurrentStatus.current = !tabCurrentStatus.current;
    }

    return (
        <nav className='NAVBAR'>
            <div className="Brand-Container">
                <h1 className="Brand-Name">Shortly</h1>
                <img onClick={toggleTabContainer} className='Menu' src="/images/icon-menu.svg" alt="" />
            </div>
            <div ref={tabLoginRef} className="Tab-Login-Container">
                <div className="Tab-Container">
                    <span className='text-hover'>Features</span>
                    <span className='text-hover'>Pricing</span>
                    <span className='text-hover'>Resources</span>
                </div>
                <div className="Login-Container">
                    <p className="Login">Login</p>
                    <p className="Signup button-clicked">Sign Up</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar