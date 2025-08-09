import React from 'react';
import { whyUs } from '../data/WhyUs';
import SectionTitle from '../components/SectionTitle';
import WhyUsCard from '../components/WhyUsCard';

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-neutralDark py-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Our Services" subtitle="Tailored Visuals for Every Occasion" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {whyUs.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}