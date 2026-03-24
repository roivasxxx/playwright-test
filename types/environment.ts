declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER_NAME: string;
      PASSWORD: string;
      WORKSPACE_NAME: string;
      GRAPH_API_TOKEN: string;
    }
  }
}
export {};
