import React from 'react'
import {Table, Icon} from 'antd'
import {Link} from 'react-router-dom'
import {NewsModel, UserModel} from '../utils/dataModel'
const {Column} = Table

export default class NewsListByMe extends React.Component {

  constructor(props) {
    super(props)
    this.state = {news: []}
  }

  componentDidMount() {
    this.getNewsByMe()
  }

  getNewsByMe = () => {
    let param = {
      name: UserModel.getUserInfo().username
    }
    NewsModel.getNewsByMe(param, (response) => {
      if (response.code === 200) {
        this.setState({news: response.data})
      }
    }, (err) => {
      console.log(err)
    })
  }


  editNews(newsId) {
    console.log(newsId)
  }

  render() {
    return (
      <Table dataSource={this.state.news}>
        <Column title="楼讯" dataIndex="title" key="title"/>
        <Column title="创建时间" dataIndex="createTime" key="createTime"/>
        <Column title="操作" key="action"
                render={(text, record) => (
                  <span>
                     <Link to={`news-detail/${record.id}`}>查看</Link>
                    <span className="ant-divider"/>
                    <a onClick={ this.editNews.bind(this, record.id) }>编辑</a>
                    <span className="ant-divider"/>
                    <a>删除</a>
                  </span>
                )}/>
      </Table>
    )
  }

}
