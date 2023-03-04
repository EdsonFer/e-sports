import "./styles/main.css";

import logoImg from "./assets/Logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          Duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="/image 1.png" alt="" />
        </a>
        <a href="">
          <img src="/image 2.png" alt="" />
        </a>
        <a href="">
          <img src="/image 3.png" alt="" />
        </a>
        <a href="">
          <img src="/image 5.png" alt="" />
        </a>
        <a href="">
          <img src="/image 6.png" alt="" />
        </a>
        <a href="">
          <img src="/image 7.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
