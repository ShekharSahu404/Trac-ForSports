import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { FaUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
export default function Example({ username, handleLogout }) {
  return (
    <div className="   text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-[#0f32fa] py-1.5 px-3 text-sm/2 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#031881] data-[open]:bg-[#031881] data-[focus]:outline-1 data-[focus]:outline-white">
          <FaUser className="size-4 text-white" />
          {username}

          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white bg-[#040a2d] p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <a
                href="/addevent"
                className="group flex w-full items-center gap-2 rounded-lg font-pop py-1.5 px-3 data-[focus]:bg-white/10"
              >
                <PencilIcon className="size-4 fill-white/30" />
                Organize Event
              </a>
            </MenuItem>

            <MenuItem>
              <Link to={"/myorder"}>
                <button className="group flex w-full items-center gap-2 rounded-lg font-pop py-1 px-3 data-[focus]:bg-white/10">
                  <Square2StackIcon className="size-4 fill-white/30" />
                  My Events
                </button>
              </Link>
            </MenuItem>

            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
              <Link to={"/myorder"}>
                <button className="group flex w-full items-center gap-2 rounded-lg font-pop py-1 px-3 data-[focus]:bg-white/10">
                  <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
                  Tickets
                </button>
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={handleLogout}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 font-pop data-[focus]:bg-white/10"
              >
                <TbLogout className="size-4 fill-white/30" />
                Log Out
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
