"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { themes } from "@/constants";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="bg-red-500 border-none">
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "light" ? (
            <Image
              src="/assets/icons/theme-sun.svg"
              alt="theme-sun"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/assets/icons/theme-moon.svg"
              alt="theme-moon"
              width={30}
              height={30}
            />
          )}
        </MenubarTrigger>
        <MenubarContent
          className="dark:bg-slate-800 dark:border-slate-900 py-2 bg-white 
        text-slate-950 font-semibold min-w-[120px]"
        >
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              onClick={() => {
                setMode(item.value);

                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image src={item.icon} alt={item.value} width={20} height={20} />
              <p className="gap-3 px-5">{item.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
