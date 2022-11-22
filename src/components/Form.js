import React from "react";

export default function Form({ personalInfo, description, experience, handleChange, addBlock, deleteBlock }) {
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
      <section className='form--section form--experience'>
        <h1>Experience</h1>
        {experience.map(items => {
          const id = items[0][0].id;
          const info = [...items[1]];
          return (
            <div key={id}>
              {info.map(item => {
                return (
                  <input type={item.type} placeholder={item.placeHolder} value={item.value} key={item.id} onChange={(event) => handleChange(event, item.id, item.section)} />
                );
              })}
              <button onClick={(event) => deleteBlock(id, 'experience', event)}>Delete</button>
            </div>
          )
        })};
        <button onClick={(event) => addBlock('experience', event)}>Add</button>
      </section>
    </form>
  );
}

