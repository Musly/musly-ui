import React from 'react';
import { shallow } from 'enzyme';
import HomeIcon from '../../../icons/home.svg';
import { DropdownItem } from './DropdownItem';

describe('<DropdownItem />', () => {
  it('should render without icon', () => {
    const result = shallow(<DropdownItem url="/test" label="Test Label" />);
    expect(result.find('a').props().href).toEqual('/test');
    expect(result.find('[data-test-id="icon"]')).not.toExist();
    expect(result.find('[data-test-id="label"]').props().children).toEqual('Test Label');
    expect(result).toMatchSnapshot();
  });

  it('should render with icon', () => {
    const result = shallow(<DropdownItem url="/test" label="Test Label" icon={<HomeIcon />} />);
    expect(result.find('[data-test-id="icon"]')).toExist();
    expect(result).toMatchSnapshot();
  });
});
