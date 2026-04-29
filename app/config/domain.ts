const isDev: boolean = process.env.NODE_ENV !== "production";

export const LOCAL_API = "http://localhost:3000";
export const PROD_API = "https://legal-expertise-versions.vercel.app";

export const API_BASE = isDev ? LOCAL_API : PROD_API;

export const isDevMode = isDev;

export default API_BASE;
