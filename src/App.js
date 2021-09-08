import { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Api from './utils/fetchImage';

// Components
// import fetchImages from './utils/fetchImage';
import { Searchbar } from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    queryName: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryName !== this.state.queryName) {
      // console.log('Api.fetchImages(this.state.queryName):', Api.fetchImages(this.state.queryName));

      Api.fetchImages(this.state.queryName, this.state.page).then(res =>
        this.setState({ images: res.hits }),
      );
    }
  }

  getQueryValue = name => {
    this.setState({
      queryName: name,
    });
  };

  render() {
    console.log('render:', this.state.images);
    return (
      <>
        <Searchbar onSubmit={this.getQueryValue}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
      </>
    );
  }
}

export default App;
