# braintree-dropin-react

React component to integrate Braintree Drop-In UI (V3).
https://developers.braintreepayments.com/guides/drop-in/javascript/v3

### Features
* Wraps the Braintree Drop-In UI V3
* If ```authorizationToken``` or ```locale``` is changed the Drop-In UI will be re-initialized. This is useful if you want to support multiple merchants/locales.

### Props

* braintree - Required, this is braintree-web-drop-in
* authorizationToken - Required, authorization for Drop-In [see in DOC](https://developers.braintreepayments.com/guides/drop-in/javascript/v3#configuration)
* handlePaymentMethod - Required, to retrieve the payment method object
* onCreate - triggered when Drop-In UI is visible
* onError - triggered when error occured
* onDestroyStart - triggered before teardown
* onDestroyEnd - triggered after success teardown
* locale - If you want the re-initialization feature when the locale is changed then don't use in the options prop [see in DOC](https://developers.braintreepayments.com/guides/drop-in/javascript/v3#availability)
* options - Braintree web dropin create options [see in DOC](https://braintree.github.io/braintree-web-drop-in/docs/current/module-braintree-web-drop-in.html#.create)
* submitButtonText - Text of the submit button
* className - CSS class for the outer container (defaults to `braintree-dropin-react`)
* renderSubmitButton - Use a custom component for the submit button. Takes props `onClick`, `isDisabled` and `text`

### Installation

```sh
$ npm install braintree-dropin-react
```

### Example
see /example/clientApp.js

to run
```sh
$ yarn install
$ npm run example
```

### Custom CSS
payment form - [see in DOC](https://developers.braintreepayments.com/guides/drop-in/javascript/v3#custom-css)

component - write your own custom css
```sh
div.braintree-dropin-react
  div.braintree-dropin-react-form
  div.braintree-dropin-react-submit-btn-wrapper
    button
```

#### Styled Components

Compatible with [styled-components](https://github.com/styled-components/styled-components).

```js
const MyBraintreeDropin = styled(BraintreeDropin)`
  padding: 20px;
  .braintree-dropin-react-submit-btn-wrapper {
    padding: 10px;
    background-color: #eee;
  }
`;
```
