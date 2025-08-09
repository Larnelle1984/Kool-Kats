import React, { useRef } from 'react';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location:',
      text: '14 Hope Street, Cape Town, Western Cape 8001',
    },
    {
      icon: <FaClock />,
      label: 'Open Hours:',
      text: 'Monday–Saturday:\n11:00 AM – 23:00 PM',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email:',
      text: 'info@example.com',
    },
    {
      icon: <FaPhone />,
      label: 'Call:',
      text: '+27658300550',
    },
  ];

  // Replace these with your EmailJS values:
  const SERVICE_ID = 'service_85m7drd';
  const TEMPLATE_ID = 'template_s4f1nzc';
  const USER_ID = 'Eb2lH7DpwDBMxd8mj';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        alert('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch((error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact-form" className="py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <SectionTitle title="Contact" subtitle="Contact Us" />
      </div>

      <div data-aos="fade-up" className="my-8">
        <iframe
          className="w-full h-[350px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3407834226005!2d18.418596760584453!3d-33.93236218065579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6781e1071b21%3A0x100554eaf08eb14f!2s105%20Hope%20St%2C%20Gardens%2C%20Cape%20Town%2C%208001!5e0!3m2!1sen!2sza!4v1738944930824!5m2!1sen!2sza"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="space-y-10 order-1 md:order-none">
            {contactDetails.map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="w-11 h-11 flex items-center justify-center bg-primary rounded-full text-white text-lg shrink-0">
                  {item.icon}
                </div>
                <div className="pl-5">
                  <h4 className="text-lg font-medium">{item.label}</h4>
                  <p className="text-sm text-gray-300 whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 order-2 md:order-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-6 rounded-md border border-[#625b4b] h-full"
            >
              <div className="md:flex gap-6">
                <input
                  type="text"
                  name="name"
                  className="w-full bg-transparent border border-[#625b4b] text-white px-4 py-2 placeholder-[#a49b89] focus:outline-none focus:text-white"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-full mt-4 md:mt-0 bg-transparent border border-[#625b4b] text-white px-4 py-2 placeholder-[#a49b89] focus:outline-none focus:text-white"
                  placeholder="Your Email"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                className="w-full bg-transparent border border-[#625b4b] text-white px-4 py-2 placeholder-[#a49b89] focus:outline-none focus:text-white"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows={4}
                className="w-full bg-transparent border border-[#625b4b] text-white px-4 py-2 placeholder-[#a49b89] focus:outline-none focus:text-white"
                placeholder="Message"
                required
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-2 rounded-full transition duration-300 hover:bg-primary/90"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
