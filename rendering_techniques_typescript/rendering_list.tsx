import React from "react";

const Test = () => {
  
  // defining type alias for each object properties whether it is string or number
  type DrinkProps = {
    part: string;
    caffeine: string;
    age: string | number;
  }

  const drinks: Record<string, DrinkProps> = {
    tea: {
      part: "leaf",
      caffeine: "15-70 mg/cup",
      age: "4,000+ years",
    },

    coffee: {
      part: "bean",
      caffeine: "80-185 mg/cup",
      age: "1,000+ years",
    },
  };

  const Drink = ({name}: {name: string}) => {
    const info = drinks[name];

    return (
      <section>
        <h1 className="font-bold text-[24px]">{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{info.part}</dd>

          <dt>Caffeine content</dt>
          <dd>{info.caffeine}</dd>
          <dt>Age</dt>
          <dd>{info.age}</dd>
        </dl>
      </section>
    );
  };

  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
};

export default Test;
