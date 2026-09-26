import { useState } from 'react'
import './App.css'
import './button-style.css'
import './contact-form.css'
import './shop.css'
import './dates.css'
import './medias.css'

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
            <div className="media-content">

                <h2>Unreel Medias</h2>

                <p className="media-intro">
                Medias, live footage, recovered transmissions.
                </p>

                <div className="media-list">

                    {/* <div className="media-item">

                        <div className="media-info">
                        <h3>261005</h3>
                        <p>Excerpt — Transmission 01</p>

                        <div className="fake-player">
                            <button className="play-button">▶</button>

                            <div className="player-right">
                            <div className="progress">
                                <span></span>
                            </div>

                            <div className="time">
                                <span>00:00</span>
                                <span>03:42</span>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div> */}


                    <div className="media-item">

                        <div className="media-info">
                        <h3>Rehearsal Tape #03</h3>
                        <p>Unreleased recording</p>

                        <div className="fake-player">
                            <button className="play-button">▶</button>

                            <div className="player-right">
                            <div className="progress">
                                <span></span>
                            </div>

                            <div className="time">
                                <span>00:00</span>
                                <span>01:58</span>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>


                    <div className="media-item">

                        <div className="media-info">
                        <h3>She Drinks From The Skull</h3>
                        <p>Ritual Fragment</p>

                        <div className="fake-player">
                            <button className="play-button">▶</button>

                            <div className="player-right">
                            <div className="progress">
                                <span></span>
                            </div>

                            <div className="time">
                                <span>00:00</span>
                                <span>01:32</span>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>

            </div>
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
        <div className="shows-content">
            <h2>Meet The Freaks</h2>
            <p>Upcoming rituals and past encounters.</p>

            <div className="shows-list">

                {/* Upcoming */}
                <div className="show upcoming">
                    <span className="show-date">12 DEC 2026</span>
                    <span className="show-place">Winter Crossroads — Thionville</span>
                </div>

                <div className="show upcoming">
                    <span className="show-date">21 NOV 2026</span>
                    <span className="show-place">The Black Chapel — Luxembourg</span>
                </div>

                <div className="show upcoming">
                    <span className="show-date">31 OCT 2026</span>
                    <span className="show-place">Halloween Rituals — Metz</span>
                </div>

                <div className="show upcoming">
                    <span className="show-date">17 OCT 2026</span>
                    <span className="show-place">The 112 — Terville</span>
                </div>

                {/* Past */}
                <div className="show past">
                    <span className="show-date">08 AUG 2026</span>
                    <span className="show-place">Hellfire Open Air — Moselle</span>
                </div>

                <div className="show past">
                    <span className="show-date">21 JUN 2026</span>
                    <span className="show-place">Fête de la Musique — Metz</span>
                </div>

                <div className="show past">
                    <span className="show-date">23 MAY 2026</span>
                    <span className="show-place">Desert Rituals — Thionville</span>
                </div>

                <div className="show past">
                    <span className="show-date">18 APR 2026</span>
                    <span className="show-place">The Gueulard Plus — Nilvange</span>
                </div>

            </div>

        </div>
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