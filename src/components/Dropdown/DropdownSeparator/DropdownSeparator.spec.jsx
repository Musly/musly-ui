import React from 'react';
import { shallow } from 'enzyme';
import { DropdownSeparator } from './DropdownSeparator';

describe('<DropdownSeparator />', () => {
  it('should render as expected', () => {
    const result = shallow(<DropdownSeparator />);
    expect(result).toMatchSnapshot();
  });
});
