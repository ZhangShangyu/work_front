import React from 'react';
import {Row, Col} from 'antd';
import ConditionBox from  './conditionBox'
import HouseImgBlock from './houseImgBlock'
import SearchBox from './searchBox'


export default class HouseContent extends React.Component {

  initState = () => ({
      searchCondition: {},
      searchKey: "",
      needResetCondition: false
    }
  )

  constructor(props) {
    super(props)
    this.state = {
      searchCondition: {saleType: this.props.searchType},
      searchKey: "",
      needResetCondition: false,
      searchType: this.props.searchType,
    }
  }

  setSearchCondition = (condition) => {
    this.setState({searchCondition: condition, needResetCondition: false})
  }

  setSearchKey = (value) => {
    this.setState({searchKey: value, needResetCondition: true})
  }

  render() {
    return (
      <div>
        {/*<Row>*/}
          {/*<Col span={8}></Col>*/}
          {/*<Col span={8} style={{marginTop: 25}}>*/}
            {/*<SearchBox setSearchKey={this.setSearchKey}/>*/}
          {/*</Col>*/}
          {/*<Col span={8}></Col>*/}
        {/*</Row>*/}
        <Row>
          <Col span={5}></Col>
          <Col span={14} style={{marginTop: 25}}>
            <ConditionBox setSearchCondition={this.setSearchCondition}
                          needReset={this.state.needResetCondition}
                          searchType={this.state.searchType}/>
          </Col>
          <Col span={5}></Col>
        </Row>
        <Row>
          <Col span={5}></Col>
          <Col span={14} style={{marginTop: 25}}>
            <HouseImgBlock searchCondition={this.state.searchCondition}
                           searchKey={this.state.searchKey}
                           searchType={this.state.searchType}/>
          </Col>
          <Col span={5}></Col>
        </Row>
      </div>
    )
  }
}
