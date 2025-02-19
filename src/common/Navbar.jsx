const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-8">
        <img
          src="/navbar/company.svg"
          alt="company-logo"
          className="w-[13vw] sm:w-[4vw]"
        />
        <h1 className="text-[#828282] text-[1.1rem]">Index / Home</h1>
        <img src="/navbar/menu.svg" alt="menue" className="text-black" />
      </div>
    </>
  );
};

export default Navbar;
