/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
/* Mount permite trabajar sobre el elemento y montarlo en el DOM completo para asi testearlo */
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('Render of the component Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Title render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  }); /* Verifica si el texto de esta clase es el de Platzi Store */
});

describe('Footer Snapshot', () => {
  test('Comprobate UI from the component Footer', () => {
    const footer = create(
      <Footer />
    ); /* Como footer no esta conectado con Redux no require el provider */
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
