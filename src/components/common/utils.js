import React, { lazy, Suspense } from "react";

export const LazyComponent = (lazyImportFile) => {
  const Lazy = lazy(lazyImportFile);
  return (props) => (
    <Suspense fallback={<p>Componemt Loading .....</p>}>
      <Lazy {...props} />
    </Suspense>
  );
};
export default LazyComponent;
