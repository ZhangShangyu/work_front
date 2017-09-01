import React from 'react'
import {
  Row, Col, Icon, Modal, message, Checkbox,
  Tabs, Upload, Button, Input
} from 'antd'
import HouseEditor from './houseEditor'
import HouseListByMe from './houseListByMe'
import NewsListByMe from './newsListByMe'

import Constant from '../utils/constant'
import {UserModel, NewsModel} from '../utils/dataModel'

import MyEditor from './myEditor'


const TabPane = Tabs.TabPane;

export default class UserCenterContent extends React.Component {

  initState = () => ({
      showUploadNews: false,
      previewImage: '',
      previewVisible: false,
      fileList: [],
      title: '',
      titlePic: '',
      newsAbstract: '',
      content: '',
      recommend: 0,
      showUploadHouse: false,
    }
  )

  constructor() {
    super()
    this.state = this.initState()
  }

  componentDidMount() {

  }

  showUploadNews() {
    this.setState({showUploadNews: true, showUploadHouse: false})
  }

  showUploadHouse = () => {
    this.setState({showUploadHouse: true, showUploadNews: false})
  }

  closeUploadNews() {
    this.setInitState()
  }

  closeUploadHouse = () => {
    this.setState({showUploadHouse: false})
  }

  setInitState = () => {
    this.setState(this.initState())
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  }

  handleCancel = () => this.setState({previewVisible: false});

  handleChange = ({fileList, file}) => {
    if (file.status === 'done') {
      if (file.response.code === 200) {
        this.setState({titlePic: file.response.data})
      } else {
        message.error("图片上传失败")
      }
    }
    this.setState({fileList: fileList})
  }

  submitUploadNews = () => {
    if (this.checkParam()) {
      let {title, titlePic, newsAbstract, content, recommend} = this.state
      let param = {
        title,
        titlePic,
        newsAbstract,
        content,
        recommend,
        creatorName: UserModel.getUserInfo().username,
      }
      NewsModel.saveNews(param, (response) => {
        if (response.code === 200) {
          message.success("上传成功")
          this.setInitState()
        } else {
          message.error("上传失败")
        }
      }, (err) => {
        console.log(err)
      })
    }
  }

  checkParam = () => {
    if (UserModel.getUserInfo() === '') {
      message.error("请先登录")
      return false
    }
    const state = this.state
    if (state.title === '' || state.titlePic === ''
      || state.newsAbstract === '' || state.content === '') {
      message.error("请完成必填项")
      return false
    }
    return true
  }

  onRcmdChecked = (e) => {
    let rcmd = e.target.checked ? 1 : 0
    this.setState({recommend: rcmd})
  }

  onTitleInput = (e) => {
    this.setState({title: e.target.value})
  }

  onAbstractInput = (e) => {
    this.setState({newsAbstract: e.target.value})
  }

  setHtmlContent = (content) => {
    this.setState({content})
  }

  render() {
    const styles = {
      paddingNum: {
        padding: 10,
      },
    }

    const uploadProps = {
      action: Constant.NEWS_PIC_UPLOAD_API,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      listType: 'picture-card'
    };

    const uploadButton = (
      <div>
        <Icon type='plus'/>
        <div className='ant-upload-text'>上传图片</div>
      </div>
    )

    const listRow = (
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Tabs style={{padding: 40}}>
            <TabPane tab='我发布的房源' key='1'>
              <HouseListByMe/>
            </TabPane>
            <TabPane tab='我发布的楼讯' key='2'>
              <NewsListByMe/>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={2}></Col>
      </Row>
    )

    const houseEditorRow = (
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <HouseEditor closeUploadHouse={this.closeUploadHouse}/>
        </Col>
        <Col span={6}></Col>
      </Row>
    )

    const newsEditorRow = (
      <div style={{marginTop: '3%'}}>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <Icon type="right" style={styles.paddingNum}/>
            &nbsp;&nbsp;<Checkbox onChange={this.onRcmdChecked}>设置推荐</Checkbox>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <Icon type="right" style={styles.paddingNum}/>标题:
            <Input placeholder="请输入标题" onChange={this.onTitleInput}/>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <Icon type="right" style={styles.paddingNum}/>摘要:
            <Input type="textarea" placeholder="请输入摘要" autosize={{minRows: 2, maxRows: 6}}
                   onChange={this.onAbstractInput}/>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <Icon type="right" style={styles.paddingNum}/>上传展示图片
            <div className='clearfix'>
              <Upload
                {...uploadProps}
                fileList={this.state.fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}>
                {this.state.fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal
                visible={this.state.previewVisible}
                footer={null}
                onCancel={this.handleCancel}>
                <img alt='预览' width='100%' src={this.state.previewImage}/>
              </Modal>
            </div>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={13}>
            <div style={{marginTop: 10}}>
              <MyEditor setHtmlContent={this.setHtmlContent}/>
            </div>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <div style={styles.paddingNum}>
              <Button type="dashed" onClick={this.submitUploadNews}>提交</Button>&nbsp;&nbsp;&nbsp;
              <Button type="dashed" onClick={this.closeUploadNews.bind(this)}>取消</Button>
            </div>
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
    )

    let contentRow = this.state.showUploadNews ? newsEditorRow : listRow
    contentRow = this.state.showUploadHouse ? houseEditorRow : contentRow

    return (
      <div>
        <Row>
          <Col span={4}></Col>
          <Col span={20} style={{marginTop: '3%'}}>
            { !this.state.showUploadNews &&
            <Button type="dashed" style={{fontWeight: 'bold', color: 'blue'}}
                    onClick={this.showUploadNews.bind(this)}>上传楼讯</Button>
            }
          </Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={20} style={{marginTop: '1%'}}>
            { !this.state.showUploadHouse &&
            <Button type="dashed" style={{fontWeight: 'bold', color: 'blue'}}
                    onClick={this.showUploadHouse}>上传房源</Button>
            }
          </Col>
        </Row>
        {contentRow}
      </div>
    )
  }
}
