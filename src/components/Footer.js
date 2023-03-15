const Footer = () => {

  // Contact Info
  const joyOatWebsite = 'https://www.joyserquina.com'
  const joyGithub = 'https://www.github.com/essjay05'
  const joyLinkedIn = 'https://www.linkedin.com/in/joy-serquina'

  return (
    <footer className='main-footer'>
      <div className='contact-container'>
        <p className='copyright title-style-6'>&copy; Joy of All Trades LLC 2023</p>
        <ul>
          <li><span className='title-style-6'><a href={joyOatWebsite} target='_blank' rel='noreferrer' name={`Joy's Portfolio Site`}>www.joyserquina.com</a></span></li>
          <li><span className='title-style-6'><a href={joyGithub} target='_blank' rel='noreferrer' name={`Joy's Github`}>Github</a></span></li>
          <li><span className='title-style-6'><a href={joyLinkedIn} target='_blank' rel='noreferrer' name={`Joy's LinkedIn`}>LinkedIn</a></span></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer