import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from './Dropdown';

describe('<Dropdown />', () => {
  it('should render as expected', () => {
    const result = shallow(<Dropdown><div>Test</div></Dropdown>);
    expect(result.find('[data-test-id="dropdown"]')).toExist();
    expect(result).toMatchSnapshot();
  });
});
