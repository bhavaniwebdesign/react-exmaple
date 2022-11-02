import React from "react";
import { LazyComponent } from "../common/utils";
import ErrorBoundary from "../../ErrorBoundary";
const Articles = () => {
  /* basic code splitting  with lazy*/
  /*Basically, it allows us to reduce the amount of code that our client side has to load when the user first visits our site, and it */
  const pageComponentOne = LazyComponent(() => import("./Article/One"));
  const pageComponentTwo = LazyComponent(() => import("./Article/Two"));
  return (
    <>
      <ErrorBoundary>
        <div>{pageComponentOne()}</div>
        <div>{pageComponentTwo()}</div>
      </ErrorBoundary>
    </>
  );
};

export default Articles;
