const initialState= 
{
  spells:[],
  currentUser: "",
  userSpells: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state
      }

    case "GET_ALL_SPELLS_SUCCESS":
      return {...state,
      spells: action.spells
      }

    case "SET_CURRENT_USER":
      return { ...state,
          currentUser: action.user,
      }  

    case "GET_USER_SPELLS_SUCCESS":
      let bookSpells = action.user.spells.map(s => {
        s.added = "true"
        return s
      }) 
      return { ...state,
       userSpells: bookSpells} 

    case "ADDED_TO_BOOK":
      let newArray = [...state.spells];
      let userSpells = [...state.userSpells]

      newArray.forEach( s => {
        s.added="false"
        userSpells.map(spell => {
          if(s.id === spell.id) {
            s.added="true";
          }
          return s
        })
      })

      default:
        return state


    }
}