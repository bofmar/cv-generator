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
      <section className='contacts'>
        <h1>CONTACT INFOR</h1>
        <p className='phone-number'>{phoneNumber.value}</p>
        <p className='address'>{address.value}</p>
        <p className='email'>{email.value}</p>
      </section>
      <section className='description'>
        <h1>ABOUT ME</h1>
        <p>{description}</p>
      </section>
      <section className='experience'>
        <h1>EXPERIENCE</h1>
        {experience.map(exp => (
          <div className='experience-wrapper'>
            <h1>{exp[1][0].value} - {exp[1][1].value}</h1>
            <p>{exp[1][2].value} - {exp[1][3].value}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
