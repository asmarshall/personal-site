import React from "react"
import navStyles from "./nav.module.css"
import scrollTo from 'gatsby-plugin-smoothscroll'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const LightDark = props => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div className={navStyles.checkboxContainer}>
        <input
          id="checkbox"
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />
        <label htmlFor="checkbox"></label>
      </div>
    )}
  </ThemeToggler>
)

export default ({ children }) => (
  <div>
    <div className={`${navStyles.panel} ${navStyles.topLeft}`}>
      <LightDark />
    </div>
    <div id='scroll' className={`${navStyles.panel} ${navStyles.lowerLeft}`}>
      <span>Scroll</span>
      <div className={navStyles.line}></div>
    </div>
    <div className={`${navStyles.panel} ${navStyles.topRight}`}>
      <button onClick={() => scrollTo('#about')} className={navStyles.about}>
        <span>About</span>
      </button><br />

      <button onClick={() => scrollTo('#projects')} className={navStyles.projects}>
        <span>Projects</span>
      </button>
    </div>
  </div>
)
