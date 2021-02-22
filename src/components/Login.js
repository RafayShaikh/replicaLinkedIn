import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert('Please Enter your Full Name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePicture,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePicture,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className='login'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png'
        alt='LinkedIn Image'
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name (Required when registering)'
        />

        <input
          type='text'
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder='Profile Picture(Optional)'
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='Email'
          placeholder='Email'
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='Password'
          placeholder='Password'
        />

        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{'  '}
        <span className='login_register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
