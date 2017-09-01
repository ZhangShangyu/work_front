import React, { Component } from 'react'
import { BackTop } from 'antd'
import Header from '../comp/header'
import HomeContent from '../comp/homeContent'
import Footer from '../comp/footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header selected={'home'}/>
        <HomeContent/>
        <Footer/>
        <BackTop/>
      </div>
    );
  }
}

export default Home;
