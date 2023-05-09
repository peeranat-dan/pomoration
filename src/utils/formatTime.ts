export const toMMSS = (seconds: number) => {
  const minute = Math.floor(seconds / 60);
  const second = Math.round(seconds % 60);
  return `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
};
