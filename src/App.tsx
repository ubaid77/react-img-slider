import React, { Suspense, useCallback, useState } from "react";
import Sound from "react-sound";
import audioClip from "./Audio/bg-audio.mp3";

const ViewSlider = React.lazy(
  () => import(/* webpackChunkName: "slider" */ "./Containers/SliderContainer")
);

function App() {
  const [isPlaying, SetisPalying] = useState(false);

  const togglePlay = useCallback(() => {
    SetisPalying((prev) => !prev);
  }, []);

  return (
    <Suspense fallback={<div className="loading" />}>
      <div className="app">
        <ViewSlider togglePlay={togglePlay} isPlaying={isPlaying} />
      </div>

      <Sound
        url={audioClip}
        playStatus={isPlaying ? "PLAYING" : "PAUSED"}
        playFromPosition={0}
        loop={true}
      />
    </Suspense>
  );
}

export default App;
