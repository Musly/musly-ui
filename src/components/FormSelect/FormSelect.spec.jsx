import React from 'react';
import { shallow } from 'enzyme';
import { FormSelect } from './FormSelect';

const options = [
  { value: 1, label: 'First' },
  { value: 2, label: 'Second' },
  { value: 3, label: 'Third' },
];

describe('<FormSelect />', () => {
  it('it should render without label', () => {
    const onChange = jest.fn();
    const result = shallow(<FormSelect value={1} options={options} onChange={onChange} />);
    expect(result.find('.select__select')).toExist();
    expect(result.find('.select__label')).not.toExist();
    expect(result.find('option').get(0).props.selected).toBe(true);
    expect(result.find('option').get(1).props.selected).toBe(false);
    expect(result.find('option').get(2).props.selected).toBe(false);
    result.find('select').simulate('change');
    expect(onChange).toHaveBeenCalled();
    expect(result).toMatchSnapshot();
  });

  it('should render with label', () => {
    const result = shallow(<FormSelect label="Test label" value={2} options={options} />);
    expect(result.find('.select__select')).toExist();
    expect(result.find('.select__label')).toExist();
    expect(result.find('option').get(0).props.selected).toBe(false);
    expect(result.find('option').get(1).props.selected).toBe(true);
    expect(result.find('option').get(2).props.selected).toBe(false);
    expect(result).toMatchSnapshot();
  });
});
