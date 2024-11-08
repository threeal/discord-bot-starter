/**
 * Generate a Fibonacci sequence up to the given number of terms.
 *
 * @param n - The number of terms.
 * @returns A Fibonacci sequence.
 */
export function fibonacciSequence(n: number): number[] {
  const sequence = [0, 1];
  for (let i = 1; i < n; ++i) {
    sequence.push(sequence[i - 1] + sequence[i]);
  }
  return sequence.slice(1);
}
