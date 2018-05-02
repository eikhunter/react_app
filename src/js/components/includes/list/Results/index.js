import React from 'react'

import ResultsItem from '../../item/Results/index'

import '../../../../../sass/includes/list/Results/list.scss'

const ResultsLists = (props) => {
  let results = (
    props.data.map((result, index) =>
    <li className="rst-List_Item" key={result.id}>
      <ResultsItem
        id={result.id}
        title={result.title}
        location={result.location}
        description={result.description}
        beds={result.beds}
        bathrooms={result.bathrooms}
        landlord={result.landlord}
        lat={result.lat}
        lng={result.lng}
        add={() => props.add(index)}
        remove={() => props.remove(index)}/>
    </li>
  ))

  return (
    <div className="rst-List">
      <ul className="rst-List_Items">
        {results}
      </ul>
    </div>
  )
}

export default ResultsLists
