import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Tabs, Table} from 'antd'
const TabPane = Tabs.TabPane
const {Column} = Table
import {HouseModel, UserModel} from '../utils/dataModel'


export default class UserCenterContent2 extends React.Component {

  constructor() {
    super();
    this.state = {
      rentHouses: [],
      saleHouses: [],
    };
  }

  componentDidMount() {
    let param = {
      userId: UserModel.getUserInfo().userId,
      type: 0
    }
    HouseModel.getBrowsedHouses(param, (response) => {
      if (response.code === 200) {
        this.setState({rentHouses: response.data})
      }
    }, (err) => {
      console.log(err)
    })
    param.type = 1
    HouseModel.getBrowsedHouses(param, (response) => {
      if (response.code === 200) {
        this.setState({saleHouses: response.data})
      }
    }, (err) => {
      console.log(err)
    })
  }

  render() {

  console.log(this.state.rentHouses)
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs style={{padding: 40}}>
              <TabPane tab='我浏览的租房信息' key='1'>
                <Table dataSource={this.state.rentHouses} style={{width: '60%'}}>
                  <Column title="房源名" dataIndex="name" key="name"/>
                  <Column title="浏览次数" dataIndex="count" key="count"/>
                </Table>
              </TabPane>
              <TabPane tab='我浏览的售房信息' key='2'>
                <Table dataSource={this.state.saleHouses} style={{width: '60%'}}>
                  <Column title="房源名" dataIndex="name" key="name"/>
                  <Column title="浏览次数" dataIndex="count" key="count"/>
                </Table>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}
