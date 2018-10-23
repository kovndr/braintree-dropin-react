import React from 'react'
import ReactDOM from 'react-dom'
import braintree from 'braintree-web-drop-in'
import PropTypes from 'prop-types'
import BraintreeDropin from '../index'

const renderSubmitButton = ({onClick, isDisabled, text}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
    >{text}</button>
  )
}

renderSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

class ExampleComponent extends React.Component {
  handlePaymentMethod = (payload) => {
    console.log('payload', payload)
  }

  onCreate = (instance) => {
    console.log('onCreate')
  }

  onDestroyStart = () => {
    console.log('onDestroyStart')
  }

  onDestroyEnd = () => {
    console.log('onDestroyEnd')
  }

  onError = (error) => {
    console.log('onError', error)
  }

  render () {
    const token = 'AUTHORIZATION_TOKEN'
    return (
      <div>
        <BraintreeDropin
          braintree={braintree}
          options={{
            locale: 'en_US',
            vaultManager: false
          }}
          authorizationToken={token}
          handlePaymentMethod={this.handlePaymentMethod}
          onCreate={this.onCreate}
          onDestroyStart={this.onDestroyStart}
          onDestroyEnd={this.onDestroyEnd}
          onError={this.onError}
          renderSubmitButton={renderSubmitButton}
        />
      </div>
    )
  }
}

ReactDOM.render(<ExampleComponent />, document.getElementById('app'))
