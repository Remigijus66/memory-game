import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "../store/generelStore";


function LevelsRadio() {
  const [lvl, setLvl] = useState("4");
  const [player, setPlayer] = useState("1");
  const dispach = useDispatch()

  function onChangeValue(event) {
    setLvl(event.target.value);
    // console.log(event.target.value);
    if (event.target.value === '1') {
      dispach(setFilter(['ACE', 'KING', 'QUEEN']))
    }
    if (event.target.value === '2') {
      dispach(setFilter(['ACE', 'KING', 'QUEEN', 'JACK', '10', '9']))
    }
    if (event.target.value === '3') {
      dispach(setFilter(['ACE', 'KING', 'QUEEN', 'JACK', '10', '9', '8', '7', '6']))
    }
    if (event.target.value === '4') {
      dispach(setFilter(['ACE', 'KING', 'QUEEN', 'JACK', '10', '9', '8', '7', '6', '5', '4', '3', '2']))
    }
  }
  const onChangePlayers = (event) => {
    setPlayer(event.target.value);
    console.log('number of players ', event.target.value);
  }

  return (
    <div onChange={onChangeValue}> Levels:
      <input type="radio" value="1" name="level" checked={lvl === "1"} onChange={onChangeValue} /> 1
      <input type="radio" value="2" name="level" checked={lvl === "2"} onChange={onChangeValue} /> 2
      <input type="radio" value="3" name="level" checked={lvl === "3"} onChange={onChangeValue} /> 3
      <input type="radio" value="4" name="level" checked={lvl === "4"} onChange={onChangeValue} /> 4
      Players:
      <input type="radio" value="1" name="players" checked={player === "1"} onChange={onChangePlayers} /> 1
      <input type="radio" value="2" name="players" checked={player === "2"} onChange={onChangePlayers} /> 2
    </div>

  );
}

export default LevelsRadio;