import React from 'react'
import {
  Button, Row, Col, Input, Icon,
  Radio, Cascader, Modal, message, Checkbox
} from 'antd'
import {UserModel, HouseModel} from '../utils/dataModel'
import MyUpload from '../comp/myUpload'
import Constant from '../utils/constant'
const RadioGroup = Radio.Group

export default class HouseEditor extends React.Component {
  initState = () => ({
      saleType: 0,
      recommend: 0,
      uploadImgUrls: [],
      name: '',
      address: '',
      position: '',
      price: '',
      area: '',
      contact: '',
      phone: '',
      des: '',
      region: '',
      type: '',
      dec: '',
      subwayRoute: '',
      subwayStation: '',
    }
  )

  constructor(props) {
    super(props)
    this.state = this.initState()
  }

  setUploadImgUrls = (url) => {
    let imgUrls = this.state.uploadImgUrls
    imgUrls.push(url)
    this.setState({uploadImgUrls: imgUrls})
  }

  submitUploadHouse = () => {
    if (this.checkParam()) {
      let param = this.wrapParam()
      HouseModel.saveHouse(param, (response) => {
        if (response.code === 200) {
          message.success("上传成功")
          this.closeUploadHouse()
        }
      }, (err) => {
        console.log(err)
      })
    }
  }

  checkParam = () => {
    let state = this.state
    if (state.name === '' || state.position === ''
      || state.price === '' || state.area === ''
      || state.contact === '' || state.phone === ''
      || state.des === '' || state.region === ''
      || state.type === '' || state.type === '') {
      message.error("请填写完整")
      return false
    }
    return true
  }

  wrapParam = () => {
    let state = this.state
    let route = state.subwayRoute === undefined ? '' : state.subwayRoute
    let station = state.subwayStation === undefined ? '' : state.subwayStation
    let param = {
      saleType: state.saleType,
      recommend: state.recommend,
      name: state.name,
      address: state.address,
      position: state.position,
      price: state.price,
      area: state.area,
      contact: state.contact,
      phone: state.phone,
      des: state.des,
      cityId: 1,
      creatorName: UserModel.getUserInfo().username,
      imgUrls: state.uploadImgUrls,
      region: state.region,
      type: state.type,
      dec: state.dec,
      route,
      station,
    }
    return param
  }

  closeUploadHouse = () => {
    this.setInitState()
    this.props.closeUploadHouse()
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  onSaleTypeSelected = (e) => {
    this.setState({saleType: e.target.value})
  }

  onRcmdChecked = (e) => {
    let rcmd = e.target.checked ? 1 : 0
    this.setState({recommend: rcmd})
  }

  onHouseNameInput = (e) => {
    this.setState({name: e.target.value})
  }

  onHouseAddressInput = (e) => {
    this.setState({address: e.target.value})
  }

  onHouseDoorInput = (e) => {
    this.setState({position: e.target.value})
  }

  onPriceInput = (e) => {
    this.setState({price: e.target.value})
  }

  onAreaInput = (e) => {
    this.setState({area: e.target.value})
  }

  onContactInput = (e) => {
    this.setState({contact: e.target.value})
  }

  onPhoneInput = (e) => {
    this.setState({phone: e.target.value})
  }

  onDesInput = (e) => {
    this.setState({des: e.target.value})
  }

  onHouseNameInput = (e) => {
    this.setState({name: e.target.value})
  }

  onRegionChecked = (e) => {
    this.setState({region: e.target.value})
  }

  onTypeChecked = (e) => {
    this.setState({type: e.target.value})
  }

  onDecorationChecked = (e) => {
    this.setState({dec: e.target.value})
  }

  onSubwaySelected = (value) => {
    let subwayStation = value[1] === 0 ? '' : value[1]
    this.setState({subwayRoute: value[0], subwayStation})
  }

  render() {
    const styles = {
      paddingNum: {
        padding: 20,
      },
      marginNum: {
        marginLeft: '10%'
      }
    }
    const saleTypeOptions = Constant.SALE_TYPE_OPTIONS

    const regionOptions = Constant.REGION_OPTIONS.slice(1)

    const typeOptions = Constant.TYPE_OPTIONS.slice(1)

    const decOptions = Constant.DEC_OPTIONS.slice(1)

    const subwayOptions = Constant.SUBWAY_OPTIONS

    return (
      <div>
        <Row>
          <div>
            <Icon type="right" style={styles.paddingNum}/>上架类型 &nbsp;&nbsp;
            <RadioGroup options={saleTypeOptions} onChange={this.onSaleTypeSelected}/>
            &nbsp;&nbsp;<Checkbox onChange={this.onRcmdChecked}>设置推荐</Checkbox>
          </div>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>房源小区 &nbsp;&nbsp;
          <Input placeholder="请输入房源小区" onChange={this.onHouseNameInput} style={{width: '50%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>房源地址 &nbsp;&nbsp;
          <Input placeholder="请输入房源地址" onChange={this.onHouseAddressInput} style={{width: '50%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>门牌信息 &nbsp;&nbsp;
          <Input placeholder="请输入门牌信息" onChange={this.onHouseDoorInput} style={{width: '50%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>价格 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Input placeholder="请输入价格" onChange={this.onPriceInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>面积 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Input placeholder="请输入面积(平方米)" onChange={this.onAreaInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>联系人姓名 &nbsp;&nbsp;
          <Input placeholder="请输入联系人姓名" onChange={this.onContactInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>联系人电话 &nbsp;&nbsp;
          <Input placeholder="请输入联系人电话" onChange={this.onPhoneInput} style={{width: '20%'}}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>房源简介 &nbsp;&nbsp;
          <Input type="textarea" placeholder="请输入房源简介" autosize={{minRows: 2, maxRows: 6}}
                 style={{width: '50%'}} onChange={this.onDesInput}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>区域 &nbsp;&nbsp;
          <div style={styles.marginNum}>
            <RadioGroup options={regionOptions} onChange={this.onRegionChecked}/>
          </div>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>户型
          <div style={styles.marginNum}>
            <RadioGroup options={typeOptions} onChange={this.onTypeChecked}/>
          </div>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>装修
          <div style={styles.marginNum}>
            <RadioGroup options={decOptions} onChange={this.onDecorationChecked}/>
          </div>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>地铁 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Cascader options={subwayOptions} expandTrigger="hover" onChange={this.onSubwaySelected}/>
        </Row>
        <Row>
          <Icon type="right" style={styles.paddingNum}/>上传展示图片
          <div style={styles.marginNum}>
            <MyUpload setUploadImgUrls={this.setUploadImgUrls}/>
          </div>
        </Row>
        <Row>
          <div style={styles.paddingNum}>
            <Button type="dashed" onClick={this.submitUploadHouse}>提交</Button>&nbsp;&nbsp;&nbsp;
            <Button type="dashed" onClick={this.closeUploadHouse}>取消</Button>
          </div>
        </Row>
      </div>
    )
  }
}
