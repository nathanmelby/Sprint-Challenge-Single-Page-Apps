import React, { useState, useEffect } from "react";
// import { Form, Field,} from "formik";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form>
       <input
       type="search" 
       name="search" 
       placeholder="Search Here" />
       <button>Search</button>
     </form>
    </section>
  );
}
