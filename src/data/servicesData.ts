export interface ServiceData {
  id: string;
  image: string;
  title: string;
  description: string;
  number: string;
}

export const services: ServiceData[] = [
  {
    id: '1',
    image: '/assets/services/services1.jpg',
    title: 'Motion Graphics & Animation',
    description: 'Our team creates high-impact commercials tailored to your marketing goals, designed to captivate.',
    number: '01'
  },
  {
    id: '2',
    image: '/assets/services/services2.jpg',
    title: 'Post-Production & Editing',
    description: 'Our editing team refines your footage, adding seamless cuts, color correction, sound design.',
    number: '02'
  },
  {
    id: '3',
    image: '/assets/services/services3.jpg',
    title: 'Visual Storytelling',
    description: 'We craft compelling narratives to bring your brand vision to life through powerful visuals.',
    number: '03'
  },
];
