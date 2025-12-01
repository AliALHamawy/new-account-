import './Left.css';

function Left() {
  return (
    <div className='left'>
      <div className="profile-image">
        <img src="./src/assets/me.jpg" alt="Profile" />
      </div>
      <div className='about'>
        <h1>ALI AL-HAMAWY</h1>
        <p className="title">Front-End Developer</p>
        <a className='email' target='_blank' href="https://alialhamawy2007@gmail.com" rel="noopener noreferrer">
          alialhamawy2007@gmail.com
        </a>
        <div className="social-links">
          <a target='_blank' href="https://www.facebook.com/share/19YAnfW1F6/" aria-label="Facebook">
            <i className='icon-facebook'></i>
          </a>
          <a target='_blank' href="https://instagram.com/alialhamawy" aria-label="Instagram">
            <i className='icon-instagram'></i>
          </a>
          <a target='_blank' href="https://t.me/alialhamawy" aria-label="Telegram">
            <i className='icon-telegram'></i>
          </a>
          <a target='_blank' href="https://github.com/AliALHamawy" aria-label="GitHub">
            <i className='icon-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Left;