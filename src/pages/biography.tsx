import React from "react";
import MainLayout from "../layouts/MainLayout";
import BiographySection from "../components/biographysection";
import Work from "../components/Work";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import VisionAndMission from "../components/visionandmission";


export default function Biography() {

    return (
        <MainLayout>
            <BiographySection/>
            <VisionAndMission/>
            <Work/>
            <Gallery/>
            <Contact/>
        </MainLayout>
    )
}