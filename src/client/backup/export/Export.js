import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Container from '../../common/container/Container'
import Messages from '../../common/messages/Messages'
import LocallyContainer from './locally/LocallyContainer'
import GitHubContainer from './github/GitHubContainer'
import Tabs from '../../common/tabs/Tabs'

class Export extends Component {
  render() {
    return (
      <Container title='export'>
        <Tabs titles={['locally', 'GitHub']}>
          <LocallyContainer configuration={this.props.configuration}/>
          <GitHubContainer configuration={this.props.configuration}/>
        </Tabs>
        <Messages type='error' messages={this.props.errors}/>
        <Messages type='info' messages={this.props.infos}/>
      </Container>
    )
  }
}

Export.propTypes = {
  configuration: PropTypes.string,
  loaded: PropTypes.bool,
  infos: PropTypes.arrayOf(PropTypes.string),
  errors: PropTypes.arrayOf(PropTypes.string)
}

export default Export
