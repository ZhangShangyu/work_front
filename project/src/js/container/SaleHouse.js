import React, { Component } from 'react';
import Header from '../comp/header';
import HouseContent from '../comp/houseContent'
import Footer from '../comp/footer'

export default class SaleHouse extends Component {
  render() {
    return (
      <div>
        <Header selected={'sale'}/>
        <HouseContent searchType="1"/>
        <Footer/>
      </div>
    );
  }
}

