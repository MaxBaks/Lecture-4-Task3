import getLevel from '../js/app';
import fetchData from '../js/domain';

jest.mock('../js/domain');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData once', () => {
  fetchData.mockReturnValue(JSON.stringify({}));

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should get level where response is ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 2 });

  expect(getLevel(2)).toBe('Ваш текущий уровень: 2');
});
