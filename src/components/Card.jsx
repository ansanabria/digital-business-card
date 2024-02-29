import profilePic from "../assets/profile-pic.png";
import LinkedinIcon from "../assets/linkedin.svg?react";
import MailIcon from "../assets/mail.svg?react";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function Card() {
  return (
    <div className="card-container">
      <img
        src={profilePic}
        alt="Profile picture of Laura Smith"
        className="profile-pic"
      />
      <header>
        <h1>Laura Smith</h1>
        <p>Frontend developer</p>
        <a>laurasmith.website</a>
        <div className="cta-btns">
          <button className="mail-btn" type="button">
            <MailIcon className="icon" />
            <p>Mail</p>
          </button>
          <button className="linkedin-btn" type="button">
            <LinkedinIcon className="icon" />
            <p>LinkedIn</p>
          </button>
        </div>
      </header>
      <main>
        <div>
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div>
          <h2>Interests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </main>
      <footer>
        <button type="button">
          <img src={facebook} alt="Facebook icon" />
        </button>
        <button type="button">
          <img src={instagram} alt="Instagram icon" />
        </button>
        <button type="button">
          <img src={twitter} alt="Twitter icon" />
        </button>
        <button type="button">
          <img src={github} alt="GitHub icon" />
        </button>
      </footer>
    </div>
  );
}

export default Card;
