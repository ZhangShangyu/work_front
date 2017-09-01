import React from 'react'
import ReactDOM from 'react-dom'
import Home from './js/container/Home'
import House from './js/container/House'
import SaleHouse from './js/container/SaleHouse'
import UserCenter from './js/container/UserCenter'
import NewsDetail from './js/container/NewsDetail'
import HouseDetail from './js/container/HouseDetail'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import './css/pc.css'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={House}/>
            {/*<Route path="/usercenter" component={UserCenter}/>*/}
            {/*<Route path="/house" component={House}/>*/}
            {/*<Route path="/sale-house" component={SaleHouse}/>*/}
            {/*<Route path="/news-detail/:id" component={NewsDetail}/>*/}
            {/*<Route path="/house-detail/:id" component={HouseDetail}/>*/}
          </div>
        </Router>
      </div>
    );
  };
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
