const Btn_Secondary = ({ children }) => {
  return (
    <button className='bg-white text-black py-2 px-6 w-full uppercase flex items-center gap-4 hover:opacity-60 transition-all'>
      <div className='mx-auto font-bold tracking-widest text-xs md:text-sm'>
        {children}
      </div>
    </button>
  );
};

export default Btn_Secondary;
