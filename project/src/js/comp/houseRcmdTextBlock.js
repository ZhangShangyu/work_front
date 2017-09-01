import React from 'react'
import {Link} from 'react-router-dom';
import {UserModel, HouseModel} from '../utils/dataModel'

export default class HouseRcmdTextBlock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {houses: []}
  }

  componentDidMount() {
    let userId = UserModel.getUserInfo().userId
    if (!userId) {
      userId = 0
    }
    let param = {userId, type: this.props.type}
    HouseModel.getRcmdHouses(param, (response) => {
      if (response.code === 200) {
        this.handleResponseData(response.data)
      }
    }, (err) => {
      console.log(err)
    })
  }

  handleResponseData = (responseData) => {
    let houses = []
    for (let i in responseData) {
      let data = responseData[i]
      houses.push({
        item: data.name + ':  ' + data.region + ' ' + data.type + ' ' + data.dec,
        id: data.houseId
      })
    }
    this.setState({houses})
  }

  render() {
    const content = this.state.houses.map((houseItem, index) => (
      <div className="productlinks-item item-recommend" key={index} style={{textAlign: 'center'}}>
        <Link to={`house-detail/${houseItem.id}`} target='_blank'>{houseItem.item}</Link>
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
    )
  }
}
