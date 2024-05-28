const Navbar = () => {
  return (
    <>
      <nav className=" py-2 flex justify-between bg-slate-700 text-white">
        <div className="log">
          <span className="font-bold text-xl mx-8">iTask</span>
        </div>
        <ul className="flex gap-4 mx-8">
          <li className="cursor-pointer hover:font-bold transition-all">
            Home{" "}
          </li>
          <li className="cursor-pointer hover:font-bold transition-all">
            About
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
