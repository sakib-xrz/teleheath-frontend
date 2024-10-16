import React from "react";

const HowItWorks = () => {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <div key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          recusandae sunt ratione neque culpa maiores dolorum, possimus saepe
          sapiente accusamus eum sequi nemo ullam repellendus consectetur
          aliquam nostrum temporibus. Vero hic odit, quasi reiciendis nam sequi
          provident exercitationem similique eum! Accusamus aspernatur
          consequuntur vel exercitationem enim reiciendis voluptatum ipsum dicta
          nobis, quos soluta ea. Aspernatur libero corrupti, dolorum expedita
          ullam repellat reiciendis velit! Mollitia cupiditate neque animi,
          aliquid ipsum rem repellendus. Autem est beatae dolorum quos ea
          provident iste neque nulla vero adipisci sed quibusdam, quis accusamus
          aspernatur. Sed, ab accusamus voluptatum neque consectetur
          consequuntur minus facere? Voluptates, veritatis maiores.
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
