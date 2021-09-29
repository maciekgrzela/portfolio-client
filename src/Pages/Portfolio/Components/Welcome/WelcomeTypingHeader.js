import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const colors = ['#afdb2f', '#f4e274', '#3a92bb', '#a11f2d', '#ad7db6'];

const WelcomeTypingHeader = () => {
  return (
    <div className='welcome-section__typing-header'>
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
        cursorRenderer={(cursor) => (
          <h1 className='welcome-section__typing-cursor'>{cursor}</h1>
        )}
        displayTextRenderer={(text, index) => {
          return (
            <h1>
              {text.split('').map((char) => (
                <span
                  className='welcome-section__typing-char'
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
  );
};

export default WelcomeTypingHeader;
