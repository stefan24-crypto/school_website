import React, { FormEvent, useReducer, useState, useRef, createRef } from "react";
import { useNavigate } from "react-router";

const Search = () => {
  const searchRef = createRef<HTMLInputElement>();
  const pages = ['home','about','forstudents', 'forstaff', 'contact', 'calendar']
  const navigate = useNavigate();

  const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    const search = searchRef.current?.value;
    pages.map((page, index) => {
      if(search === '') return;
      if(page.includes(search!.toLowerCase().trim().replace(/\s+/g, ""))){
        navigate(`/${pages[index]}`);
      }
    })
    e.preventDefault();
  }

  // const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   pages.map((page, index) => {
  //     if(page.includes(e.target.value)){
  //       setSearch(pages[index]);
  //     }
  //   })
  // }

  return (
    <div className="px-4 w-full">
      <form action="submit" onSubmit={onSubmitHandler}>
        <input
          className="py-2 bg-transparent border-b outline-none text-white w-full"
          placeholder="search..."
          ref={searchRef}
          // value={search}
        ></input>
      </form>
    </div>
  );
};

export default Search;
