import { get } from '../plugins/http';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeck, setFilter, setFilteredDeck } from '../store/generelStore';
// import { useRef } from 'react';
import SingleCard from './SingleCard';


import LevelsRadio from './Radio';

const Cards = () => {
  const [show, setShow] = useState(false)
  const dispach = useDispatch()
  const deck = useSelector(state => state.generalStore.deck)
  const filteredDeck = useSelector(state => state.generalStore.filteredDeck)
  const filter = useSelector(state => state.generalStore.filter)
  const guess = useSelector(state => state.generalStore.guess)


  useEffect(async () => {

    const res = await get('/deck/new/draw/?count=52')
    res.cards.forEach((e) => {
      e.front = false
    });
    dispach(setDeck(res.cards))
    dispach(setFilteredDeck(res.cards))
  }, [])

  useEffect(() => {
    dispach(setFilteredDeck(deck.filter((x) => filter.includes(x.value))))
  }, [filter]

  )


  const getCards = async () => {
    const res = await get('/deck/new/draw/?count=52')
    console.log('before', res)
    res.cards.forEach((e) => {
      e.front = false
    });
    console.log('after', res)
    dispach(setDeck(res.cards))

    console.log(deck)
  }

  const showCards = () => {
    setShow(true)
  }

  return (

    <div style={{ padding: '10px' }}>
      <h2 >Memory game</h2>
      <LevelsRadio />
      <button onClick={showCards}>Start</button>

      {show && <h5>Guesses: {guess} </h5>}

      {show &&
        <div className='d-flex f-wrap w-500'>
          {filteredDeck.map((x, i, a) => <SingleCard card={x} key={i} arr={a} index={i} />)}
        </div>
      }

    </div >

  );
};
export default Cards

