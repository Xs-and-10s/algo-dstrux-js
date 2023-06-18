import { describe, expect, it } from 'vitest';
import { bowling_score_string } from './bowling_score_string';

describe(`bowling_score_string`, () => {
  it(`gives a score of 300 with all strikes`, () => {
    const all_strikes = 'X X X X X X X X X X X X';
    expect(bowling_score_string(all_strikes)).equal(300);
  });

  it(`gives a score of 90 with all nines`, () => {
    const all_nines = '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-';
    expect(bowling_score_string(all_nines)).toEqual(90);
  });

  it(`gives a score of 150 with all spares`, () => {
    const all_spares = '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5';
    expect(bowling_score_string(all_spares)).toEqual(150);
  });
});
