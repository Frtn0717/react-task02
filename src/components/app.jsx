import UserDetails from './UserDetails/UserDetails';
import Content from './Content/Content'; 
import style from './app-style.module.scss';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <main className={ style.mainContent }>
      <UserDetails />
      <Content />
      </main>
    );
  }
}

export default App;