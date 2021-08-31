import React, { useState } from "react";

import { Modal } from "./Modal";

import { usePerilContext, Status } from "./PerilContext";

function App() {
  const { status, data } = usePerilContext();

  const [modalContent, setModalContent] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const close = () => setShowDialog(false);

  return (
    <>
      <div className="heading">
        <h2>We have you covered</h2>
        <p>
          Extensive coverage for you and your family, your house and your
          belongings. All risk is always included. Click the icons for more
          info.
        </p>
      </div>

      <h3 className="container-heading">Home Insurance Renter</h3>

      <Modal showDialog={showDialog} close={close} peril={modalContent} />

      {status === Status.loading ? (
        <h1>...loading </h1>
      ) : (
        <div className="container">
          {data.map((peril) => (
            <div
              onClick={() => {
                setModalContent(peril);
                setShowDialog(true);
              }}
              className="card"
              key={peril.title.toString()}
            >
              <img
                src={peril.icon.variants.light.svgUrl}
                height="24"
                width="24"
                alt={peril.title}
              ></img>
              <h4>{peril.title}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
