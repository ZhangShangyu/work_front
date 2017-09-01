import React from 'react';
import {Link} from 'react-router-dom';
import {NewsModel} from '../utils/dataModel'

export default class TopRcmdTextBlock extends React.Component {

  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    NewsModel.getRcmdNews(null, (response) => {
      if (response.code === 200) {
        this.setState({news: response.data})
      }
    }, (err) => {
      console.log(err)
    })
  }

  render() {
    const content = this.state.news.map((newsItem, index) => (
      <div className="productlinks-item item-recommend" key={index} style={{textAlign: 'center'}}>
        <Link to={`news-detail/${newsItem.id}`} target='_blank'>{newsItem.title}</Link>
      </div>))

    return (
      <div className="area-sub" style={{overflow: 'visible'}}>
        <div id="layout-product" className="m-box ui-style-gradient mb12">
          <div id="js_changeView" className="box-bd clearfix" data-module-name="n_product">
            <div className="productlinks clearfix" style={{overflow: 'visible'}}>
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
