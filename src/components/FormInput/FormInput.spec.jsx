import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from './FormInput';

describe('<FormInput />', () => {
  it('should render without label and error', () => {
    const onChange = jest.fn();
    const result = shallow(<FormInput value="" onChange={onChange} />);
    expect(result.find('.input__input')).toExist();
    expect(result.find('.input__label')).not.toExist();
    expect(result.find('.input__error')).not.toExist();
    result.find('.input__input').simulate('change');
    expect(onChange).toHaveBeenCalled();
    expect(result).toMatchSnapshot();
  });

  it('should render with label', () => {
    const result = shallow(<FormInput value="" label="Test label" />);
    expect(result.find('.input__input')).toExist();
    expect(result.find('.input__label')).toExist();
    expect(result.find('.input__error')).not.toExist();
    expect(result).toMatchSnapshot();
  });

  it('should render with error', () => {
    const result = shallow(<FormInput value="" label="Test label" error="Test error" />);
    expect(result.find('.input__input')).toExist();
    expect(result.find('.input__label')).toExist();
    expect(result.find('.input__error')).toExist();
    expect(result).toMatchSnapshot();
  });
});
