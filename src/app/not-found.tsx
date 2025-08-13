'use client';
import Lottie from 'lottie-react';
import NotFoundAnimation from '@/animations/notfound.json';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="siteContainer">
        <div className="w-full h-full flex items-center justify-center flex-col gap-5">
          <Lottie
            className="w-[400px] h-[400px]"
            animationData={NotFoundAnimation}
            loop
            autoplay
          />
          <h1 className="text-2xl font-medium text-center">
            Təəsüf ki, belə bir səhifə mövcud deyil
          </h1>
          <Button
            onClick={() => router.push('/')}
            className="bg-main p-2 rounded-full hover:bg-orange-600 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Geri qayıt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
