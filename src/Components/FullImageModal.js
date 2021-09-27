import React, { useEffect, useState } from 'react';

const FullImageModal = ({ image }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (image) {
      setOpen(true);
    }
  }, [image]);

  return (
    <>
      {open && (
        <div className='full-image-modal'>
          <img
            onClick={() => setOpen(false)}
            className='full-image-modal__image'
            src={image}
            alt='Kliknij aby zamknąć widok pełnoekranowy'
          />
        </div>
      )}
    </>
  );
};

export default FullImageModal;
