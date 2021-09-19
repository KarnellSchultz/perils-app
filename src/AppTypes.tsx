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
