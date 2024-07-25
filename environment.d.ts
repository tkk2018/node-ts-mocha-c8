export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "test" | "production" | string;
      folder: string | undefined;
    };
  };
};
