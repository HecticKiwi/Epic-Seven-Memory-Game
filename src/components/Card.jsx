import React from 'react';
import s from '../styles/Card.module.css';

export default function Card(props) {
  const { card, onClick } = props;
  const { name } = card;

  return (
    <button className={s.Card} type="button" onClick={onClick}>
      <img className={s.image} src={require(`../images/${name}.png`)} alt="" />
      <p className={s.name}>{name}</p>
    </button>
  );
}
