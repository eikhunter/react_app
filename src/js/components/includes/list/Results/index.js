import React from 'react'

import ResultItem from '../../../includes/item/Results/index'

import styles from '../../../../../sass/includes/list/Results/list.scss'

const ResultsLists = () => {
  return (
    <div className="rst-List">
      <ul className="rst-List_Items">
        <ResultItem/>
        <ResultItem/>
        <ResultItem/>
      </ul>
    </div>
  )
}

export default ResultsLists
