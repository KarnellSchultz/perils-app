import { useEffect, useState } from "react";

import { Modal } from "./Modal";
import {
  HeadingContainer,
  Heading,
  Container,
  Card,
  SvgIcon,
} from "./AppStyles";
import { createAPIClient } from "./lib/api/client";
import { StatusMessage } from "./lib/components/StatusMessage";

export const ApplicationStatus = {
  loading: "LOADING",
  error: "ERROR",
  ready: "READY",
} as const;

export type ApplicationStatusType =
  typeof ApplicationStatus[keyof typeof ApplicationStatus];

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

function App() {
  const [perils, setPerils] = useState<Peril[]>([]);
  const [status, setStatus] = useState<ApplicationStatusType>(
    ApplicationStatus.loading
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
      setStatus(ApplicationStatus.ready);
    });
  }, []);

  const isError = status === ApplicationStatus.ready && !perils.length;

  useEffect(() => {
    if (isError) {
      setStatus(ApplicationStatus.error);
    }
  }, [isError, perils.length, status]);

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

      <StatusMessage status={status}>
        <StatusMessage.Error>
          <h3>Oh Snap! There was an internal server error!</h3>
        </StatusMessage.Error>
        <StatusMessage.Loading>
          <h3>Loading perils now . . . </h3>
        </StatusMessage.Loading>
      </StatusMessage>

      <Container>
        {perils.length > 0 && ApplicationStatus.ready
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
      {showDialog ? (
        <Modal showDialog={showDialog} close={close} peril={modalContent} />
      ) : null}
    </>
  );
}

export default App;
