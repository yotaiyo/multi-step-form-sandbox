export const range = (startAt: number, size: number) => {
  return [...Array(size).keys()].map(i => i + startAt);
}
