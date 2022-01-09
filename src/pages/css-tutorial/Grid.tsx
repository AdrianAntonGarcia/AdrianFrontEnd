import React from 'react';
import './grid.scss';
export const Grid = () => {
  return (
    <div className="container">
      <header>
        <h1 className="header-title">CSS Grid - grid-template-areas</h1>
      </header>

      <div className="hero">
        <h1 className="hero-title">Grid areas</h1>
        <p className="hero-subtitle">Making life easier</p>
      </div>

      <main>
        <h1>From the blog</h1>
        <div className="card">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/gridarea-card-img-01.jpg"
            alt=""
            className="card-img"
          />
          <h2 className="card-title">Blog post title</h2>
          <div className="card-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              posuere semper urna, ut pellentesque sem fermentum vel. Mauris
              luctus quis lectus nec luctus. Donec ut diam et neque eleifend
              varius sed quis erat.
            </p>
            <a href="">Read more</a>
          </div>
        </div>
        {/* <div className="card">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/gridarea-card-img-01.jpg"
            alt=""
            className="card-img"
          />
          <h2 className="card-title">Blog post title</h2>
          <div className="card-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              posuere semper urna, ut pellentesque sem fermentum vel. Mauris
              luctus quis lectus nec luctus. Donec ut diam et neque eleifend
              varius sed quis erat.
            </p>
            <a href="">Read more</a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/gridarea-card-img-01.jpg"
            alt=""
            className="card-img"
          />
          <h2 className="card-title">Blog post title</h2>
          <div className="card-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              posuere semper urna, ut pellentesque sem fermentum vel. Mauris
              luctus quis lectus nec luctus. Donec ut diam et neque eleifend
              varius sed quis erat.
            </p>
            <a href="">Read more</a>
          </div>
        </div> */}
      </main>

      <aside>
        <h1>Sidebar stuff</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          posuere semper urna, ut pellentesque sem fermentum vel. Mauris luctus
          quis lectus nec luctus. Donec ut diam et neque eleifend varius sed
          quis erat. In tempor pharetra felis at fermentum. Maecenas iaculis
          neque orci, sit amet sodales quam venenatis sit amet. Praesent eu enim
          nec velit bibendum accumsan a sed tellus. Aenean sed justo a tortor
          hendrerit imperdiet efficitur nec risus. Morbi gravida mi quis
          ultrices elementum. Pellentesque fermentum sodales sagittis. Sed vel
          efficitur nisl. Ut congue sodales sapien. Duis ultricies felis nunc,
          eu semper est tincidunt eu. Curabitur faucibus luctus eros, eget
          semper mauris dictum vel.
        </p>
      </aside>

      <footer>
        <h1 className="footer-title">the end</h1>
      </footer>
    </div>
  );
};
