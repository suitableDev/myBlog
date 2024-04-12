import SVG from "react-inlinesvg";

export default function ReviewBox({ info }: any) {
  const symbolsArray = Array.from({ length: info.rating }, (_, index) => index);

  return (
    <>
    <div className="dark:bg-white bg-black max-width mx-auto text-primaryDark dark:text-primary text-left pl-2 font-extrabold">Vibe rating:</div>
    <div className={Container}>
      <div className={left}>
        <p className="flex flex-row justify-center text-left font-bold">
          {info.ratingblurb}
        </p>
      </div>
      <div className={right}>
        <div className="flex flex-row justify-center">
          {symbolsArray.map((_, index) => (
            <span key={index}>
              <SVG src={info.symbol.svg}/>
            </span>
          ))}
        </div>
      </div>
    </div>
          </>
  );
}

const Container = `
  py-8
  px-2
  flex
  flex-col
  gap-4
  mx-auto
  w-full
  max-width
  border-y
  border-primary
  dark:border-primaryDark
  sm:flex-row
  drop-shadow-light
  dark:drop-shadow-dark
  text-3xl
`;

const left = `
  flex
  flex-row
  w-full
  items-center
  justify-center
  sm:w-2/3
  sm:h-1/2
  sm:justify-start
  order-1
`;

const right = `
  flex
  flex-row
  w-full
  items-center
  justify-center
  sm:w-1/3
  sm:justify-start
  order-2
`;
