export function rotate_NxN_matrix(a: number[][]) {
  a.reverse();
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      // Switch a[i][j] and a[j][i]
      // With XOR swap
      a[i][j] ^= a[j][i];
      a[j][i] ^= a[i][j];
      a[i][j] ^= a[j][i];
    }
  }
  return a;
}
