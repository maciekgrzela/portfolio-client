import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Oval } from 'svg-loaders-react';

const LoadingComponent = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTyping(true);
    }, 1000);
  }, []);

  return (
    <div className='loading-page-component'>
      <div className='loading-page-component__icon'>
        <Oval />
      </div>
      <div className='loading-page-component__text'>
        <span>Ładuję{showTyping && ':'} </span>
        {showTyping && (
          <ReactTypingEffect
            speed={100}
            typingDelay={10}
            eraseDelay={1000}
            eraseSpeed={100}
            text={[
              'Projekty',
              'Biogram',
              'Informacje o technologiach',
              'Informacje o osiągnięciach',
              'Informacje o doświadczeniu w pracy',
              'Informacje o umiejętnościach',
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default LoadingComponent;
