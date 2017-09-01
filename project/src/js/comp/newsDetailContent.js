import React from 'react';
import {Row, Col, message} from 'antd';
import {NewsModel} from '../utils/dataModel'

export default class NewsDetailContent extends React.Component {

  constructor() {
    super();
    this.state = {
      news:{
        content: '',
        title: '',
      }
    };
  }

  componentDidMount() {
    let param = {
      id: this.props.match.params.id,
    }
    NewsModel.getNewsDetail(param, (response) => {
      if (response.code === 200) {
        this.setState({ news: response.data })
      } else {
        message.error("获取新闻详情失败")
      }
    }, (err) => {
      console.log(err)
    })

  }

  createMarkup() {
    return this.state.news.content;
  }

  render() {

    return (
      <div>
       <Row>
        <Col span={4}></Col>
        <Col span={16}>
         <div style={{textAlign: 'center',marginTop: '10%'}}>
              <h1>{this.state.news.title}</h1>
         </div>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
         <div style={{ marginTop: '2%', marginLeft: '20%', marginRight: '20%',whiteSpace:'pre-wrap'}}
              dangerouslySetInnerHTML={{
              __html: this.createMarkup()
            }}>
         </div>

        </Col>
        <Col span={4}></Col>
      </Row>
      </div>
    )
  }
}
