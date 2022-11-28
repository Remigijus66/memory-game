import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: 'generalStore',
  initialState: {

    deck: [],
    filteredDeck: [],
    filter: ['ACE', 'KING', 'QUEEN'],
    front: false,
    try1: -1,
    try2: -1,
    guess: 0,
  },

  reducers: {

    setDeck: (state, action) => {
      state.deck = action.payload
    },
    setFilteredDeck: (state, action) => {
      state.filteredDeck = action.payload
    },
    flipToFront: (state, action) => {
      state.filteredDeck[action.payload].front = true

    },
    flipToBack: (state, action) => {
      state.filteredDeck[action.payload].front = false
    },

    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setTry1: (state, action) => {
      state.try1 = action.payload
    },
    setTry2: (state, action) => {
      state.try2 = action.payload
    },
    addGuess: (state) => {
      console.log('add guess')
      state.guess++
    }

  }

})

export const { setDeck, setFilteredDeck, setFilter, setFront, flipToFront, flipToBack, setTry1, setTry2, addGuess } = generalSlice.actions

export default generalSlice.reducer