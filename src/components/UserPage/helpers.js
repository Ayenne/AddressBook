/**
 * Applies a search query to a given array of users.
 * @param {Array} users a list with user objects.
 * @param {string} query
 * @return {Array} filtered list of users.
*/
const applySearch = (users, query) => {
  const fullName = (user) => {
    return (
      [user.name.first.toLowerCase(), user.name.last.toLowerCase()].join(' ')
    );
  };
  return users.filter((user) => fullName(user).includes(query.toLowerCase()));
};

export default applySearch;
