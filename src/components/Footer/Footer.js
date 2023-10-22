import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands'

const Footer = () => {
  return (
    <footer>
        <a href='https://github.com/Tweekaayush'>
            Created by Aayush Dobriyal <FontAwesomeIcon icon={faGithub} />
        </a>
    </footer>
  )
}

export default Footer
