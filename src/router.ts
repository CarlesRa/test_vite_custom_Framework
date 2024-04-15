import { PageNotFound } from "./page-not-found";
import { routes } from "./routes";

export const router = async () => {
  
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  });

  let match = potentialMatches.find(potentialMatch =>
    potentialMatch.isMatch);

  // No matches
  if (!match) {
    match = {
      route: { path: '404', view: PageNotFound },
      isMatch: true,
    }
  }

  const view = new match.route.view();

  if (view) {    
    view.render();
  }

  // when url change call router function
  window.onpopstate = () => router();
}