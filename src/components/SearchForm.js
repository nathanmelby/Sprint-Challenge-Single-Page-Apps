import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <Form>
       <Field type="search" name="search" placeholder="What do you want to search?" />
     </Form>
    </section>
  );
}
