import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';

const Achievements = () => {
  return (
    <section className='portfolio-page__section achievements-section'>
      <SectionsHeader title='Osiągnięcia' subtitle='Naukowe i informatyczne' />
      <article className='achievements-section__content'>
        <ul>
          <li>
            <span>2018 / 2019 / 2020</span> Uzyskanie stypendiów rektora
            Politechniki Wrocławskiej
          </li>
          <li>
            <span>2017</span> Nagroda dla najlepszego ucznia technikum nr. 7 w
            Kielcach (Zespół Szkół Informatycznych)
          </li>
          <li>
            <span>2015</span> Uzyskanie certyfikatu Cisco CCNA 200-120
          </li>
          <li>
            <span>2014 / 2015 / 2016</span> Uzyskanie stypendiów Prezesa Rady
            Ministrów za wyniki w nauce
          </li>
          <li>
            <span>2014</span> Uzyskanie certyfikatu ECDL Core
          </li>
          <li>
            <span>2013</span> Nagroda dla najlepszego ucznia gimnazjum nr. 25 w
            Kielcach
          </li>
          <li>
            <span>2013</span> Uzyskanie tytułu laureata gimnazjalnej olimpiady
            informatycznej
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Achievements;
