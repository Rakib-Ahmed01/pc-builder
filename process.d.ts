declare namespace NodeJS {
  export interface ProcessEnv {
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    MONGODB_URI: string;
    MONGODB_DB: string;
  }
}
