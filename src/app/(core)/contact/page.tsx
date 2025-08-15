import ContactForm from '@/components/common/contact-form';
import RocketAnimation from '@/components/common/rocket-animation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bizimlə əlaqə',
  description:
    'Epicpin Store — Bizimlə əlaqəyə keçin, istək və təkliflərinizi bizə çatdırın.',
  authors: [{ name: 'Faril Mammadov', url: 'https://www.faril.dev/' }],
  keywords: [
    'Epicpin Store',
    'PUBG Mobile UC',
    'Valorant Points',
    'FC 25 Points',
    'Point Blank Cash',
    'TikTok jeton',
    'oyun ödənişləri',
    'epin satış',
    'ucuz oyun valyutası',
  ],
  icons: {
    icon: '/images/logo-main.svg',
  },
};

const Contact = () => {
  return (
    <div className="w-full pt-[100px]">
      <div className="siteContainer">
        <div className="grid lg:grid-cols-[55fr_45fr] grid-cols-1 gap-4 py-10">
          <ContactForm />
          <div className="flex justify-center">
            <RocketAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
