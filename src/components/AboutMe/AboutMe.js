import "./AboutMe.css";
import photo from "../../images/photo_2023-12-22_14-37-39.jpg";

function AboutMe() {
  return (
    <article className="about-me">
      <img src={photo} alt="Фотография Евгений" className="about-me__photo" />
      <div className="about-me__description">
        <h3 className="about-me__name">Евгений</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 32&nbsp;года</p>
        <p className="about-me__text">
          Нравится реализовывать понятные для пользователей интерфейсы,
          а&nbsp;также учитывать требования стандартов по&nbsp;семантике. Хочу
          продолжать изучать современные веб-технологии.
        </p>
        <p className="about-me__text">
          Стараюсь постоянно изучать новое. Читаю дополнительные источники,
          регулярные новости фронтенда на&nbsp;Хабре.
        </p>
        <ul className="about-me__link-list">
          <li className="about-me__link-list-item">
            <a href="https://github.com/Newet7" className="about-me__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default AboutMe;
