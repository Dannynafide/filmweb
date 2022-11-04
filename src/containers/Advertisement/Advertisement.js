import './advertisement.scss';

export default function Advertisement() {
  return (
    <section className="advertisement">
      <a href="/">
        <img
          src="https://fwcdn.pl/prt/a1/canal/072022/wspolpraca/menu/1024x250.jpg"
          className="advertisement__img"
          alt="advertisement"
        />
        <div className="advertisement__btn">
          Oglądaj seriale i filmy online. Odwiedź sekcję{' '}
          <span className="secondString">Canal+</span>
        </div>
      </a>
    </section>
  );
}
