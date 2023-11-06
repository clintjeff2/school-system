import React from 'react';

//Styled in the search sass component file
function SearchCategory({ styles }) {
	return (
		<form
			action=""
			name="search-category"
			className={`search-category ${styles ? styles: ''}`}
		>
			<input placeholder="Search by name" type="text" name="search-by-name" />
			<input placeholder="Search by ID" type="text" name="search-by-id" />
			<input placeholder="Search by Phone" type="number" name="search-by-tel" />
			<button className="button-main button-main-medium">Search</button>
		</form>
	);
}

export default SearchCategory;
