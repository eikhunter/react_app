import React from 'react'
import resultsData from '../../../../results/results.json'
import Carousel from 'nuka-carousel';

import Backdrop from '../Backdrop/index'
import ResultsHeader from '../../includes/header/Results/index'
import ResultsList from '../../includes/list/Results/index'
import ResultsSideBar from '../../includes/sidebar/Results/index'
import Footer from '../../includes/footer/Footer/index'

import '../../../../sass/layout/Results/results.scss'
import CloseIcon from '../../../../assets/svg/close.svg'
import Arrow from '../../../../assets/svg/arrow.svg'

class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: resultsData.results,
      favourites: [],
      archived: [],
      showModal: false,
    }
  }

  addPropertyHandler = (propertyIndex) => {
    const newData = resultsData.newResult
    const newResults = this.state.results

    const splicedResult = newResults.splice(propertyIndex, 1)

    this.setState({results: newResults.concat(newData)}, )

    this.setState(
      {favourites: this.state.favourites.concat(splicedResult)},
      () => {}
    )
  }

  removePropertyHandler = (propertyIndex) => {
    const newData = resultsData.newResult
    const newResults = this.state.results

    const splicedResult = newResults.splice(propertyIndex, 1)

    this.setState({results: newResults.concat(newData)})

    this.setState(
      {archived: this.state.archived.concat(splicedResult)},
      () => {}
    )
  }

  modalOpenHandler = () => {
    this.setState({ showModal: true })
    console.log('clicked')
  }

  modalCloseHandler = () => {
    this.setState({ showModal: false })
  }

  render() {
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
                remove={this.removePropertyHandler}
                show={this.modalOpenHandler}/>
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

        <div className="lyt-Results_Modal" style={{
          display: this.state.showModal ? 'flex' : 'none'
        }}>
          <Backdrop
            show={this.state.showModal}
            clicked={this.modalCloseHandler}/>

          <button className="lyt-Results_Close"
                  onClick={this.modalCloseHandler}>
            <CloseIcon/>
          </button>

          <div className="lyt-Results_Inner">
            <div className="lyt-Results_ModalContent">
              <div className="lyt-Results_Modal" style={{
                opacity: this.state.showModal ? '1' : '0'
              }}>
                <Carousel
                  className="rst-Carousel_Items"
                  dragging={false}
                  renderBottomCenterControls={() => {}}
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button
                      className="rst-Carousel_Control rst-Carousel_Control-previous" onClick={previousSlide}>
                      <Arrow/>
                    </button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button
                      className="rst-Carousel_Control rst-Carousel_Control-next" onClick={nextSlide}>
                      <Arrow/>
                    </button>
                  )}>
                  <div className="rst-Carousel_ImageContainer">
                    <img alt="" src={require('../../../../assets/images/property1/image1.jpg')} alt="property" className="rst-Carousel_Image"/>
                  </div>

                  <div className="rst-Carousel_ImageContainer">
                    <img alt="" src={require('../../../../assets/images/property1/image2.jpg')} alt="property" className="rst-Carousel_Image"/>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Results

