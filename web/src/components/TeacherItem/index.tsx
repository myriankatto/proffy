import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/56876888?s=460&u=87fdfe4e603f612174de33a9cabd4234cca09969&v=4"
          alt="Myrian Katto"
        />
        <div>
          <strong>Myrian Katto</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
        <br />
        Et, iure quas? Porro nulla officiis non repellat doloribus pariatur, inventore vel.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
