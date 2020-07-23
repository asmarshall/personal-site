import React from "react"
import Nav from "../components/nav"
import Container from "../components/container"

export default ({ children }) => (
  <div id="mainContainer">
    <Nav />
    <Container>
      { children }
    </Container>
  </div>
)
