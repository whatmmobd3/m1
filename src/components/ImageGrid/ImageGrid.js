import React from "react";
import { connect } from "react-redux";

import "./styles.css";
import { loadImages } from "../../actions/";

import Button from "../Button/Button";
class App extends React.Component {
  componentDidMount() {
    this.props.loadImages();
  }
  render() {
    const { images, isLoading, loadImages } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map((e) => (
            <div
              key={e.id}
              className={`item item-${Math.ceil(e.height / e.width)}`}
            >
              <img src={e.urls.small} alt={e.user.username} />
            </div>
          ))}
        </section>
        <Button onClick={() => !isLoading && loadImages()} loading={false}>
          Load More
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images }) => ({
  isLoading,
  images,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
