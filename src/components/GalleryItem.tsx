import React, { useEffect } from 'react';
import GLightbox from 'glightbox';

type Props = {
  item: {
    id: number;
    image: string;
  };
};

export default function GalleryItem({ item }: Props) {
  useEffect(() => {
    GLightbox({ selector: '.gallery-lightbox' });
  }, []);

  return (
    <div className="overflow-hidden border-r-[3px] border-b-[3px] border-[#454035] aspect-[4/3]">
      <a href={item.image} className="gallery-lightbox block w-full h-full">
        <img
          src={item.image}
          alt={`Gallery Image ${item.id}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </a>
    </div>
  );
}
