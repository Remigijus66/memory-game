import { get } from '../plugins/http';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeck, setFilter } from '../store/generelStore';
import { useRef } from 'react';
import SingleCard from './SingleCard';

const Cards = () => {
  const levelRef = useRef()

  const [show, setShow] = useState(false)
  const dispach = useDispatch()
  const deck = useSelector(state => state.generalStore.deck)
  const filter = useSelector(state => state.generalStore.filter)
  const guess = useSelector(state => state.generalStore.guess)


  useEffect(async () => {

    const res = await get('/deck/new/draw/?count=52')
    console.log('before', res)
    res.cards.forEach((e) => {
      e.front = false
    });
    console.log('after', res)
    dispach(setDeck(res.cards))

    console.log(deck)


  }, [])


  const getCards = async () => {
    // It is allways same deck. To get another deck change deck ID or use: /deck/new/draw/?count=52
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
    // if (levelRef.current.value === '1') {
    //   dispach(setFilter(['ACE']))
    // }
    // if (levelRef.current.value === '2') {
    //   dispach(setFilter(['ACE', 'KING']))
    // }
    // if (levelRef.current.value === '3') {
    //   dispach(setFilter(['ACE', 'KING', 'QUEEN']))
    // }
    setShow(true)
  }


  return (

    <div style={{ padding: '10px' }}>
      <h2 >Memory game</h2>
      <div>Mach same value of red or black suit  :
        <button onClick={showCards}>Start</button>
      </div>
      {/* <button onClick={getCards}>Get cards</button>
      <input type="number" step="1" placeholder='1'
        min="1" max="3" ref={levelRef} /> */}

      {/* <button onClick={showCards}>Show cards</button> */}


      {show && <h5>Guesses: {guess} </h5>}

      {show &&
        <div className='d-flex f-wrap w-500'>

          {deck.map((x, i, a) => <SingleCard card={x} key={i} arr={a} index={i} />)}
          {/* {deck.filter((x) => filter.includes(x.value)).map((x, i, a) => <SingleCard card={x} key={i} arr={a} index={i} />)} */}


        </div>
      }

    </div >

  );
};
export default Cards

