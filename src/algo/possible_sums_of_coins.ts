export function possible_sums_of_coins(coins: number[], quantity: number[]) {
  const stack: { total: number; index: number }[] = [];
  const table: Record<number, boolean> = {};
  let result = 0;

  stack.push({ total: 0, index: 0 });

  while (stack.length > 0) {
    const current = stack.pop();
    if (current!.total !== 0) {
      if (table[current!.total] === undefined) {
        table[current!.total] = true;
        result++;
      }
    }

    if (current!.index < coins.length) {
      for (let i = current!.index; i < coins.length; i++) {
        for (let j = 1; j <= quantity[i]; j++) {
          stack.push({ total: current!.total + coins[i] * j, index: i + 1 });
        }
      }
    }
  }

  return result;
}
