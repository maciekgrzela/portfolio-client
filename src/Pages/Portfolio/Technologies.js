import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';

const Technologies = () => {
  return (
    <section
      id='technologies'
      className='portfolio-page__section technologies-section'
    >
      <SectionsHeader
        title='Wykorzystywane technologie'
        subtitle='W czym do tej pory pracowałem i w czym lubię pracować'
      />
      <article className='technologies-section__content'>
        <p>
          Rozpoczynając swoją przygodę z programowaniem, pierwszą technologią z
          jaką miałem styczność, był język strukturalny Pascal. Z dzisiejszej
          perspektywy, uważam że był to naprawdę dobry wybór gdyż pozwolił mi on
          w przyjazny sposób poznać podstawowe koncepty programowania, a także
          proste algorytmy. Po roku nauki tego języka, zacząłem programować w
          C++. Przejście pomiędzy tymi technologiami, okazało się relatywnie
          łatwe, a sam język dostarczył możliwości nauczenia się trochę bardziej
          zaawansowanych konceptów związanych np. z alokacją pamięci, czy też
          programowaniem obiektowym. Tworzenie programów konsolowych, sprawia że
          człowiek potrafi się wiele nauczyć, jednakże na dłuższą metę,
          programom takim brak aspektu praktycznego. Dlatego też,
          zainteresowałem się programowaniem webowym. Początkowo,
          wykorzystywanymi przeze mnie technologiami były języki PHP i SQL do
          tworzenia warstwy serwerowej, oraz zestaw HTML/JS(jQuery)/CSS do
          budowy warstwy klienckiej. Następnie, na skutek zarówno szkolnych jak
          i uczelnianych praktyk, zmieniłem moje podejście do web developmentu i
          zacząłem wykorzystywać takie technologie jak .NET, NodeJS, czy React.
        </p>
        <p>
          Poza rozwojem aplikacji webowych, dzięki studiom miałem okazję poznać
          całą gamę technologii programistycznych, począwszy od języków
          assemblera czy języków opisu sprzętu, kończąc na języku Python, oraz
          jego zastosowaniach w ramach uczenia maszynowego.
        </p>
        <div className='technologies-section__lists'>
          <div className='technologies-section__list technologies-list'>
            <ol className='technologies-list__items'>
              <li>C# .NET (.NET 5 / .NET Core 3)</li>
              <li>NodeJS</li>
              <li>PHP</li>
            </ol>
            <span className='technologies-list__title'>
              Aplikacje webowe serwerowe
            </span>
          </div>
          <div className='technologies-section__list technologies-list'>
            <ol className='technologies-list__items'>
              <li>React / JSX / HTML / (S)CSS / JS</li>
              <li>HTML / JS (jQuery) / (S)CSS</li>
              <li>HTML / JS / (S)CSS </li>
            </ol>
            <span className='technologies-list__title'>
              Aplikacji webowe klienckie
            </span>
          </div>
          <div className='technologies-section__list technologies-list'>
            <ol className='technologies-list__items'>
              <li>C# WPF</li>
              <li>C++ Qt 5</li>
              <li>Java Swing/AWT</li>
            </ol>
            <span className='technologies-list__title'>
              Aplikacje desktopowe
            </span>
          </div>
          <div className='technologies-section__list technologies-list'>
            <ol className='technologies-list__items'>
              <li>Java / Android Studio</li>
              <li>React Native</li>
            </ol>
            <span className='technologies-list__title'>Aplikacje mobilne</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Technologies;
