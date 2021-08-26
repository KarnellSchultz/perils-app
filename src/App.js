import React from "react";
import { usePerilContext } from "./PerilContext";

function App() {
  const perilData = usePerilContext();
  return (
    <>
<p>
  Yyyyyy
</p>

<h2>We have you covered
</h2>
      {perilData ? (
        perilData.map((el) => (
          <div key={el.title}>
            <h2>{el.title}</h2>
            <img
              src={el.icon.variants.light.svgUrl}
              height="24px"
              alt={el.title}
            ></img>
            <p>{el.description}</p>
            <ul>
              {el.covered.map((covered) => (
                <li> ✅ {covered}</li>
              ))}
            </ul>
            <ul>
              {el.exceptions.map((exceptions) => (
                <li> ❌ {exceptions}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div>...loading </div>
      )}
    </>
  );
}

export default App;
