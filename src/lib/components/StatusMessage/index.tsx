import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApplicationStatus, ApplicationStatusType } from "../../../App";

const StatusMessageCtx = createContext<ApplicationStatusType>("LOADING");

type StatusMessageProps = {
  children: React.ReactNode;
  status: ApplicationStatusType;
};

const StatusMessage = ({ children, status }: StatusMessageProps) => {
  const [state, setState] = useState(status);
  useEffect(() => {
    setState(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  return (
    <StatusMessageCtx.Provider value={state}>
      {children}
    </StatusMessageCtx.Provider>
  );
};

const useStatusMessageCtx = (): ApplicationStatusType => {
  const ctx = useContext(StatusMessageCtx);
  if (!ctx) {
    console.error("you're fucking up fam");
  }
  return ctx;
};
type ReactNode = { children: ReactElement<any, any> };

const Loading = ({ children }: ReactNode) => {
  const status = useStatusMessageCtx();
  return status === ApplicationStatus.loading ? children : null;
};

const Error = ({ children }: ReactNode) => {
  const status = useStatusMessageCtx();
  return status === ApplicationStatus.error ? children : null;
};

StatusMessage.Loading = Loading;
StatusMessage.Error = Error;

export { StatusMessage };
