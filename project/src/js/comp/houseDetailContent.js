import React from 'react'
import {Row, Col, message, Carousel, Card} from 'antd'
import {Map, Marker} from 'react-amap'
import {Link} from 'react-router-dom'
import {HouseModel, UserModel, MapModel} from '../utils/dataModel'
import Constant from '../utils/constant'


export default class HouseDetailContent extends React.Component {

  constructor() {
    super();
    this.state = {
      houseContent: '',
      similarHouses: [],
      location: {
        latitude: '121.501410',
        longitude: '31.282892',
      },
    };
  }

  componentDidMount() {
    this.getHouseDetail(this.addBrowseCount, this.getLonLat)
    this.getSimilarHouses()
  }

  getHouseDetail(addBrowseCount, getLonLat) {
    let param = {
      id: this.props.match.params.id,
    }
    HouseModel.getHouseDetail(param, (response) => {
      if (response.code === 200) {
        this.setState({houseContent: response.data});
        addBrowseCount(response.data.saleType, param.id)
        getLonLat(response.data.address)
      } else {
        message.error("获取房源详情失败")
      }
    }, (err) => {
      console.log(err)
    })
  }

  getSimilarHouses() {
    let param = {
      houseId: this.props.match.params.id,
    }
    HouseModel.getSimilarHouses(param, (response) => {
      if (response.code === 200) {
        this.setState({similarHouses: response.data})
      }
    }, (err) => {
      console.log(err)
    })
  }

  addBrowseCount(saleType, houseId) {
    let userId = UserModel.getUserInfo().userId;
    if (userId) {
      let countParam = {
        userId,
        saleType,
        houseId,
      };
      HouseModel.addBrowseCount(countParam, (response) => {
        // do nothing
      }, (err) => {
        console.log(err)
      })
    }
  }

  getLonLat = (address) => {
    let searchKey = address ? address : '同济大学四平路'
    let param = {
      key: Constant.LON_LAT_KEY,
      address: searchKey,
      city: '上海'
    }
    MapModel.getLatLonByAddress(param, (response) => {
      if (response.status == 1) {
        let geo = response.geocodes[0].location
        console.log('0 ' + geo.split(',')[0])
        let location = {
          longitude: geo.split(',')[0],
          latitude: geo.split(',')[1]
        }
        console.log('loc ' + location)
        this.setState({location})
      }
    }, (err) => {
      console.log(err)
    })
  }

  render() {
    const content = this.state.houseContent
    const imgList = content.imgUrls ? content.imgUrls : []
    const createTime = content.createTime ? content.createTime.substring(0, 10) : ''
    const similarHouses = this.state.similarHouses
    const unit = content.saleType === 1 ? '万元' : '元'
    const type = content.saleType === 1 ? '出售' : '出租'
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
    };

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
    };

    return (
      <div>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <div style={{marginTop: '5%', textAlign: 'center'}}>
              <h1>{content.name}</h1>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={7}></Col>
          <Col span={10}>
            <div style={{marginTop: '5%'}}>
              { (imgList.length !== 0) &&
              (<Carousel {...settings}>
                {imgList.map((item, index) =>
                  <div key={index}>
                    <img src={item} style={{width: '100%', height: '90%'}}></img>
                  </div>)}
              </Carousel>)
              }
            </div>
          </Col>
          <Col span={7}></Col>
        </Row>
        <Row>
          <Col span={7}></Col>
          <Col span={10}>
            <Card title='房源信息'>
              <div style={{float: 'left'}}>
                <span>价格： <strong
                  style={{color: 'red', fontSize: '17px'}}>{content.price}{unit}</strong></span><br/><br/>
                <span>房型： {content.type}</span><br/><br/>
                <span>上架时间： {createTime}</span><br/><br/>
                <span>位置： {content.address}</span><br/><br/>
                <span>地铁线路: {content.route}</span><br/><br/>
                <span>联系人: {content.contact}</span><br/><br/>
              </div>
              <div style={{marginLeft: '50%'}}>
                <span>上架类型： <strong style={{fontSize: '17px'}}>{type}</strong></span><br/><br/>
                <span>面积： {content.area} 平米</span><br/><br/>
                <span>装修： {content.dec}</span><br/><br/>
                <span>楼层： {content.position}</span><br/><br/>
                <span>地铁站： {content.station}</span><br/><br/>
                <span>联系电话: {content.phone}</span><br/><br/>
              </div>
            </Card>
          </Col>
          <Col span={7}></Col>
        </Row>
        <Row>
          <Col span={7}></Col>
          <Col span={10}>
            <Card title='业主描述' style={{}}>
              <div>
                {content.des}
              </div>
            </Card>
          </Col>
          <Col span={7}></Col>
        </Row>
        <Row>
          <Col span={7}></Col>
          <Col span={10}>
            <Card title='地图' style={{}}>
              <div style={{width: '100%', height: 400}}>
                <Map zoom={10} center={this.state.location} amapkey={Constant.MAP_KEY}>
                  <Marker position={this.state.location}/>
                </Map>
              </div>
            </Card>
          </Col>
          <Col span={7}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <div style={{marginTop: '5%'}}>
              { (similarHouses.length > 0) &&
              (<Card title="相似房源推荐">
                {similarHouses.map((houseItem, index) =>
                  <div key={index} style={styleDiv}>
                    <Link to={`house-detail/${houseItem.houseId}`} target='_blank' style={{color: '#666'}}>
                      <img style={styleImg} src={houseItem.headImg}/>
                      <div style={{textAlign: 'center'}}>
                        <h3 style={styleH3}>{houseItem.name}</h3>
                      </div>
                    </Link>
                  </div>)}
              </Card>)
              }
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </div>
    )
  }
}