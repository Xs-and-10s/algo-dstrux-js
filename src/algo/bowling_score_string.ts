/* eslint-disable prefer-destructuring */

// const all_strikes = 'X X X X X X X X X X X X';
// const all_nines = '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-';
// const all_spares = '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5';

export const bowling_score_string = (tally: string) => {
  const char = {
    strike: 'X',
    bonus: '.',
    spare: '/',
    miss: '-',
    nothing: ' ',
  };
  const charToNum: Record<string, number> = {
    X: 10,
    '/': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
    '1': 1,
    '0': 0,
    ' ': 0,
    '-': 0,
    '.': 0,
  };
  let score = 0;
  // console.log({ tally });
  const turns = tally.split(char.nothing);
  // console.log({ turns, length: turns.length });
  const frames = [];
  /* 
  ! Map full game string to frames, including potential bonus frames
  */
  for (let t = 0; t < 10; t++) {
    const stack = [];
    if (turns[t][0] === 'X') {
      stack.push('X');
      stack.push('.');
      stack.push('.');
    } else if (turns[t][1] === '/') {
      stack.push(turns[t][0]);
      stack.push('/');
      stack.push('.');
    } else {
      stack.push(turns[t][0]);
      stack.push(turns[t][1] || ' ');
      stack.push(' ');
    }
    frames.push(stack);
  }
  /* 
  ! For special frames (1 or 2 extra turns)
  ! mark throws for calculating final bonus & score
  */
  for (let i = 10; i < turns.length; i++) {
    const stack = [];

    stack.push(turns[i][0]);
    stack.push(turns[i][1] || ' ');
    stack.push(' ');

    frames.push(stack);
  }
  // console.log({ step: 'construct frames with bonii', frames });
  // console.log(frames.length);

  // ////////////////////////////

  for (let i = frames.length - 1; i > 0; i--) {
    if (frames[i - 1][2] === '.') {
      frames[i - 1][1] = frames[i][0];
      frames[i - 1][2] = frames[i][1];
      continue;
    } else if (frames[i - 1][1] === '.') {
      frames[i - 1][1] = frames[i][0];
      continue;
    } else {
      continue;
    }
  }
  // console.log({ step: 'calculate bonii', frames });
  // console.log(frames.length);

  if (frames.length === 12) {
    frames.pop();
  }

  // console.log({ step: 'remove special frames', frames });
  // console.log(frames.length);

  const framePoints = frames.map<number>((s) => {
    let points = 0;
    const turn3 = s.pop()?.split('') || ' ';
    const turn2 = s.pop()?.split('') || ' ';
    const turn1 = s.pop()?.split('') || ' ';

    const lit3: number = turn3![0] ? charToNum[turn3![0]] : 0;
    const lit2: number = turn2![0] ? charToNum[turn2![0]] : 0;
    const lit1: number = turn1![0] ? charToNum[turn1![0]] : 0;

    // console.log({
    //   lit1,
    //   lit2,
    //   lit3,
    // });

    points = lit1 + lit2 + lit3;
    return points;
  }, []);

  // console.log({ framePoints });

  score = framePoints.reduce((s, n) => s + n, 0);

  // console.log({ score });
  // console.log(`\n\t////////////////////////////\n`);

  return score;
};

// const score_all_strikes = bowling_score_string(all_strikes);
// const score_all_nines = bowling_score_string(all_nines);
// const score_all_spares = bowling_score_string(all_spares);

// const all_strikes_correct = score_all_strikes === 300;
// const all_nines_correct = score_all_nines === 90;
// const all_spares_correct = score_all_spares === 150;

// console.log({
//   all_strikes_correct,
//   score_all_strikes,
//   all_nines_correct,
//   score_all_nines,
//   all_spares_correct,
//   score_all_spares,
// });
