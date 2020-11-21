export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      helpers: []
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

export const addHelper = (id, project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const name = getState().firebase.profile.firstName + " " + getState().firebase.profile.lastName;
    const email = getState().firebase.auth.email;
    let actualHelpers = getState().firestore.data.projects[id].helpers;
    const addUser = {email: email, name: name}
    let updatedHelpers = [...actualHelpers, addUser];
    firestore.collection('projects').doc(id).update({
      helpers: updatedHelpers
    }).then(() => {
      dispatch({ type: 'ADD_HELPER_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ADD_HELPER_ERROR' }, err);
    });
  }
};

export const completeProject = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.delete({ collection: 'projects', doc:`${id}` 
    }).then(() => {
      dispatch({ type: 'COMPLETE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'COMPLETE_PROJECT_ERROR' }, err);
    });
  }
};