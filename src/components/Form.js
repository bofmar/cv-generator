import React from "react";

export default function Form({ personalInfo, description, handleChange }) {
  return (
    <form>
      <section className='form--section form--personal-info'>
        <h1>Personal Information</h1>
        {personalInfo.map(item => {
          return (
            <input type={item.type} placeholder={item.placeHolder} value={item.value} key={item.id} onChange={(event) => handleChange(event, item.id, item.section)} />
          );
        })}
        <button>Photo</button>
        <textarea placeholder='Description' value={description} onChange={(event) => handleChange(event, '', 'description')} />
      </section>
    </form>
  );
}

//
