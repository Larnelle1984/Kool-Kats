import React from 'react';
import { gallery } from '../data/gallery';
import GalleryItem from '../components/GalleryItem';

export default function Gallery() {
  return (
    <section id="gallery" className="pt-12">
      <div className="container mx-auto px-0 max-w-full">
        {/* Use CSS Grid with no gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {gallery.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
