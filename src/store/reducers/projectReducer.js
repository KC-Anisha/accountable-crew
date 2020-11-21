const initState = {
    projects: [
      {id: '1', title: 'Look at me', content: 'I am Mr. Meeseeks'},
      {id: '2', title: 'Waba laba dub dub', content: 'blah blah blah'},
      {id: '3', title: 'Time to get shwifty', content: 'blah blah blah'}
    ]
  }
  
  const projectReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PROJECT_SUCCESS':
        console.log('create project success');
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error');
        return state;
      case 'ADD_HELPER_SUCCESS':
        console.log('add helper success');
        return state;
      case 'ADD_HELPER_ERROR':
        console.log('add helper error');
        return state;
      default:
        return state;
    }
  };
  
  export default projectReducer;