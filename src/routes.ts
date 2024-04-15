import { Home } from "./home";
import { PageNotFound } from "./page-not-found";

export const routes = [
  { path: '/', view: Home},  
  { path: '/404', view: PageNotFound }
]