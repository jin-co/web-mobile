import React from 'react'
import {} from 'react-icons/fa'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      {footerYear}
    </footer>
  )
}

export default Footer
