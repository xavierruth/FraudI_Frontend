'use client'

import Image from "next/image";
import logo from "@/assets/Logo/LOGO.svg";
import { NavItem, NavItemDash } from "@/constants";
import { BTNGhostShort } from "../UI/Buttons";
import { LogIn, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const NavMenu = () => {

    const router = useRouter(); 
    
    const handlelogin = () => {
      router.push("/login")
    }

  return (
    <nav className="sticky top-0 z-50 py-4 justify-between bg-[#f9f9fb] backdrop-blur-sm border-b border-[rgba(249,249,251,0.8)] shadow-xl/5">
        <div className="container px mx-auto relative ">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Logo + título */}
                    <Image src={logo} className="h-18 w-auto mr-2" alt="logo" />
                    <span className="text-4xl tracking-tight text-teal-700 font-serif font-semibold translate-y-[1px]">FraudI</span>
                </div>
                    {/* tab */}
                <ul className="font-sans text-md hidden lg:flex ml-15 space-x-12 text-teal-700">
                    {NavItem.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex space-x-4 items-center">
                    <BTNGhostShort type="button" onClick={handlelogin}>
                        <LogIn className="w-5 h-5 mr-2" />
                        Entrar
                    </BTNGhostShort>
                </div>
            </div>
        </div>
    </nav>
  );
};


export const NavDash = () => {

    const router = useRouter(); 
    
    const handlehome = () => {
      router.push("/home")
    }

  return (
    <nav className="sticky z-10 top-0 py-4 justify-between bg-[#f9f9fb] backdrop-blur-sm border-b border-[rgba(249,249,251,0.8)] shadow-xl/5">
        <div className="container px mx-auto relative ">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Logo + título */}
                    <Image src={logo} className="h-18 w-auto mr-2" alt="logo" />
                    <span className="text-4xl tracking-tight text-teal-700 font-serif font-semibold translate-y-[1px]">FraudI</span>
                </div>
                    {/* tab */}
                <ul className="font-sans text-md hidden lg:flex ml-15 space-x-12 text-teal-700">
                    {NavItemDash.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex space-x-4 items-center">
                    <BTNGhostShort type="button" onClick={handlehome}>
                        <LogOut className="w-5 h-5 mr-2" />
                        Sair
                    </BTNGhostShort>
                </div>
            </div>
        </div>
    </nav>
  );
};




