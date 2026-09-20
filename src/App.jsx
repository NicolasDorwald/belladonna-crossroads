import { useState } from 'react'
import './App.css'
import './button-style.css'
import './contact-form.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="site">

      {/* LOGO */}
        <aside className="site-logo">
            <img
            src="/images/bellacross-modern-psych-background-black.png"
            alt="The Belladonna Crossroads"
            />
        </aside>

      {/* MENU */}
        <nav className="navigation">
            <ul>
                <li>
                <button onClick={() => setActiveSection('home')}>
                    Home
                </button>
                </li>

                <li>
                <button onClick={() => setActiveSection('media')}>
                    Unreel Medias
                </button>
                </li>

                <li>
                <button onClick={() => setActiveSection('merch')}>
                    Shop' Oddities
                </button>
                </li>

                <li>
                <button onClick={() => setActiveSection('shows')}>
                    Meet The Freaks
                </button>
                </li>

                <li>
                <button onClick={() => setActiveSection('contact')}>
                    Contact
                </button>
                </li>
            </ul>
        </nav>

      {/* CONTENU */}
      <main className="content">

        {activeSection === 'home' && (
          <>
            
            <h2>Stoner rock from Metz, France.</h2>

            <p>
              Take a turn down the cursed road:
            </p>

            <p>
              slow-burning blend of heavy riffs,
            </p>

            <p>
              sweaty bass, occult beats,
            </p>

            <p>
              and psychedelic midnight rituals.
            </p>
          </>
        )}

        {activeSection === 'media' && (
          <>
            <h2>Unreel Medias</h2>
            <p>Music videos, live footage and more.</p>
          </>
        )}

        {activeSection === 'merch' && (
          <>
            <h2>Shop' Oddities</h2>
            <p>T-shirts & Records ...Coming soon.</p>
          </>
        )}

        {activeSection === 'shows' && (
          <>
            <h2>Meet The Freaks</h2>

            <ul>
              <li>Wild Yann - Drums</li>
              <li>DeadMan Dav - Bass / Vox</li>
              <li>Nico Damn - Guitar / Vox</li>
            </ul>

            <p>Upcoming shows and past gigs.</p>
          </>
        )}

        {activeSection === 'contact' && (
          <form
            className="contact-form"
            action="https://formspree.io/f/xljdgblj"
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

            <button
              type="submit"
              className="contact-submit"
            >
              Send to the freaks
            </button>
          </form>
        )}

      </main>

    </div>
  )
}

export default App