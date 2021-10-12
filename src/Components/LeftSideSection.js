import React from 'react'

const LeftSideSection = () => {
    return (
         <section className="content-1">
            <i className="fab fa-telegram"></i>

            <div className="section-content">
                <div className="title-context">
                    <h1>Telegram A New</h1>
                    <h1>Era of Messaging</h1>
                </div>
                <p>Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed.</p>

                <div className="btn-wrapper">
                    <button className="btn">Download</button>
                </div>                        
            </div>

            <div className="footer-wrapper">
                <h1>Recent News</h1>
                <div className="divider"></div>

                <div className="recent-news-wrapper">
                    <div>
                        <a href="#">
                            <h1>Apr 3</h1>
                            <p>Coronavirus News and Verifed Channels</p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <h1>Mar 30</h1>
                            <p>Chat Folders, Archive, Channel Stats and More</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftSideSection
