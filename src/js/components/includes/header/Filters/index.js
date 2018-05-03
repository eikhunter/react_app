import React from 'react'

import AllFilter from './AllFilter/index'
import PriceFilter from './PriceFilter/index'
import BedsFilter from './BedsFilter/index'
import '../../../../../sass/includes/header/Filters/header.scss'

class HeaderFilters extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allFilter: false,
      priceFilter: false,
      bedFilter: false
    }
  }

  toggleAllFilterHandler = () => {
    this.setState({allFilter: !this.state.allFilter})
    console.log(this.state.allFilter)
  }

  togglePriceFilterHandler = () => {
    this.setState({priceFilter: !this.state.priceFilter})
    console.log(this.state.priceFilter)
  }

  toggleBedFilterHandler = () => {
    this.setState({bedFilter: !this.state.bedFilter})
    console.log(this.state.bedFilter)
  }

  render() {
    return (
      <div className="hd-Filters">
        <ul className="hd-Filters_Items">
          <AllFilter
            clicked={this.toggleAllFilterHandler}
            show={this.state.allFilter}/>
          <PriceFilter
            clicked={this.togglePriceFilterHandler}
            show={this.state.priceFilter}/>
          <BedsFilter
            clicked={this.toggleBedFilterHandler}
            show={this.state.bedFilter}/>
        </ul>
      </div>
    )
  }
}


export default HeaderFilters
