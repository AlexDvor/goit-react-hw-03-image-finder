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
    const DEFAULT_PAGE = 1;
    const { queryName, page } = this.state;

    if (prevState.queryName !== queryName) {
      Api.fetchImages(queryName, DEFAULT_PAGE).then(res => this.setState({ images: res.hits }));
    }

    if (prevState.page !== page) {
      if (page !== DEFAULT_PAGE) {
        Api.fetchImages(queryName, page).then(res =>
          this.setState(prevState => ({ images: [...prevState.images, ...res.hits] })),
        );
      }
    }

    if (prevState.queryName !== queryName) {
      this.resetPage();
    }
  }

  getQueryValue = name => {
    this.setState({
      queryName: name,
    });
  };

  // incrementPage() {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // }

  resetPage() {
    this.setState({
      images: [],
      page: 1,
    });
  }

  clickMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    // console.log('render:', this.state.images);

    return (
      <>
        <Searchbar onSubmit={this.getQueryValue}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
        {this.state.images.length > 0 && <LoadMoreButton onClick={this.clickMoreBtn} />}
      </>
    );
  }
}

export default App;
