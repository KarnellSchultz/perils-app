import { useEffect, useState } from "react";

import { Modal } from "./Modal";
import { HeadingContainer, Heading, Container, Card, SvgIcon } from "./Styles";
import { createAPIClient } from "./lib/api/client";

export type Peril = {
  covered: string[];
  description: string;
  exceptions: string[];
  info: string;
  shortDescription: string;
  title: string;
  icon: {
    variants: {
      dark: {
        svgUrl: string;
      };
      light: {
        svgUrl: string;
      };
    };
  };
};

enum ApplicationStatus {
  Loading = "LOADING",
  Error = "ERROR",
  Ready = "READY",
}

function App() {
  const [perils, setPerils] = useState<Peril[]>([]);
  const [status, setStatus] = useState<ApplicationStatus>(
    ApplicationStatus.Loading
  );

  const [modalContent, setModalContent] = useState<Peril>(null!);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const api = createAPIClient();
    api.PerilService.ListPerils({
      locale: "en_SE",
      // contractType: "BREAKIT", // uncomment this line to break the fetch request
    }).then((apiResponseData) => {
      setPerils(apiResponseData);
      setStatus(ApplicationStatus.Ready);
    });
  }, []);

  const isError = status === ApplicationStatus.Ready && !perils.length;

  useEffect(() => {
    if (isError) {
      setStatus(ApplicationStatus.Error);
    }
  }, [isError, perils.length, status]);

  const close = () => setShowDialog(false);

  const errorUi = () => <p>{`There was an internal error`}</p>;

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

      {showDialog ? (
        <Modal showDialog={showDialog} close={close} peril={modalContent} />
      ) : null}

      {status === ApplicationStatus.Error ? errorUi() : null}
      {status === ApplicationStatus.Loading ? <h3>Loading . . . </h3> : null}

      <Container>
        {perils.length > 0 && ApplicationStatus.Ready
          ? perils?.map((peril) => (
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
            ))
          : null}
      </Container>
    </>
  );
}

export default App;
