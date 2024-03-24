const BackBtn = () => {
  return (
    <button className="gradient-text border rounded-lg px-10 py-2 font-bold">
      &lt; GO BACK
    </button>
  );
};

const BookBtn = () => {
  return (
    <button className="gradient-background text-white border rounded-lg px-10 py-3 font-bold">
      BOOK NOW &gt;
    </button>
  );
};

const ActionBtns = () => {
  return (
    <div className="w-full p-4 flex justify-between">
      <BackBtn />
      <BookBtn />
    </div>
  );
};

export default ActionBtns;
