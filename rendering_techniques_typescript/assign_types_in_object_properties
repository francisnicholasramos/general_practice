import React from 'react'
import { getImageUrl } from './utils'


const page = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl({imageId: 'szV5sdG'})} // since imageId is an object property it should enclose with {} not ('szV5sdG')
          //src={getImageUrl('szV5sdG')} // Error: Argument of type 'string' is not assignable to parameter of type 'Person'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl({imageId: 'YfeOqp2'})}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  )
}

export default page




// utils.tsx


//    type Person = {
//      imageId: string
//    }
//    export function getImageUrl(person: Person, size = 's') {
//
//    return (
//      'https://i.imgur.com/' +
//      person.imageId +
//      size +
//      '.jpg'
//    );
//    }
