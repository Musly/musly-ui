import React from 'react';
import { shallow } from 'enzyme';
import { DropdownMenu } from './DropdownMenu';

describe('<DropdownMenu />', () => {
  it('should render with default positioning', () => {
    const result = shallow(<DropdownMenu><div>Test</div></DropdownMenu>);
    expect(result.find('[data-test-id="dropdown-menu"]').hasClass('dropdown__menu--top')).toBe(true);
    expect(result).toMatchSnapshot();
  });

  it('should render with custom positioning', () => {
    const result = shallow(<DropdownMenu position="bottom-full"><div>Test</div></DropdownMenu>);
    expect(result.find('[data-test-id="dropdown-menu"]').hasClass('dropdown__menu--top')).toBe(false);
    expect(result.find('[data-test-id="dropdown-menu"]').hasClass('bottom-full')).toBe(true);
    expect(result).toMatchSnapshot();
  });
});
