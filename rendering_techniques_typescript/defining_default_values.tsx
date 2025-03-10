import React from 'react'
import { getImageUrl } from './utils'

type PersonProfile = {
  imageId: string
  name: string
  profession: string
  awards: string[] // defined as string and it should have [] since its data is array
  discovery: string
  imageSize?: number // put a question mark [?] if the prop has default value
}

const Profile = ({
  imageId,
  name, 
  profession,
  awards,
  discovery,
  imageSize = 70 // default value 
}: PersonProfile) => {
  return (
    <section>
      <h2>{name}</h2>
      <img 
        className='avatar'
        src={getImageUrl({imageId})}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length}</b>
          ({awards.join(', ')})
        </li>

        <li>
          <b>Discovery: </b>
          {discovery}
        </li>
      </ul>
    </section>
  )
}

const page = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[             // string array
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  )
}

export default page
