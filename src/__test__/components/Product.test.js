/* eslint-disable comma-dangle */
import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Reder of the component Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('Check buy button', () => {
    const handleAddToCart = jest.fn(); /* Con jest.fn podemos utilizar una funcion en cuestion del mismo componente sin usar la funcion real */
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click'); /* Va a simular una funcion u evento */
    expect(handleAddToCart).toHaveBeenCalledTimes(1); /* La funcion toHaveBeenCalledTimes sirve para confirmar que solo se hayan ejecutado un numero definido de veces */
  });
});
