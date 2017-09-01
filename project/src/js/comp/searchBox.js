import React from 'react';
import {Input, Icon, Button} from 'antd';
const Search = Input.Search;

export default class SearchBox extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      searchKey: "",
    }
  }

  onSearchInput = (e) => {
    this.setState({ searchKey: e.target.value })
  }

  onBtnClick = () => {
    this.props.setSearchKey(this.state.searchKey)
  }

  onSearch = (value) => {
    this.props.setSearchKey(value)
  }

  render() {
    return (
      <div>
        <Button type="dashed" style={{ fontWeight: 'bold',color: 'blue' }} onClick={this.onBtnClick}>
          搜索
        </Button>
        &nbsp;&nbsp;
        <Search size="large" placeholder="input search text" style={{ width: 300}}
                onChange={this.onSearchInput}
                onSearch={value => this.onSearch(value)} />
      </div>
    )
  }
}
