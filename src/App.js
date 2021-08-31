import React, { useState } from "react";

import { usePerilContext, Status } from "./PerilContext";

import { Modal } from "./Modal";
import { HeadingContainer, Heading, Container, Card, SvgIcon } from "./Styles";

function App() {
  const { status, data } = usePerilContext();

  const [modalContent, setModalContent] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const close = () => setShowDialog(false);

  return (
    <>
      <HeadingContainer>
        <Heading>
          <h2>We have you covered</h2>
          <p>
            Extensive coverage for you and your family, your house and your
            belongings. All risk is always included. Click the icons for more
            info.
          </p>

          <h3>Home Insurance Renter</h3>
        </Heading>
      </HeadingContainer>

      <Modal showDialog={showDialog} close={close} peril={modalContent} />

      {status === Status.loading ? (
        <h1>...loading </h1>
      ) : (
        <Container>
          {data.map((peril) => (
            <Card
              onClick={() => {
                setModalContent(peril);
                setShowDialog(true);
              }}
              key={peril.title.toString()}
            >
              <SvgIcon
                src={peril.icon.variants.light.svgUrl}
                height="24"
                width="24"
                alt={peril.title}
              ></SvgIcon>
              <h4>{peril.title}</h4>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default App;
