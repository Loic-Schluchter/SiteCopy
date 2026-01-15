import React from 'react'
import CreateAccount from "../auth/CreateAccountButton.jsx"
import MetaLogo from '../branding/MetaLogo.jsx'

export default function Footer() {
  return (
    <div>
      <div className="md:hidden">
      <CreateAccount variant="secondary" />
      <MetaLogo />

      </div>
      <ul className="footer-links">
        <li>À propos</li>
        <li>Aide</li>
        <li>Plus</li>
      </ul>
    </div>
  )
}
