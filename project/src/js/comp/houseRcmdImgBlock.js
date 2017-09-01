import React from 'react';
import {Card, Carousel, Spin} from 'antd';
import {Link} from 'react-router-dom';
import {HouseModel} from '../utils/dataModel'

export default class HouseRcmdImgBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      houseList: ''
    };
  }

  componentDidMount() {
    HouseModel.getTopHouses(null, (response) => {
      if (response.code === 200) {
        this.setState({houseList: response.data})
      }
    }, (err) => {
      console.log(err)
    })
  }

  render() {
    const styleDiv = {
      width: '33%',
      height: '40%',
      float: 'left',
      padding: 8,
    };
    const styleH3 = {
      overflow: 'hidden',
    };
    const styleImg = {
      height: '100%',
      display: 'block',
      width: '100%',
    }

    const content = (houseItem, index) => (
      <div key={index} style={styleDiv}>
        <Link to={`house-detail/${houseItem.houseId}`} target='_blank' style={{color: '#666'}}>
          <img style={styleImg} src={houseItem.headImg}/>
          <div style={{textAlign: 'center'}}>
            <h3 style={styleH3}>{houseItem.name}</h3>
          </div>
        </Link>
      </div>
    )

    const loading = (<Spin tip="Loading..."/>)

    const houseList = this.state.houseList

    const childList1 = houseList.slice(0, 6).length
      ? houseList.slice(0, 6).map((houseItem, index) => (
        content(houseItem, index)
      ))
      : loading

    const childList2 = houseList.slice(6, 12).length
      ? houseList.slice(6, 12).map((houseItem, index) => (
        content(houseItem, index)
      ))
      : loading

    const allList = []
    allList.push(childList1)
    allList.push(childList2)

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      // effect: 'fade',
    };

    return (
      <Card title="最新房源" style={{marginBottom: 15}}>
        <Carousel {...settings}>
          {allList.map((item, index) =>
            <div key={index}>{item}</div>)}
        </Carousel>
      </Card>
    )
  }
}
