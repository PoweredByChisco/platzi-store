import React from 'react';
import { mount } from 'enzyme';
/* Mount permite trabajar sobre el elemento y montarlo en el DOM completo para asi testearlo */
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  test('Render of the component Footer', () => {
    const footer = mount(<Footer />);
    expect(footer.lenght).toEqual(1);
  });
});
