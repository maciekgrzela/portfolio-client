import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';
import { ReactComponent as Soccer } from '../../Assets/Images/soccer.svg';
import { ReactComponent as Desktop } from '../../Assets/Images/desktop.svg';
import { ReactComponent as Vinyl } from '../../Assets/Images/vinyl.svg';

const About = () => {
  return (
    <section className='portfolio-page__section about-section'>
      <SectionsHeader
        title='Kilka słów o mnie'
        subtitle='Kim jestem i czym się zajmuje'
      />
      <article className='about-section__content'>
        <p>
          Witam Cię bardzo serdecznie. Nazywam się Maciej Grzela i jestem
          studentem studiów magisterskich Politechniki Wrocławskiej na kierunku
          Informatyka. Wspomniana dziedzina nauki, towarzyszy mi od bardzo
          wczesnych lat życia, kiedy to na swoim pierwszym komputerze z nakładką
          Norton Commander na Windowsa 3.11, z uporem maniaka przeglądałem
          wszystkie możliwe foldery i uruchamiałem wszystkie możliwe programy
          systemu operacyjnego. Dziecięca fascynacja wydawania (czasem nie do
          końca mądrych ;) poleceń komputerowi, a także poznawania coraz to
          kolejnych nowinek technologicznych, zaowocowała w przyszłości decyzją
          o wyborze gimnazjum oraz technikum informatycznego. Szkoły te,
          pozwoliły mi dowiedzieć się naprawdę wiele o tym, jak komputer wygląda
          i działa "od podszewki", a także wprowadziły mnie w świat
          programowania. Po zakończeniu technikum postanowiłem opuścić moje
          rodzinne Kielce, aby rozwijać się dalej we Wrocławiu na politechnice.
          W przedstawionej historii, brakuje jednak kilku faktów, gdyż jak
          wiadomo, nie samą informatyką człowiek żyje. W chwilach wolnego czasu,
          w ramach odskoczni od świata linijek kodu, bardzo chętnie zagłębiam
          się rockowe i alternatywne lata 70'te, 80'te i 90'te, słuchając płyt
          vinylowych, które kolekcjonuję. Ponadto, jestem także wielkim
          sportowym fanem bordowo-granatowych, czyli Blaugrany.
        </p>
        <div className='about-section__icons'>
          <Soccer />
          <Desktop />
          <Vinyl />
        </div>
      </article>
    </section>
  );
};

export default About;
