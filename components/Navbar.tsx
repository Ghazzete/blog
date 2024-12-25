"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./theme-btn";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-xl md:text-4xl font-bold pt-4">FizzaBlog</div>
        </Link>
 
        <div className="hidden md:flex md:gap-8 items-center">
          <Link href="/"className="hover:font-bold hover:scale-105 transition-transforme duration-300">Home</Link>
          <Link href="/about"className="hover:font-bold hover:scale-105 transition-transforme duration-300">About</Link>
          <Link href="/blog"className="hover:font-bold hover:scale-105 transition-transforme duration-300">Blog</Link>
          <Link href="/contact"className="hover:font-bold hover:scale-105 transition-transforme duration-300">contact</Link>
          <div className="flex items-center">
            <Link href="/login" className="mr-2">
            <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup" className="mr-2">
            <Button variant="outline">Sign Up</Button>
            </Link>
            <ModeToggle/>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex ">
        <ModeToggle/>
          <Sheet>
            {/* Trigger Button */}
            <SheetTrigger>
              <Menu className="w-6 h-6 cursor-pointer ml-2"/>
            </SheetTrigger>
           
            {/* Drawer Content */}
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold mt-8">FizzaBlog</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4 items-center">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <div className="flex items-center">
                  <Link href="/login">
                  <Button variant="outline">
                    Log In
                  </Button>
                  </Link>
                  <Link href="/signup">
                  <Button variant="outline" className="mx-2">
                    Sign Up
                  </Button>
                  </Link>
                  
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
