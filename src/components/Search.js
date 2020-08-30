import React from "react";

export function Search() {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <input
        type="text"
        placeholder="Search your favorite city"
        name="search"
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
