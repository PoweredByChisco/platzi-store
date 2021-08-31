/* eslint-disable comma-dangle */
import React from 'react';
import {
  mount,
  shallow,
} from 'enzyme'; /* shallow permite traer elementos y probarlos como una unidad, ya que solo se necesita algo particular del componente y no toda la estructura y sus elementos del DOM*/
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render of the component Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });
  test('Title render', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
