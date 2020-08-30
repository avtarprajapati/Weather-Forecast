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
      <button>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default Search;
