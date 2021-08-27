import React from "react";

import { usePerilContext, Status } from "./PerilContext";

import { Modal } from "./Modal";

function App() {
  const { status, data } = usePerilContext();

  const [modalContent, setModalContent] = React.useState(null);
  const [showDialog, setShowDialog] = React.useState(false);
  const open = (peril) => {
    setModalContent(peril);
    setShowDialog(true);
  };
  const close = () => setShowDialog(false);
  return (
    <>
      <h2>We have you covered</h2>

      <p>
        Extensive coverage for you and your family, your house and your
        belongings. All risk is always included. Click the icons for more info.
      </p>

      <h3>Home Insurance Renter</h3>
      
      <Modal showDialog={showDialog} close={close} peril={modalContent} />

      {status === Status.loading && <h1>...loading </h1>}

      <div className="container">
        {status === Status.done &&
          data.map((peril) => (
            <div>
              <div
                onClick={() => open(peril)}
                className="card"
                key={peril.title.toString()}
              >
                <img
                  src={peril.icon.variants.light.svgUrl}
                  height="48px"
                  width="48px"
                  alt={peril.title}
                ></img>
                <p>{peril.title}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
