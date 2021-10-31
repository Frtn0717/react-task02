import Avatar from './Avatar/Avatar';
import UserInfo from './UserInfo/UserInfo';
import style from './user-details-styles.module.scss';
import React from 'react';


class UserDetails extends React.Component {
  state = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };

  render() {
    return (
      <section className={ style.details }>
      <Avatar />
      <UserInfo user={ this.state } />
      </section>
    );
  }
}

export default UserDetails;