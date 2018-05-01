import React from 'react'
import resultsData from '../../../../results/results.json'

import ResultsHeader from '../../includes/header/Results/index'
import ResultsList from '../../includes/list/Results/index'
import ResultsSideBar from '../../includes/sidebar/Results/index'
import Footer from '../../includes/footer/Footer/index'

import '../../../../sass/layout/Results/results.scss'

class Results extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      results: resultsData,
      favourites: [],
      archived: [],
    }
  }

  addPropertyHandler = (propertyIndex) => {
    const results = this.state.results
    results.results.splice(propertyIndex, 1)
    this.setState({results: results})
    console.log(this.state.results)
  }

  removePropertyHandler = () => {

  }

  render() {
    console.log(this.state.results)

    return (
      <div className="lyt-Results">
        <ResultsHeader
          clicked={this.props.clicked}/>
        <div className="lyt-Results_Inner">
          <div className="lyt-Results_Body">
            <main className="lyt-Results_Main">
              <ResultsList
                data={this.state.results}
                add={this.addPropertyHandler}
                remove={this.removePropertyHandler}/>
            </main>

            <aside className="lyt-Results_Aside">
              <ResultsSideBar
                add={this.addPropertyHandler}
                remove={this.removePropertyHandler}
                favourites={this.state.favourites}
                archived={this.state.archived}/>
            </aside>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Results

