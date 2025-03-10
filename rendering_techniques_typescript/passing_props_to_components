import React from "react";

type Props = {
  person: {
    name: string;
    imageId: string;
  };

  size: number;
};

//for getImageUrl
type Person = {
  name: string;
  imageId: string;
};

// Component function
const page = () => {
  const getImageUrl = (person: Person, size = "s") => {
    return (
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQl1CQRnV3zVKArEhDJSMXmyxoLbGZ5lD0g&s" +
      person.imageId +
      size +
      ".jpg"
    );
  };

  const Avatar: React.FC<Props> = ({ person, size }) => {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  };

  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
};

export default page;
