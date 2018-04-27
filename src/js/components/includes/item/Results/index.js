import React from 'react'

import ResultCarousel from '../../../includes/carousel/Result/index'
import ResultTabs from '../../../includes/tabs/Result/index'
import ResultMeta from '../../../includes/meta/Results/index'

import style from '../../../../../sass/includes/item/Results/item.scss'

class ResultsItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      information:
        { title: 'Stunning 3 bedroom apartment in Stockwell',
          location: 'St Michael\'s Road, Stockwell, SW9',
          description: 'A beautiful modern two bedroom flat in a period house with open plan kitchen and living space with a private garden providing outside space',
          price: '2,450',
          beds: 3,
          bathrooms: 2 },
      metaInformation: {
        landlord: 'Keatons Agency',
      },
    }
  }

  render() {
    return (
      <li className="rst-List_Item">
        <div className="rst-Item">
          <div className="rst-Item_Images">
            <ResultCarousel/>
          </div>

          <div className="rst-Item_Body">
            <ResultTabs
              information={this.state.information}/>
          </div>

          <div className="rst-Item_Meta">
            <ResultMeta metaInformation={this.state.metaInformation}/>
          </div>
        </div>
      </li>
    )
  }
}

export default ResultsItem

