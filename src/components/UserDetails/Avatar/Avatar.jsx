import React from 'react';
import avatar from './assets/ava.jpeg';
import style from './avatar-styles.module.scss';

class Avatar extends React.Component {
  render() {
    return (
      <figure className={ style.avatarWrap }>
        <img src={ avatar } alt="User's avatar" className={ style.avatar } />
      </figure> 
    );
  };
};

export default Avatar;