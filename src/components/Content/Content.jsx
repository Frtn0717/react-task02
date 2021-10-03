import style from './content-style.module.scss';
import React from 'react';


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: []};
  }

  componentDidMount() {
    const urlAlbums = 'https://jsonplaceholder.typicode.com/albums';
    
    try {
      const response = fetch(urlAlbums);

      response.then((res) => { return res.json() })
        .then((data) => this.setState({ albums: data }));   
    } catch (error) {
      throw new Error('Something went wrong...')
    }

  
  }

  render() {
    return (
      <div className={ style.main } >
        <h3> Albums </h3>

        {this.state.albums.map(album => {
         return <li key={ album.id }>

         { album.title }
         
         </li>
        })}

      </div>
  )};
};

export default Content;