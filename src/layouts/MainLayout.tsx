import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import React, { ReactNode } from 'react';


interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
    <Navbar/>
      <main>{children}</main>
    <Footer/>
    </>
  );
}