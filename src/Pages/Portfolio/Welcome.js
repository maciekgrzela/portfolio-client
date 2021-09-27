import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import welcomePhoto from '../../Assets/Images/welcome_photo.png';
import { IoDocumentText } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import SocialIconComponent from '../../Components/SocialIconComponent';
import { Link } from 'react-router-dom';

const colors = ['#afdb2f', '#f4e274', '#3a92bb', '#a11f2d', '#ad7db6'];

const Welcome = () => {
  const socials = useSelector((state) => state.users.info.socialMediaLinks);

  return (
    <section className='portfolio-page__section welcome-section'>
      <div className='welcome-section__typing'>
        <div>
          <span className='mr-1'>Witaj:</span>
          <ReactTypingEffect
            text={[
              'Programisto!',
              "HR'owcu!",
              "Web Dev'ie!",
              'Front-endowcu!',
              'Back-endowcu!',
              'Dev-opsie!',
            ]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, index) => {
              return (
                <h1>
                  {text.split('').map((char) => (
                    <span
                      className='welcome-section__char'
                      style={{
                        backgroundColor: colors[index % 5],
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              );
            }}
          />
        </div>
        <span className='welcome-section__description'>
          Bardzo miło mi że tu jesteś! W kolejnych sekcjach{' '}
          <span>(psst. scrolluj w dół)</span> dowiesz się więcej o mnie, a także
          o realizowanych przeze mnie projektach. Jeśli jesteś
          zainteresowany/(a) którymś z nich bądź chcesz podjąć współpracę,
          zapraszam Cię do kontaktu poprzez jeden z poniższych odnośników.
        </span>
        <div className='welcome-section__socials'>
          {socials.map((social) => (
            <button className='welcome-section__social-btn'>
              <Link to={{ pathname: social.path }}>
                <SocialIconComponent platform={social.platform} />
                {social.displayedName}
              </Link>
            </button>
          ))}
          <button className='welcome-section__social-btn'>
            <Link to='/contact'>
              <IoDocumentText /> Formularz kontaktowy
            </Link>
          </button>
        </div>
      </div>
      <div className='welcome-section__photo'>
        <img style={{ width: 500 }} src={welcomePhoto} alt='Portfolio' />
      </div>
    </section>
  );
};

export default Welcome;
