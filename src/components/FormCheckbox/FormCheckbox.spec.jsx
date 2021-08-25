import React from 'react';
import { shallow } from 'enzyme';
import { FormCheckbox } from './FormCheckbox';

describe('<FormCheckbox />', () => {
  it('should render without label', () => {
    const onChange = jest.fn();
    const result = shallow(<FormCheckbox onChange={onChange} value="some" />);
    expect(result.find('.checkbox__input')).toExist();
    expect(result.find('.checkbox__label')).not.toExist();
    result.find('.checkbox__input').simulate('change');
    expect(onChange).toHaveBeenCalled();
    expect(result).toMatchSnapshot();
  });

  it('should rener with label', () => {
    const result = shallow(<FormCheckbox label="test label" value="some" />);
    expect(result.find('.checkbox__input')).toExist();
    expect(result.find('.checkbox__label')).toExist();
    expect(result.find('.checkbox__label').text()).toEqual('test label');
    expect(result).toMatchSnapshot();
  });
});
