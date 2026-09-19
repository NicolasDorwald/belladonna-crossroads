import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

    const getPosition = (section) => {
        const sections = ['home', 'media', 'merch', 'band']

        const activeIndex = sections.indexOf(activeSection)
        const sectionIndex = sections.indexOf(section)

        const position = (sectionIndex - activeIndex + 4) % 4

        return `position-${position}`
    }

  return (
    <div className="site">

      <header className="site-header">
        <h1>The Belladonna Crossroads</h1>
      </header>

        <main className="content">

        {activeSection === 'home' && (
            <>
            <h2>Welcome to the Crossroads</h2>
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
            <p>Coming soon.</p>
            </>
        )}

        {activeSection === 'band' && (
            <>
            <h2>The Band</h2>
            <p>Meet The Belladonna Crossroads.</p>
            </>
        )}

        </main>

      <nav className="navigation">

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
            Media
        </button>

        <button
            className={getPosition('merch')}
            onClick={() => setActiveSection('merch')}
            >
            Merch
        </button>

        <button
            className={getPosition('band')}
            onClick={() => setActiveSection('band')}
            >
            The Band
        </button>

      </nav>

    </div>
  )
}

export default App