import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';

const Abilities = () => {
  return (
    <section className='portfolio-page__section abilities-section'>
      <SectionsHeader
        title='Umiejętności'
        subtitle='Zarówno te związane, jak i niezwiązane z IT'
      />
      <p>Tutaj sekcja o umiejętnościach</p>
    </section>
  );
};

export default Abilities;
