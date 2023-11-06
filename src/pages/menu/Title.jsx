/* eslint-disable react/prop-types */
const Title = ({ text }) => {
  return (
    <div className="capitalize flex flex-col justify-center items-center">
      <h2>{text}</h2>
      <div className="underline h-[2px] w-12 bg-green-500 mt-1"></div>
    </div>
  );
};

export default Title;
