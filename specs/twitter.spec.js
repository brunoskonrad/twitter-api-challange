import {
  getTweets
} from '../src/twitter';

describe('foo', () => {
  it('pass', () => {
    expect(1).toBe(1);
  });

  it('foo', (done) => {
    const getFoo = () => ({content: 'olar'});
    const result = getTweets();

    result.then((data) => {
      expect(data).toEqual({content: 'olar'});
      done();
    });
  });
});
