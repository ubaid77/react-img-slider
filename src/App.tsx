import React, { Suspense } from "react";

const ViewSlider = React.lazy(
  () => import(/* webpackChunkName: "slider" */ "./Containers/SliderContainer")
);

function App() {
  return (
    <Suspense fallback={<div className="loading" />}>
      <ViewSlider />
    </Suspense>
  );
}

export default App;
