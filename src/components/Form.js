import React from "react";

export default function Form({ personalInfo }) {
  return (
    <form>
      <section className='form--section form--personal-info'>
        <h1>Personal Information</h1>
        {personalInfo.map(item => {
          return (
            <input type={item.type} placeholder={item.placeHolder} key={item.id} />
          );
        })}
        <button>Photo</button>
      </section>
    </form>
  );
}

//
