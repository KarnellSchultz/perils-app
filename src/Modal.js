import React from "react";
import styled from "styled-components";

import { Dialog } from "@reach/dialog";

const DialogContent = styled.div`
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 1rem;

  ul {
    padding: 0.5rem;
  }
  li {
    padding-top: 0.3rem;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.3;
`;

export const Modal = ({ peril, close, showDialog }) => {
  return (
    <>
      {showDialog ? (
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          aria-label={`label--${peril.title}}`}
        >
          <DialogContent>
            <img
              src={peril.icon.variants.light.svgUrl}
              height="48px"
              width="48px"
              alt={peril.title}
              aria-label={`label--${peril.title}}`}
            ></img>
            <Title>{peril.title}</Title>
            <Description>{peril.description}</Description>
            <ul>
              {peril.covered.map((coveredItem) => (
                <li key={coveredItem}>✅ - {coveredItem}</li>
              ))}
            </ul>
            <ul>
              {peril.exceptions.map((exceptionItem) => (
                <li key={exceptionItem}>❌ {exceptionItem}</li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};
