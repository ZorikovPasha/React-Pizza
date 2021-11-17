const setSortBy = (type) => {
  return {
    type: 'SET_SORT_BY',
    payload: type  
  }
}

const setCategory = (catIndex) => {
  return {
    type: 'SET_CATEGORY',
    payload: catIndex  
  }
}