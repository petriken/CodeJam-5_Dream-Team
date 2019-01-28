export default function SearchDirector(directors = {}, searchValue = '') {
  const regExp = new RegExp(searchValue.toLowerCase(), 'g');

  const result = {};
  Object
    .entries(directors)
    .filter((director) => {
      const [, directorValues] = director;
      const {
        about: {
          name,
          birthPlace,
        },
      } = directorValues;

      return regExp.test(name.toLowerCase()) || regExp.test(birthPlace.toLowerCase());
    })
    .forEach((item) => {
      const [key, value] = item;
      result[key] = value;
      return { [key]: value };
    });

  return result;
}
