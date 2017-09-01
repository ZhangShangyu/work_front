import React from 'react'
import {Table, Icon} from 'antd'
import {Link} from 'react-router-dom'
import {HouseModel, UserModel} from '../utils/dataModel'
const {Column} = Table

export default class HouseListByMe extends React.Component {

  constructor(props) {
    super(props)
    this.state = {houses: []}
  }

  componentDidMount() {
    this.getHouseByMe()
  }

  getHouseByMe = () => {
    let param = {
      name: UserModel.getUserInfo().username
    }
    HouseModel.getHouseByMe(param, (response) => {
      if (response.code === 200) {
        this.setState({houses: response.data})
      }
    }, (err) => {
      console.log(err)
    })
  }

  editHouse(houseId) {
    console.log(houseId)
  }

  deleteHouse(houseId) {

  }

  render() {
    return (
      <Table dataSource={this.state.houses}>
        <Column title="房源名" dataIndex="name" key="name"/>
        <Column title="门牌位置" dataIndex="position" key="position"/>
        <Column title="创建时间" dataIndex="createTime" key="createTime"/>
        <Column title="联系人" dataIndex="contact" key="contact"/>
        <Column title="联系电话" dataIndex="phone" key="phone"/>
        <Column title="操作" key="action"
                render={(text, record) => (
                  <span>
                    <Link to={`house-detail/${record.houseId}`}>查看</Link>
                    <span className="ant-divider"/>
                    <a onClick={ this.editHouse.bind(this, record.houseId) }>编辑</a>
                    <span className="ant-divider"/>
                    <a onClick={ this.deleteHouse.bind(this, record.houseId) }>删除</a>
                  </span>
                )}/>
      </Table>
    )
  }

}
