import './Left.css';

function Left() {
  return (
    <div className='left'>
      <div className="profile-image">
        <img src="/src/assets/me.jpg" alt="Profile" />
      </div>
      <div className='about'>
        <h1>ALI AL-HAMAWY</h1>
        <p className="title">Front-End Developer</p>
        <a className='email' target='_blank' href="mailto:alialhamawy2007@gmail.com" rel="noopener noreferrer">
          alialhamawy2007@gmail.com
        </a>
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <i className='icon-facebook'></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className='icon-instagram'></i>
          </a>
          <a href="#" aria-label="Telegram">
            <i className='icon-telegram'></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i className='icon-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Left;