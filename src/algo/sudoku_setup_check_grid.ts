export function sudoku_setup_check_grid(grid: string[][]): boolean {
  let rowsOk = true;
  let colsOk = true;
  let blocksOk = true;

  let i;
  let j;

  // find rows that are NOT legitimate
  for (i = 0; i < 9; i++) {
    const _1_9_: Record<string, number> = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    };
    for (j = 0; j < 9; j++) {
      const spot = grid[i][j];
      if (spot === '.') continue;
      _1_9_[spot]++;
    }
    for (let h = 1; h <= 9; h++) {
      if (_1_9_[h] > 1) {
        rowsOk = false;
        break;
      }
    }
  }
  // console.log({ rowsOk })

  // find cols that are NOT legitimate
  for (i = 0; i < 9; i++) {
    const _1_9_: Record<string, number> = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    };
    for (j = 0; j < 9; j++) {
      const spot = grid[j][i];
      if (spot === '.') continue;
      _1_9_[spot]++;
    }
    for (let h = 1; h <= 9; h++) {
      if (_1_9_[h] > 1) {
        colsOk = false;
        break;
      }
    }
  }
  // console.log({ colsOk })

  // find blocks that are NOT legitimate
  for (i = 0; i < 9; i += 3) {
    for (j = 0; j < 9; j += 3) {
      const _1_9_: Record<string, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
      };
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          const spot = grid[k][l];
          if (spot === '.') continue;
          // console.log(`(${k}, ${l}): z${spot}`);
          _1_9_[spot]++;
        }
        // console.log(`block (${i+1}, ${j+1}): ${_1_9_}`)
        for (let h = 1; h <= 9; h++) {
          if (_1_9_[h] > 1) {
            blocksOk = false;
            break;
          }
        }
      }
    }
  }
  // console.log({ blocksOk })

  return rowsOk && colsOk && blocksOk;
}
