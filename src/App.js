import { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Api from './utils/fetchImage';

// Components
import { Searchbar } from './components/Searchbar/Searchbar';
import LoadMoreButton from './components/Button/Button';

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
        {this.state.images.length > 0 && <LoadMoreButton />}
      </>
    );
  }
}

export default App;
