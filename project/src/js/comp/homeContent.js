import React from 'react'
import {Row, Col, Tabs} from 'antd'
import HouseRcmdImgBlock from './houseRcmdImgBlock'
import HouseRcmdTextBlock from './houseRcmdTextBlock'
import TopNewsBox from './topNewsBox'
import NewsImgBlock from './newsImgBlock'


const TabPane = Tabs.TabPane

export default class HomeContent extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={8}></Col>
          <Col span={8} style={{marginTop: '3%'}}>
          </Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={6}>
            <div style={{padding:'10%'}}>
              <Tabs className='tabs_product'>
                <TabPane tab='买房推荐' key='1'>
                  <HouseRcmdTextBlock type="1"/>
                </TabPane>
              </Tabs>
            </div>
          </Col>
          <Col span={12} className='container'>
            <div>
              <HouseRcmdImgBlock/>
            </div>
          </Col>
          <Col span={6}>
            <div style={{padding:'10%'}}>
              <Tabs className='tabs_product'>
                <TabPane tab='租房推荐' key='1'>
                  <HouseRcmdTextBlock type="0"/>
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={13} style={{paddingTop: '5%'}}>
            <div style={{width: '100%', float: 'left'}}>
              <NewsImgBlock/>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={3} style={{paddingTop: '5%'}}>
            <Tabs className='tabs_product'>
              <TabPane tab='置顶楼讯' key='1'>
                <TopNewsBox/>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}