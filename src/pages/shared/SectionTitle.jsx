// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="inline text-center text-3xl my-5 uppercase font-bold">
        {title} <hr className="w-full mt-1 h-1 bg-black" />
        <hr className="w-full mt-1 h-1 bg-black" />
      </h1>
    </div>
  );
};

export default SectionTitle;
