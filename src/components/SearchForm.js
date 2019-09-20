// import React from "react";
// // import { Form, Field,} from "formik";

// export default function SearchForm() {
 
//   return (
//     <section className="search-form">
//      <form>
//        <input
//        type="search" 
//        name="search" 
//        placeholder="Search Here" />
//        <button>Search</button>
//      </form>
//     </section>
//   );
// }


import React from "react";


const characters = [
 
];
export default function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = characters.filter(item =>
      item.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Characters"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}