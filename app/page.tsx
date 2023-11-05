"use client";

export default function Home() {
  const onSubmit = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let colour = `rgb(${r} + ${g} + ${b})`;

    document.body.style.backgroundColor = colour;
    console.log(colour);
  };

  return (
    <div
      id="bg"
      className="
      flex
      flex-col
      items-center
      justify-center
      w-full
      h-full
    "
    >
      <h1>Colour Flipper</h1>
      <button
        type="submit"
        onClick={onSubmit}
        className="border-black border-solid border-2"
      >
        Random!
      </button>
    </div>
  );
}
