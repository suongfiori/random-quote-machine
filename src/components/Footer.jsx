// import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  const gitHubUrl = "https://github.com/suongfiori"

  return (
    <div id="footer" className="footer">
        <span>by <a href={gitHubUrl}>SuongFiori</a> - {year}</span>
    </div>
  )
}

export default Footer