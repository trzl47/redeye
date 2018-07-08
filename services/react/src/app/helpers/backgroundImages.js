function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../img/', false, /\.(png|jpg|svg)$/));

export default images;