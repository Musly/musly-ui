import isRetina from 'is-retina';
import { renderHook } from '@testing-library/react-hooks';
import { useGravatar } from './useGravatar';

jest.mock('is-retina', () => jest.fn());

describe('hooks > useGravatar', () => {
  it('should return a regular size url', () => {
    isRetina.mockReturnValueOnce(false);
    const gravatar = renderHook(() => useGravatar('test@test.de'));
    expect(gravatar.result.current)
      .toEqual('//www.gravatar.com/avatar/f84d37ce99493155ee296c2b746191d0/?d=mp&r=g&s=256');
  });

  it('should return a retina site url', () => {
    isRetina.mockReturnValueOnce(true);
    const gravatar = renderHook(() => useGravatar('test@test.de'));
    expect(gravatar.result.current)
      .toEqual('//www.gravatar.com/avatar/f84d37ce99493155ee296c2b746191d0/?d=mp&r=g&s=512');
  });
});
