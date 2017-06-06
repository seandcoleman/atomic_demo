import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {Grid} from 'semantic-ui-react'
import './Footer.scss'

export default class Footer extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <footer>
          <div className="footer-inner">
              <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <span>Thank you for being Atomic</span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </footer>
    )
  }
}
