import React from 'react'

const RightSideSection = () => {
    return (
        <section className="content-2">
            <nav className="content-2-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Protocol</a></li>
                </ul>
            </nav>

            <div className="phone-wrapper">
                <div className="phone">
                    <a href="#">
                        <img src="./phone.svg" alt="iphone" />
                    </a>
                </div>
                <div className="phone-details">
                    <a href="#">
                        <i className="fa fa-apple-alt"></i>
                        <h1>Telegram</h1>
                        <h1>For iPhone / Ipad</h1>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default RightSideSection
