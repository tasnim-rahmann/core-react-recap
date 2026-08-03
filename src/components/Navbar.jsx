import { TbCoinTakaFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto my-8">
      <div>
        <img src="/logo.png" alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-10 uppercase text-sm">
          <li className="hover:text-black/60 transition-colors duration-200">
            <a href="">Home</a>
          </li>
          <li className="hover:text-black/60 transition-colors duration-200">
            <a href="">Fixture</a>
          </li>
          <li className="hover:text-black/60 transition-colors duration-200">
            <a href="">Teams</a>
          </li>
          <li className="hover:text-black/60 transition-colors duration-200">
            <a href="">Schedules</a>
          </li>
          <li className="flex items-center gap-2 border px-4 py-2 rounded-sm shadow-md">
            0 <TbCoinTakaFilled size={20} color="gold" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
