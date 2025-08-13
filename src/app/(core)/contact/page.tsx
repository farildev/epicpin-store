import ContactForm from '@/components/common/contact-form';
import RocketAnimation from '@/components/common/rocket-animation';
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
