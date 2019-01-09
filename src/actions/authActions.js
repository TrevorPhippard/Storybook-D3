export const signIn = (credentials) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }

export const signOut = () => (dispatch, getState, {getFirebase}) => {
    getFirebase()
    .auth()
    .signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }


export const signUp = (newUser) =>  (dispatch, getState, {getFirebase, getFirestore}) => {

    getFirebase().auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
      return getFirestore()
      .collection('users')
      .doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
