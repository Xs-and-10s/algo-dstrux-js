export function first_non_rep_char(s: string): string {
  const repeated: Record<string, number> = { length: 0 };

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (!repeated.hasOwnProperty(char)) {
      repeated[char] = 1;
    } else {
      repeated[char]++;
    }
  }
  for (let j = 0; j < s.length; j++) {
    const char = s.charAt(j);
    if (repeated[char] === 1) return char;
  }
  return '_';
}
