const initialState = {
  players: 6,
  spies:2,
  addedPlaces:[]
};

function settingsReducer(state = initialState, action) {
  switch(action.type) {
    case "players/inc":
      return ({
        ...state,
        players: state.players + 1 >= 17 ? state.players : state.players + 1
      })
    case "players/dec": 
      return ({
        ...state,
        players: (state.players - 1 < state.spies || state.players - 1 <= 0) ? state.players : state.players - 1
      })
    case "spies/inc": 
      return ({
        ...state,
        spies: state.spies + 1 > state.players ? state.spies : state.spies + 1
      })
    case "spies/dec": 
      return ({
        ...state,
        spies: state.spies - 1 <= 0 ? state.spies : state.spies - 1 
      })
    case "addedPlaces/remove": 
      return ({
        ...state,
        addedPlaces: [...state.addedPlaces.slice(0, action.payload), ...state.addedPlaces.slice(action.payload + 1)]
      })
    case "addedPlaces/add": 
      return ({
        ...state,
        addedPlaces: [...state.addedPlaces, action.payload]
      })
  }
  return state;
}

export default settingsReducer;
