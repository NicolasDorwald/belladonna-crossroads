import { useState } from 'react'
import './App.css'
import './button-style.css'
import './contact-form.css'
import './shop.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="site">

      {/* LOGO */}
        <aside className="site-logo">
            <img
             src={`${import.meta.env.BASE_URL}images/bellacross-modern-psych-background-black.png`}
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
                    Message
                </button>
                </li>
            </ul>
        </nav>

      {/* CONTENU */}
      <main className="content">

        {activeSection === 'home' && (
          <>
            
            <h2><strong>Stoner</strong> rock from <span>Metz</span>, France.</h2>

            <p>
                Heavy riffs. Sweaty bass. Occult beats.
            </p>
            <p>
                Psychedelic rituals at the cursed crossroads.
            </p>

          </>
        )}

        {activeSection === 'media' && (
          <>
            <h2>Unreel Medias</h2>
            <p>Music videos, live footage and more.</p>
            <p>More soon ...</p>
          </>
        )}

        {activeSection === 'merch' && (
        <section className="shop">
            <h2>Shop' Oddities</h2>

            <p className="shop-contact">
                For orders and inquiries -{' '}
                <button onClick={() => setActiveSection('contact')}>
                    contact the freaks
                </button>.
            </p>

            <div className="shop-grid">

                <article className="shop-item">
                    <figure>
                    <img
                        src={`${import.meta.env.BASE_URL}images/merch/redwhitetshirt-logo.jpg`}
                        alt="The Belladonna Crossroads Logo T-Shirt"
                    />
                    <figcaption>
                       - Logo - T-Shirt
                         <span>25 €</span>
                    </figcaption>
                    </figure>
                </article>

                <article className="shop-item">
                    <figure>
                    <img
                        src={`${import.meta.env.BASE_URL}images/merch/liminal-album.jpg`}
                        alt="Liminal album cover"
                    />
                    <figcaption>
                        - Liminal - CD Album
                        <span>15 €</span>
                    </figcaption>
                    </figure>
                </article>

            </div>

        </section>
        )}

        {activeSection === 'shows' && (
          <>
            <h2>Meet The Freaks</h2>
            <p>Upcoming shows and past gigs.</p>
            {/* <ul>
              <li>Wild Yann - Drums</li>
              <li>DeadMan Dav - Bass / Vox</li>
              <li>Nico Damn - Guitar / Vox</li>
            </ul> */}

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

    <footer className="site-footer">
        
        <div className="social-links">

            <a href="#" className="instagram" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" className="facebook" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" className="spotify" aria-label="Spotify">
            <i className="fa-brands fa-spotify"></i>
            </a>

            <a href="#" className="bandcamp" aria-label="Bandcamp">
            <i className="fa-brands fa-bandcamp"></i>
            </a>

            <a href="#" className="youtube" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
            </a>

        </div>

        <p>© 2026 The Belladonna Crossroads</p>
    </footer>

    </div>
  )
}

export default App