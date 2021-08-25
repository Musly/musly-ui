import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render as expected', () => {
    const result = shallow(<Header />);
    expect(result.find('Search')).toExist();
    expect(result.find('UserMenu')).toExist();
    expect(result).toMatchSnapshot();
  });
});
