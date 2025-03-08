import React from "react";

const Test = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];

  function getImageUrl(person) {
    return (
      "https://i.imgur.com/" + 
      person.imageId + 
      "s.jpg"
    );
  }

  const listItems = people
    .filter(person => person.profession === 'chemist')
    .map(person => (
    <li key={person.id}>
      <img 
        src={getImageUrl(person)} 
        alt={person.name}
      />

      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  
  const others = people    
    .filter(person => person.profession !== 'chemist')
    .map(person => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)} 
        alt={person.name}
      />

      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  return (
    <>
      <article>
        <h1 className="font-bold text-[24px]">Scientists</h1>
        <ul>{listItems}</ul>

          <br/> <br/>

        <h1 className="font-bold text-[24px]">Everyone else</h1>
        <ul>{others}</ul>
      </article>
    </>
  );
};

export default Test;

// ALTERNATIVE APPROACH
//import { people } from './data.js';
//import { getImageUrl } from './utils.js';
//
//let chemists = [];
//let everyoneElse = [];
//people.forEach(person => {
//  if (person.profession === 'chemist') {
//    chemists.push(person);
//  } else {
//    everyoneElse.push(person);
//  }
//});
//
//function ListSection({ title, people }) {
//  return (
//    <>
//      <h2>{title}</h2>
//      <ul>
//        {people.map(person =>
//          <li key={person.id}>
//            <img
//              src={getImageUrl(person)}
//              alt={person.name}
//            />
//            <p>
//              <b>{person.name}:</b>
//              {' ' + person.profession + ' '}
//              known for {person.accomplishment}
//            </p>
//          </li>
//        )}
//      </ul>
//    </>
//  );
//}
//
//export default function List() {
//  return (
//    <article>
//      <h1>Scientists</h1>
//      <ListSection
//        title="Chemists"
//        people={chemists}
//      />
//      <ListSection
//        title="Everyone Else"
//        people={everyoneElse}
//      />
//    </article>
//  );
//}
