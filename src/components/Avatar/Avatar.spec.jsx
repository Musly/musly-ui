import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  it('should render the Avatar with offline badge', () => {
    const result = shallow(<Avatar email="test@test.de" />);
    expect(result.find('img').props().alt).toEqual('test@test.de');
    expect(result.find('[data-test-id="badge"]').hasClass('badge--offline')).toBe(true);
    expect(result.find('[data-test-id="badge"]').hasClass('badge--online')).toBe(false);
    expect(result).toMatchSnapshot();
  });

  it('should render the Avatar with online badge', () => {
    const result = shallow(<Avatar email="test@test.de" title="John Doe" online />);
    expect(result.find('img').props().alt).toEqual('John Doe');
    expect(result.find('[data-test-id="badge"]').hasClass('badge--offline')).toBe(false);
    expect(result.find('[data-test-id="badge"]').hasClass('badge--online')).toBe(true);
    expect(result).toMatchSnapshot();
  });
});
