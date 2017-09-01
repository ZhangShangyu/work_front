import React, { Component } from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer'
import NewsDetailContent from '../comp/newsDetailContent'

class NewsDetail extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NewsDetailContent match={this.props.match}/>
        <Footer/>
      </div>
    );
  }
}

export default NewsDetail;
