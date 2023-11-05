"use client";

export default function Home() {
  const onSubmit = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let colour = `rgb(${r},${g},${b})`;

    document.body.style.backgroundColor = colour;
  };

  return (
    <div
      id="bg"
      className="
      flex
      flex-col
      items-center
      w-full
      h-full
      mt-24
    "
    >
      <h1
        className="
        text-6xl
      "
      >
        COLOUR FLIPPER
      </h1>
      <button
        type="submit"
        onClick={onSubmit}
        className="border-black border-slate-600 rounded-lg border-2 w-32 bg-slate-200 hover:border-slate-50 p-2"
      >
        Random!
      </button>
    </div>
  );
}
