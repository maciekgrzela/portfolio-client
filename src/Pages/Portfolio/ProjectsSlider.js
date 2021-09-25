import React from 'react';
import { SiGithub } from 'react-icons/si';
import { Carousel } from 'react-responsive-carousel';

const ProjectsSlider = () => {
  return (
    <Carousel
      className='projects-slider__projects'
      showArrows={true}
      showIndicators={false}
      width='90vw'
    >
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
      <div className='projects-slider__project project-slide'>
        <div className='project-slide__images'>
          <div className='images-slider'>
            <div className='images-slider__images'>
              <Carousel
                className='images-slider__carousel'
                showArrows={true}
                showThumbs={false}
                showIndicators={false}
              >
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github1_dmajdl.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525199/github2_lz6k58.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525200/github3_fhcwve.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github4_fgm0x0.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
                <img
                  src='https://res.cloudinary.com/mountainshop/image/upload/v1630525350/github5_tqvf42.png'
                  className='images-slider__image'
                  alt='Some thing'
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='project-slide__text'>
          <h2 className='project-slide__title'>Tytuł projektu</h2>
          <h5 className='project-slide__subtitle'>
            Projekt realizowany w zespole / samodzielnie
          </h5>
          <div className='project-slide__tags'>Tagi projektu</div>
          <p className='project-slide__description'>
            Eiusmod ad excepteur ea irure labore velit officia dolore excepteur.
            Et irure ex labore id tempor dolor cillum minim eu. Minim fugiat
            officia nisi sit ex mollit consequat ea nulla cupidatat id sint.
          </p>
          <button className='project-slide__repository'>
            <SiGithub /> Przejdź do repozytorium
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default ProjectsSlider;
