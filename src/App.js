import { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Api from './utils/fetchImage';
import { scroll } from './utils/scroll';
import Loader from 'react-loader-spinner';

// Components
import { Searchbar } from './components/Searchbar/Searchbar';
import LoadMoreButton from './components/Button/Button';

class App extends Component {
  state = {
    queryName: '',
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const DEFAULT_PAGE = 1;
    const { queryName, page } = this.state;

    if (prevState.queryName !== queryName) {
      this.setState({ loading: true });
      Api.fetchImages(queryName, DEFAULT_PAGE)
        .then(res => this.setState({ images: res.hits }))
        .finally(() => this.setState({ loading: false }));
    }

    if (prevState.page !== page) {
      if (page !== DEFAULT_PAGE) {
        this.setState({ loading: true });
        Api.fetchImages(queryName, page)
          .then(res => this.setState(prevState => ({ images: [...prevState.images, ...res.hits] })))
          .then(() => this.setState({ loading: false }))
          .finally(scroll);
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
        {this.state.loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.images.length > 0 && <LoadMoreButton onClick={this.clickMoreBtn} />}
      </>
    );
  }
}

export default App;
