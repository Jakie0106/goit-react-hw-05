import { Field, Formik, Form } from "formik";
import s from "./SearchBar.module.css";
import { Suspense } from "react";

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  return (
    <div className={s.wrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field className={s.input} name="query" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </Suspense>
    </div>
  );
};

export default SearchBar;
