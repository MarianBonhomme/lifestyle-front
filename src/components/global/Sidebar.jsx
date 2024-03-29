import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="h-screen flex flex-col justify-between items-center py-10">
      <div className="flex flex-col gap-10">
        <NavLink to="nutrition" className="relative">
          <Icon icon="fa-solid:apple-alt" width={40} height={40} className="text-green cursor-pointer" />
        </NavLink>
        <NavLink to="sport" className="relative">
          <Icon icon="mingcute:fitness-fill" width={40} height={40} className="text-red cursor-pointer" />
        </NavLink>
        <NavLink to="finance" className="relative">
          <Icon icon="healthicons:money-bag" width={40} height={40} className="text-yellow cursor-pointer" />
        </NavLink>
      </div>
      <NavLink to="settings" className="relative">
        <Icon icon="mage:settings-fill" width={40} height={40} className="text-gray cursor-pointer" />
      </NavLink>
    </nav>
  )
}