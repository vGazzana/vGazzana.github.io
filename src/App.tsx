import { useRef, useState } from "react";
import BatmanSound from "./assets/effeitoOpeningBatman.mp3";

function App() {
  const [start, setStart] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startSite = () => {
    audioRef.current?.play();
    setStart((prev) => !prev);
  };

  return (
    <main className="page-container">
      {start ? (
        <section>
          <div className="superSpinner">
            <h1 className="font-serif font-extrabold dark:text-white">
              Vinicius Gazzana
            </h1>
            <h2 className="font-mono font-semibold dark:text-white">
              Front-End Developer
            </h2>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={startSite}
            className="h-24 w-24 animate-bounce rounded-full bg-zinc-800 p-2 text-white dark:bg-zinc-50 dark:text-black"
          >
            ENTER
          </button>
          <div className="bounce-shadow w-12 rounded-lg py-2 px-4  "></div>
        </div>
      )}
      <audio controls ref={audioRef} className="hidden">
        <source src={BatmanSound} type="audio/ogg" />
        SOUND_VINHETA_BATMAN.MP3
      </audio>
    </main>
  );
}

export default App;
