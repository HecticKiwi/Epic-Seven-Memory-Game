import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Card from './components/Card';
import s from './styles/App.module.css';

import logo from './images/epic-seven.webp';

export default function App() {
  const initialCards = [{
    name: 'Diene',
    key: uniqid(),
  }, {
    name: 'Charles',
    key: uniqid(),
  }, {
    name: 'Kayron',
    key: uniqid(),
  }, {
    name: 'Krau',
    key: uniqid(),
  }, {
    name: 'Crimson Armin',
    key: uniqid(),
  }, {
    name: 'Challenger Dominiel',
    key: uniqid(),
  }, {
    name: 'Cermia',
    key: uniqid(),
  }, {
    name: 'Lidica',
    key: uniqid(),
  }, {
    name: 'Angelica',
    key: uniqid(),
  }, {
    name: 'Sez',
    key: uniqid(),
  }, {
    name: 'Lots',
    key: uniqid(),
  }, {
    name: 'Tamarinne',
    key: uniqid(),
  }];

  const [cards, setCards] = useState(initialCards);
  const [pickedCards, setCickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  function shuffleCards() {
    setCards((prev) => [...prev].sort(() => Math.random() - 0.5));
  }

  function pickCard(card) {
    if (!pickedCards.includes(card, 0)) {
      setCickedCards((prev) => [...prev, card]);
      setScore((prev) => prev + 1);
    } else {
      setCickedCards([]);
      setScore(0);
    }
  }

  useEffect(() => {
    if (score > best) {
      setBest(score);
    }
    shuffleCards();
  }, [score]);

  return (
    <div className={s.App}>
      <header className={s.header}>
        <img className={s.logo} src={logo} alt="" />
        <h1>Memory Game</h1>
      </header>
      <div className={s.scoreboard}>
        <p className={s.score}>
          Score:
          {' '}
          {score}
        </p>
        <p className={s.best}>
          Best:
          {' '}
          {best}
        </p>
      </div>
      <div className={s.cards}>
        {cards.map((card) => (
          <Card
            onClick={() => pickCard(card)}
            card={card}
            key={card.key}
          />
        ))}
      </div>
      <footer className={s.footer}>
        <p>
          By
          {' '}
          <a className={s.link} href="https://hectickiwi.github.io/" target="__blank">HecticKiwi</a>
        </p>
      </footer>
    </div>
  );
}
