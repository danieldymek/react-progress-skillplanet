const r = (values) => {
  const result = new Array();
  for (let i = values[0]; i <= values[1]; i++) result.push(i);
  return result;
};
const ranges = [
  [1, 10],
  [11, 23],
  [24, 45],
  [46, 62],
  [63, 73],
  [74, 82],
  [83, 88],
  [89, 99],
  [100, 108],
  [109, 130],
  [131, 150],
  [151, 162],
  [163, 172],
  [173, 185],
  [186, 196],
  [197, 213],
  [214, 225],
  [226, 249],
  [250, 265],
  [266, 292],
  [293, 299],
  [300, 315],
  [316, 350],
  [351, 366],
  [367, 380],
  [381, 394],
  [395, 420],
  [421, 448],
  [449, 484],
  [485, 488],
  [489, 491],
];
const extended = ranges.map((callback) => {
  return r(callback);
});
const chapterFinder = (episode) =>
  extended
    .map((callback, index) => {
      if (callback.includes(episode)) {
        return ++index;
      }
    })
    .find((callback) => typeof callback === "number");
export default chapterFinder;
