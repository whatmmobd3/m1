import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
class App extends React.Component {
  render() {
    return (
      <div className="content">
          <section className="grid">
              
          </section>
        <Button loading={false}>Load More</Button>
      </div>
    );
  }
}

const mapStateToProps = ({ images }) => ({
  images,
});

export default connect(mapStateToProps, null)(App);
