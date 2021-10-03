import style from './user-info-styles.module.scss';
import React from 'react';

class UserInfo extends React.Component {

  render() {
    const user = this.props.user;
    return (
      <article className={ style.info }>
        <h3> { user.name } </h3>
        <p> Email: { user.email } </p>
        <p> Phone: { user.phone } </p>
        <p> Address: { user.address.street }, 
                     { user.address.suite }, 
                     { user.address.city }, 
                     { user.address.zipcode } </p>
        <p> Website: { user.website }</p>
      </article>
    );
  };
  
};

export default UserInfo;