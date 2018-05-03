import React from 'react'
import { NavLink } from "react-router-dom"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete"

import SearchIcon from '../../../../../assets/svg/search.svg'
import '../../../../../sass/includes/search/Home/search.scss'

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <div className="hm-Search">
        <h1 className="hm-Search_Title">
          <span className="hm-Search_Title-alternative">AI powered</span> property renting.</h1>
        <form method="post" action="/results">
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div className="hm-Search_Container">
                <input
                  {...getInputProps({
                    placeholder: 'e.g. London, SW9, SW9 9JF',
                    className: 'hm-Search_Input'
                  })}
                />
                <div className="hm-Search_Dropdown">
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item'
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { className, style })}>
                        <span>{suggestion.description}</span>
                      </div>
                    )
                  })}
                </div>
                <NavLink to="/results" className="hm-Search_Submit" onClick={this.props.updateProgress}>
                  <SearchIcon/>
                </NavLink>
              </div>
            )}
          </PlacesAutocomplete>
        </form>
      </div>
    )
  }
}

export default HomeSearch
