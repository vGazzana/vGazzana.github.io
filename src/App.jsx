function App() {
  return (
    <section className="h-screen flex items-center justify-center">
      <article className="flex flex-col-reverse place-items-center">
        <div>
          <h1 className="text-5xl text-stone-800 text-center order-last">
            Ola, me chamo <span className="font-semibold text-stone-950">Vinicius</span>
          </h1>
        </div>
        <div className="h-60 aspect-square overflow-hidden rounded-[30%] border-4 border-black/10 order-1">
          <img src="https://github.com/vGazzana.png" alt="" />
        </div>
      </article>
    </section>
  );
}

export default App;
