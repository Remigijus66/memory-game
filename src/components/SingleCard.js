
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addGuess, flipToBack, flipToFront, setTry1, setTry2 } from '../store/generelStore';

const SingleCard = ({ card, arr, index }) => {

  const dispach = useDispatch()
  const try1 = useSelector(state => state.generalStore.try1)
  const try2 = useSelector(state => state.generalStore.try2)

  const cardBack = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzx9lXgWEGlFwVt9RNBKQwHlbRbcU44ScUOQ&usqp=CAU"


  const flip = () => {
    if (card.front === false) {
      dispach(flipToFront(index))
    } else {
      dispach(flipToBack(index))
    }
    console.log(card)
  }

  const match = (card1, card2) => {
    if ((card1.value === card2.value) && ((card1.suit === 'HEARTS' && card2.suit === 'DIAMONDS') || (card1.suit === 'DIAMONDS' && card2.suit === 'HEARTS') || (card1.suit === 'SPADES' && card2.suit === 'CLUBS') || (card1.suit === 'CLUBS' && card2.suit === 'SPADES'))) {
      return true
    } else { return false }
  }

  useEffect((
  ) => {

    if (try2 !== -1 && try1 !== -1) {
      if (match(arr[try1], arr[try2])) {
        // console.log('point')
        dispach(setTry1(-1))
        dispach(setTry2(-1))
      } else {
        // console.log('flip cards back')
        addGuess()
        setTimeout(() => {
          dispach(flipToBack(try1))
          dispach(flipToBack(try2))
          dispach(setTry1(-1))
          dispach(setTry2(-1))
          clearTimeout();
        }, 1000)

      }

    } else {

    }
  }, [try1, try2])

  const guess = () => {
    if (try1 === -1) {
      dispach(setTry1(index))
      dispach(flipToFront(index))
    } else {
      if (try2 === -1)
        dispach(flipToFront(index))
      dispach(setTry2(index))
      dispach(addGuess())
    }

  }


  return (

    <div >

      {card.front && <img className='card' src={card.image} alt="" onClick={flip} />}
      {!card.front && <img className='card' src={cardBack} alt="" onClick={guess} />}

    </div>

  );
};

export default SingleCard