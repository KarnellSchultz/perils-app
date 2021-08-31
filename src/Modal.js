import React from "react";

import { Dialog } from "@reach/dialog";

export const Modal = ({ peril, close, showDialog }) => {
  return (
    <>
      {showDialog ? (
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          aria-label={`label--${peril.title}}`}
        >
          <div className="modal-list">
            <img
              src={peril.icon.variants.light.svgUrl}
              height="48px"
              width="48px"
              alt={peril.title}
              aria-label={`label--${peril.title}}`}
            ></img>
            <h3>{peril.title}</h3>
            <p>{peril.description}</p>
            <ul>
              {peril.covered.map((coveredItem) => (
                <li key={coveredItem}>✅ {coveredItem}</li>
              ))}
            </ul>
            <ul>
              {peril.exceptions.map((exceptionItem) => (
                <li key={exceptionItem}>❌ {exceptionItem}</li>
              ))}
            </ul>
          </div>
        </Dialog>
      ) : null}
    </>
  );
};
