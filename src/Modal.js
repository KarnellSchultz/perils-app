import React from "react";

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

export const Modal = ({ children, peril, close, showDialog }) => {
  return (
    <>
      {showDialog ? (
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          aria-label={`label--${peril.title}}`}
          className="modal-list"
        >
          <img
            src={peril.icon.variants.light.svgUrl}
            height="48px"
            width="48px"
            alt={peril.title}
          ></img>
          <h3>{peril.title}</h3>
          <p>{peril.description}</p>
          <ul>
            {peril.covered.map((coveredItem) => (
              <li key={coveredItem}> ✅ {coveredItem}</li>
            ))}
          </ul>
          <ul>
            {peril.exceptions.map((exceptionItem) => (
              <li key={exceptionItem}> ❌ {exceptionItem}</li>
            ))}
          </ul>
        </Dialog>
      ) : null}
    </>
  );
};
