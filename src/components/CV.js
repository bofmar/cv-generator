import React from "react";
import envelope from '../images/envelope-solid.svg';
import phone from '../images/mobile-screen-button-solid.svg';
import location from '../images/location-dot-solid.svg';


export default function CV({ personalInfo, description, experience, education, skills, image }) {
  const [firstName, lastName, title, address, phoneNumber, email] = [...personalInfo];
  return (
    <div className='cv'>
      <div className='left-side'>
        <div className='gold-corner'></div>
        <section className='image'>
          <img src={image} className='cv--image' />
        </section>
        <div className='card'>
          <section className='name'>
            <h1 className='full-name'>{firstName.value} <span className='last-name'>{lastName.value}</span></h1>
            <h2 className='title'>{title.value}</h2>
          </section>
          <section className='contacts'>
            <h1>CONTACT INFO</h1>
            <p className='phone-number'><img src={phone} className='icon' />{phoneNumber.value}</p>
            <p className='address'><img src={location} className='icon' />{address.value}</p>
            <p className='email'><img src={envelope} className='icon' />{email.value}</p>
          </section>
          <section className='skills'>
            <h1>SKILLS/LANGUAGES</h1>
            <ul className='skills-wrapper'>
              {skills.map(skill => <li key={skill[0].id}>{skill[1][0].value}</li>)}
            </ul>
          </section>
        </div>
      </div>
      <div className='right-side'>
        <section className='description'>
          <h1>ABOUT ME</h1>
          <p>{description}</p>
        </section>
        <section className='experience'>
          <h1>EXPERIENCE</h1>
          {experience.map(exp => (
            <div className='experience-wrapper' key={exp[0].id}>
              <h1>{exp[1][0].value} - {exp[1][1].value}</h1>
              <p>{exp[1][2].value} - {exp[1][3].value}</p>
            </div>
          ))}
        </section>
        <section className='education'>
          <h1>EDUCATION</h1>
          {education.map(ed => (
            <div className='education-wrapper' key={ed[0].id}>
              <h1>{ed[1][1].value}</h1>
              <h2>{ed[1][0].value}</h2>
              <p>{ed[1][2].value} - {ed[1][3].value}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}


