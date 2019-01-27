export default function SearchDirector(directors = {}, searchValue = '') {
  const regExp = new RegExp(searchValue, 'g');

  return Object.values(directors).filter((director) => {
    const {
      about: {
        name,
        birthPlace,
      },
    } = director;

    return regExp.test(name.toLowerCase()) || regExp.test(birthPlace.toLowerCase());
  });
}
