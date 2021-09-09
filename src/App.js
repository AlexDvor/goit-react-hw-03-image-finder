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
    const { queryName, page } = this.state;
    if (prevState.queryName !== queryName) {
      Api.fetchImages(queryName, page).then(res => this.setState({ images: res.hits }));
    }

    if (prevState.page !== page) {
      Api.fetchImages(queryName, page).then(res =>
        this.setState(prevState => ({ images: [...prevState.images, ...res.hits] })),
      );
    }
  }

  // this.setState((prevState) => ({
  //           contacts: [newData, ...prevState.contacts],

  getQueryValue = name => {
    this.setState({
      queryName: name,
    });
  };

  incrementPage() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  resetPage() {
    this.setState({
      name: 1,
    });
  }

  clickMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

    console.log(this.state.page);
  };

  render() {
    console.log('render:', this.state.images);
    return (
      <>
        <Searchbar onSubmit={this.getQueryValue}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
        {this.state.images.length > 0 && <LoadMoreButton click={this.clickMoreBtn} />}
      </>
    );
  }
}

export default App;
