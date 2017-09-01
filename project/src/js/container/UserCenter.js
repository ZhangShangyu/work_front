import React, {Component} from 'react';
import Header from '../comp/header';
import UserCenterContent from '../comp/userCenterContent'
import UserCenterContent2 from '../comp/userCenterContent2'
import Footer from '../comp/footer'
import {UserModel} from  '../utils/dataModel'

export default class UserCenter extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {

  }

  render() {
    const content = UserModel.getUserInfo().role == 1
      ? ( <UserCenterContent/>) : (<UserCenterContent2/>)

    return (
      <div>
        <Header/>
        {content}
        <Footer/>
      </div>
    );
  }
}

