export const fetchSpellsSuccess = spells => {
  return {
    type: "GET_ALL_SPELLS_SUCCESS",
    spells
  };
};

export const getAllSpells = () => {
  return dispatch => {
    dispatch({type: 'LOADING'})

    return (
      fetch("https://api.open5e.com/spells/?limit=400", {
        credentials: "include"
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
      .then(r => r.json())
      .then(spells => {
        dispatch(fetchSpellsSuccess(spells));
      
      })

      .catch(error => {
        console.log("Error: ", error);
      })

    );

  };
};
