import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Work from "../components/Work";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";


export default function Home() {

    return (
        <MainLayout>
            <HeroSection/>
            <AboutSection/>
            {/*<ServicesList/>*/}
            <WhyUs/>
            <Work/>
            <Gallery/>
            <Contact/>
        </MainLayout>
    )
}
