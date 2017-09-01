import React from 'react'
import {Card, Cascader} from 'antd'
import Constant from '../utils/constant'

export default class ConditionBox extends React.Component {

  initState = () => ({
      regionClickedIndex: 0,
      priceClickedIndex: 0,
      areaClickedIndex: 0,
      typeClickedIndex: 0,
      decClickedIndex: 0,
      regionValue: 0,
      priceValue: 0,
      areaValue: 0,
      typeValue: 0,
      decValue: 0,
      subwayRouteValue: 0,
      subwayStationValue: 0,
    }
  )

  constructor(props) {
    super(props)
    this.state = this.initState()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.needReset) {
      this.setInitState()
    }
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  onConditionClick(value, index, type) {
    switch (type) {
      case 'region':
        this.setState({regionClickedIndex: index, regionValue: value},
          () => this.setSearchCondition())
        break
      case 'price':
        this.setState({priceClickedIndex: index, priceValue: value},
          () => this.setSearchCondition())
        break
      case 'area':
        this.setState({areaClickedIndex: index, areaValue: value},
          () => this.setSearchCondition())
        break;
      case 'type':
        this.setState({typeClickedIndex: index, typeValue: value},
          () => this.setSearchCondition())
        break
      case 'dec':
        this.setState({decClickedIndex: index, decValue: value},
          () => this.setSearchCondition())
        break
      default:
        break
    }
  }

  onSubwaySelected = (value) => {
    this.setState({subwayRouteValue: value[0], subwayStationValue: value[1]},
      () => this.setSearchCondition())
  }

  setSearchCondition = () => {
    let condition = {}
    let {
      regionValue, priceValue, areaValue, typeValue,
      decValue, subwayRouteValue, subwayStationValue
    } = this.state
    regionValue !== 0 ? condition.regionLabel = regionValue : ''
    areaValue !== 0 ? condition.area = areaValue : ''
    priceValue !== 0 ? condition.price = priceValue : ''
    typeValue !== 0 ? condition.typeLabel = typeValue : ''
    decValue !== 0 ? condition.decLabel = decValue : ''
    subwayRouteValue !== 0 && subwayStationValue !== undefined
      ? condition.routeLabel = subwayRouteValue : ''
    subwayStationValue !== 0 && subwayStationValue !== undefined
      ? condition.stationLabel = subwayStationValue : ''
    this.props.setSearchCondition(condition)
  }

  getClickStyle = (index, type) => {
    let colorStyle = {color: 'grey'}
    let state = this.state
    let dict = {
      region: state.regionClickedIndex,
      price: state.priceClickedIndex,
      area: state.areaClickedIndex,
      type: state.typeClickedIndex,
      dec: state.decClickedIndex,
    }
    if (index === dict[type]) {
      colorStyle.color = 'blue'
    }
    return colorStyle
  }

  render() {
    const styles = {
      span: {
        marginRight: 15,
        color: '#999',
        verticalAlign: 'top'
      },
      div: {
        borderBottom: '1px dashed #d8d8d8',
        padding: 10,
      },
      span2: {
        marginRight: 15,
        color: '#999',
      },
    }
    const priceOptions = this.props.searchType === '1'
      ? Constant.SALE_PRICE_OPTIONS : Constant.RENT_PRICE_OPTIONS

    const regionOptions = Constant.REGION_OPTIONS

    const areaOptions = Constant.AREA_OPTIONS

    const typeOptions = Constant.TYPE_OPTIONS

    const decOptions = Constant.DEC_OPTIONS

    const regionList = regionOptions.map((item, index) => (
        <span key={index}
              onClick={this.onConditionClick.bind(this, item.value, index, 'region')}>
          <a style={this.getClickStyle(index, 'region')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const priceList = priceOptions.map((item, index) => (
        <span key={index}
              onClick={this.onConditionClick.bind(this, item.value, index, 'price')}>
          <a style={this.getClickStyle(index, 'price')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const areaList = areaOptions.map((item, index) => (
        <span key={index}
              onClick={this.onConditionClick.bind(this, item.value, index, 'area')}>
          <a style={this.getClickStyle(index, 'area')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const typeList = typeOptions.map((item, index) => (
        <span key={index}
              onClick={this.onConditionClick.bind(this, item.value, index, 'type')}>
          <a style={this.getClickStyle(index, 'type')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const decList = decOptions.map((item, index) => (
        <span key={index}
              onClick={this.onConditionClick.bind(this, item.value, index, 'dec')}>
          <a style={this.getClickStyle(index, 'dec')}>{item.label}</a> &nbsp;&nbsp;
        </span>
      )
    )

    const subwayOptions = Constant.SUBWAY_OPTIONS

    return (
      <Card title="筛选条件">
        <div>
          {/*<div style={styles.div}>*/}
            {/*<span style={styles.span}>区域：</span>*/}
            {/*{regionList}*/}
          {/*</div>*/}
          <div style={styles.div}>
            <span style={styles.span}>售价：</span>
            {priceList}
          </div>
          <div style={styles.div}>
            <span style={styles.span}>面积：</span>
            {areaList}
          </div>
          <div style={styles.div}>
            <span style={styles.span}>户型：</span>
            {typeList}
          </div>
          {/*<div style={styles.div}>*/}
            {/*<span style={styles.span}>装修：</span>*/}
            {/*{decList}*/}
          {/*</div>*/}
          {/*<div style={styles.div}>*/}
            {/*<span style={styles.span2}>地铁：</span>*/}
            {/*<Cascader options={subwayOptions} placeholder="不限" expandTrigger="hover" onChange={this.onSubwaySelected}/>*/}
          {/*</div>*/}
        </div>
      </Card>
    )
  }
}