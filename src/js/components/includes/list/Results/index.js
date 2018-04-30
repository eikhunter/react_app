import React from 'react'
import resultsData from '../../../../../results/results.json'

import ResultItem from '../../../includes/item/Results/index'

import styles from '../../../../../sass/includes/list/Results/list.scss'
import ResultsItem from '../../item/Results/index'

class ResultsLists extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: resultsData
    }
  }

  render() {
    const results = this.state.results.results.map((result) =>
      <li className="rst-List_Item">
        <ResultsItem
          key={result.id}
          title={result.title}
          location={result.location}
          description={result.description}
          beds={result.beds}
          bathrooms={result.bathrooms}
          landlord={result.landlord}
          lat={result.lat}
          lng={result.lng}/>
      </li>
    );

    return (
      <div className="rst-List">
        <ul className="rst-List_Items">
          {results}
        </ul>
      </div>
    )
  }
}

export default ResultsLists
