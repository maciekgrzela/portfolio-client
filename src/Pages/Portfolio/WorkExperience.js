import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';

const WorkExperience = () => {
  return (
    <section
      id='work-experience'
      className='portfolio-page__section work-experience-section'
    >
      <SectionsHeader
        title='Doświadczenie w pracy'
        subtitle='Dla kogo pisałem kod'
      />
      <article className='work-experience-section__content'>
        <ul>
          <li>
            <span>07-2021 - 08-2021</span> Praca wakacyjna w oddziale Kieleckim
            firmy Merida Sp. z o.o. na stanowisku biurowo-magazynowym
          </li>
          <li>
            <span>03-2020 - 07-2020</span> Praktyki zawodowe studenckie w firmie
            PGS Software przy tworzeniu oprogramowania "Internal Auction System"
          </li>
          <li>
            <span>07-2020 - 08-2020</span> Praktyki zawodowe studenckie w
            oddziale kieleckim firmy Merida Sp. z o.o. przy tworzeniu
            oprogramowania "Manager Faktur"
          </li>
          <li>
            <span>03-2016 - 04-2016</span> Praktyki zawodowe szkolne w firmie
            zonda.media na stanowisku Intern Back-end Developer
          </li>
        </ul>
      </article>
    </section>
  );
};

export default WorkExperience;
