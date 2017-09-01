import React, { Component } from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer'
import HouseDetailContent from '../comp/houseDetailContent'

class NewsDetail extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HouseDetailContent match={this.props.match}/>
        <Footer/>
      </div>
    );
  }
}

export default NewsDetail;
