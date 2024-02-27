'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Menu, MenuItem, ProductItem ,HoveredLink } from "./components/ui/navbar-menu"; // Update the path to your components
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleSetActive = (item: string | null) => { // Update the parameter type to string | null
    setActiveItem(item);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" text-center p-10">
          <Menu setActive={handleSetActive}>
            <MenuItem setActive={handleSetActive} active={activeItem} item="Home">
              <HoveredLink href="/">Link 1</HoveredLink>
              <HoveredLink href="/">Link 2</HoveredLink>
            </MenuItem>
            <MenuItem setActive={handleSetActive} active={activeItem} item="Home">
              <ProductItem
                title="Product 1"
                description="Description of Product 1"
                href="/product1"
                src="/product1.jpg"
              />
            </MenuItem>
  
            {/* Add more MenuItems for other menu items */}
          </Menu>
          </div>
        {children}
      </body>
    </html>
  );
}
