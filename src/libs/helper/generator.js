export const dateGenerator = () => {
  const date = new Date();
  let Y = date.getFullYear();
  let M = date.getMonth() + 1;
  let D = date.getDate();
  let T = date.getHours();
  let t = date.getTime();
  let P;
  T >= 12 ? (P = "ev") : (P = "af");

  return { Y, M, D, P, t };
};
