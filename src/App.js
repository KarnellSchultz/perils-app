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
        perilData.map((peril) => (
          <div key={peril.title}>
            <h2>{peril.title}</h2>
            <img
              src={peril.icon.variants.light.svgUrl}
              height="24px"
              alt={peril.title}
            ></img>
            <p>{peril.description}</p>
            <ul>
              {peril.covered.map((covered) => (
                <li> ✅ {covered}</li>
              ))}
            </ul>
            <ul>
              {peril.exceptions.map((exceptions) => (
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
