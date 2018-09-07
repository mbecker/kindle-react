import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
        <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#top" role="button">Back to top</a>
          </p>
          <p>Kindle Ebooks by Mats Becker 2018</p>
        </div>
      </footer>

      
    );
  }
}



export default Footer