import { TOPBARITEMS } from "@/lib/types/HeaderType";
import Link from "next/link";
import React from "react";
type TopbarProps = {
  topbarmenu: TOPBARITEMS[];
};

const TopbarMenu = ({ topbarmenu }: TopbarProps) => {
  return (
    <ul className="flex gap-2.5">
      {topbarmenu &&
        topbarmenu.map((item) => {
          if (item.__component === "menu.menu-button") {
            return (
              <li key={item?.id}>
                <Link
                  href={item?.url}
                  className={`font-semibold text-white text-xs primary ${item.class}`}
                >
                  {item?.title}
                </Link>
              </li>
            );
          }
          if (item.__component === "menu.menu-link") {
            return (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="font-semibold text-white text-xs"
                >
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
    </ul>
  );
};

export default TopbarMenu;
