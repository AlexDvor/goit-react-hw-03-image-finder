import { Component } from 'react';

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
      </>
    );
  }
}

export default App;
