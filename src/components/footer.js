import React from "react"
import footerStyles from "./footer.module.css"

export default ({ children }) => (
  <div className={footerStyles.container}>
    <h2 className={footerStyles.getInTouch}>Get in touch. I’d love to hear from you!</h2>
    <div className={footerStyles.socials}>
      <div>
        <a target='_blank' href='https://www.github.com/asmarshall'>Github</a><br/>
        <a target='_blank' href='https://www.linkedin.com/in/angela-s-marshall'>LinkedIn</a>
      </div>
      <div className={footerStyles.socialsRight}>
        <a target='_blank' href='https://www.instagram.com/angela_marshall'>Instagram</a><br/>
        <a href="mailto: hello@angelasmarshall.com">Email</a>
      </div>
    </div>
  </div>
)
