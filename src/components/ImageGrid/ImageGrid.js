import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    console.log(this.props.images);
    return <p>Image Grid</p>;
  }
}

const mapStateToProps = ({ images }) => ({
  images,
});

export default connect(mapStateToProps, null)(App);
