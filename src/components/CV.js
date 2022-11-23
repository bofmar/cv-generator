import React from "react";

export default function CV({ personalInfo, description, experience, education, skills }) {
  const [firstName, lastName, title, address, phoneNumber, email] = [...personalInfo];
  const fullName = `${firstName.value} ${lastName.value}`
  return (
    <div className='cv'>
      <section className='name'>
        <h1 className='full-name'>{fullName}</h1>
        <h2 className='title'>{title.value}</h2>
      </section>
    </div>
  );
}
