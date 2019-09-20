// import React, { useState } from "react";
// import {withFormik, Form} from 'formik'

// function SearchForm(props) {
  // const [search, setSearch] = useState('')

  // const onSearch = e => {
  //   setSearch(e.target.value)

  // }
//   const resetSearch = () => {
//     setSearch("")
//   }


//   return (
//     <section className="search-form">
    //  <Form>
    //    <input type="search" name="searchBar" placeholder="Search" onChange={onSearch}/>
    //  </Form>
//     </section>
//   );
// }

// const FormikSearchForm = withFormik({
//   mapPropsToValues({searchBar}) {
//     return {
//       searchBar: searchBar || ""
//     }
//   }
  
// })(SearchForm)
// export default FormikSearchForm