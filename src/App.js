import React from "react";
import { usePerilContext, Status } from "./PerilContext";

function App() {
  const { status, data } = usePerilContext();
  console.log(status);
  return (
    <>
      <h2>We have you covered</h2>

      <p>
        Extensive coverage for you and your family, your house and your
        belongings. All risk is always included. Click the icons for more info.
      </p>

      <h3>Home Insurance Renter</h3>

      {status === Status.loading && <h1>...loading </h1>}

      <div className="container">
        {status === Status.done &&
          data.map((peril) => (
            <div className="card" key={peril.title}>
              <img
                src={peril.icon.variants.light.svgUrl}
                height="48px"
                width="48px"
                alt={peril.title}
              ></img>
              <p>{peril.title}</p>

              {/* <p>{peril.description}</p> */}
              {/* <ul>
                {peril.covered.map((covered) => (
                  <li> ✅ {covered}</li>
                ))}
              </ul> */}
              {/* <ul>
                {peril.exceptions.map((exceptions) => (
                  <li> ❌ {exceptions}</li>
                ))}
              </ul> */}
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
