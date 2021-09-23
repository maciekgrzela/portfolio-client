import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const colors = ['#afdb2f', '#f4e274', '#3a92bb', '#a11f2d', '#ad7db6'];

const Welcome = () => {
  return (
    <section className='portfolio-page__welcome welcome-section'>
      <div className='welcome-section__typing'>
        <div>
          <span className='mr-1'>Witaj:</span>
          <ReactTypingEffect
            text={[
              'Programisto!',
              "HR'owcu!",
              'Web Developerze!',
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
          Bardzo miło mi że tu jesteś! W poniższych sekcjach znajdziesz
          informacje o mnie oraz realizowanych przeze mnie projektach.
        </span>
      </div>
    </section>
  );
};

export default Welcome;
