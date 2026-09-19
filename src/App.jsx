import { useState } from 'react'
import './App.css'
import './button-style.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

    const getPosition = (section) => {
        const sections = ['home', 'media', 'merch', 'band', 'shows', 'contact']

        const activeIndex = sections.indexOf(activeSection)
        const sectionIndex = sections.indexOf(section)

        const position = (sectionIndex - activeIndex + 6) % 6

        return `position-${position}`
    }

  return (
    <div className="site">

        <header className="site-header">
            <h1>The Belladonna Crossroads</h1>
        </header>

        <div className="main-layout">

            <main className="content">

                {activeSection === 'home' && (
                    <>
                    <h2>Welcome to the Crossroads</h2>
                    <p>Stoner rock from Metz,France.</p>
                    <p>A slow-burning blend of heavy riffs, sweaty bass, 
                        occult beats and psychedelic haze, somewhere 
                        between cursed crossroads, desert mirages and midnight rituals.</p>
                    <p>Take a turn down the cursed road, where the desert heat meets 
                        occult visions and beautifully twisted nightmares.</p>
                    </>
                )}

                {activeSection === 'media' && (
                    <>
                    <h2>Media</h2>
                    <p>Music videos, live footage and more.</p>
                    </>
                )}

                {activeSection === 'merch' && (
                    <>
                    <h2>Merch</h2>
                    <p>T-shirts & Records ...Coming soon.</p>
                    </>
                )}

                {activeSection === 'band' && (
                    <>
                    <h2>The Band</h2>
                    <p>Meet The Belladonna's.</p>
                    <ul>
                        <li>Wild Yann - Drums</li>
                        <li>DeadMan Dav - Bass / Vox</li>
                        <li>Nico Damn- Guitar / Vox</li>
                    </ul>
                    </>
                )}
    
                {activeSection === 'shows' && (
                    <>
                    <h2>Shows</h2>
                    <p>Upcoming shows and past gigs.</p>
                    </>
                )}

                {activeSection === 'contact' && (
                <>
                    <h2>Contact the Band</h2>

                    <form
                    className="contact-form"
                    action="https://formspree.io/f/TON_ID"
                    method="POST"
                    >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        rows="6"
                        required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-submit">
                        Send into the void
                    </button>
                    </form>
                </>
                )}

            </main>

            <nav className="navigation">

                <div className="wheel">
                    <button
                        className={getPosition('home')}
                        onClick={() => setActiveSection('home')}
                        >
                        Home
                    </button>

                    <button
                        className={getPosition('media')}
                        onClick={() => setActiveSection('media')}
                        >
                        Unreel Medias
                    </button>

                    <button
                        className={getPosition('merch')}
                        onClick={() => setActiveSection('merch')}
                        >
                        Shop'Oddities
                    </button>

                    <button
                        className={getPosition('band')}
                        onClick={() => setActiveSection('band')}
                        >
                        Meet The Freaks
                    </button>

                    <button
                        className={getPosition('shows')}
                        onClick={() => setActiveSection('shows')}
                        >
                        On The Road
                    </button>

                    <button
                        className={getPosition('contact')}
                        onClick={() => setActiveSection('contact')}
                        >
                        Message
                    </button>

                </div>
            </nav>
        </div>
    </div>
  )
}

export default App