/* eslint-disable */
import 'babel-polyfill'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import braintree from 'braintree-web-drop-in'
import BraintreeDropin from '../dist'

describe('<BraintreeDropin />', () => {
  it('should render', () => {
    const component = shallow(<BraintreeDropin braintree={braintree} authorizationToken='client_token' handlePaymentMethod={() => {}} submitButtonText='TEXT' />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  });

  it('should have a submit button', function () {
    const component = shallow(<BraintreeDropin braintree={braintree} authorizationToken='client_token' handlePaymentMethod={() => {}} submitButtonText='TEXT' />)
    expect(component.find('button')).toHaveLength(1);
  })

  it('should render with custom button text', function () {
    const component = mount(<BraintreeDropin braintree={braintree} authorizationToken='client_token' handlePaymentMethod={() => {}} submitButtonText='TEXT' />)
    expect(component.prop('submitButtonText')).toEqual('TEXT');
  })
})
