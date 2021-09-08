import { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';

// Components
// import fetchImages from './utils/fetchImage';
import { Searchbar } from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
  };

  getFormName(name) {
    const searchName = name;
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.getFormName}></Searchbar>
        <ImageGallery></ImageGallery>
      </>
    );
  }
}

export default App;
