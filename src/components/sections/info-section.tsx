import { ShieldCheck, Rocket, Wallet } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      <div className="bg-gray-50 dark:bg-neutral-800/50 flex-col flex items-center justify-center gap-3 p-6 rounded-lg border dark:border-gray-100/10 border-gray-200">
        <ShieldCheck color="#f97316" size={48} />
        <h2 className="text-center text-main font-semibold text-xl">
          Güvənli köçürmə
        </h2>
        <p className="text-center text-sm">
          Heç bir şəxsi məlumat tələb etmədən güvənli şəkildə köçürmə.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-neutral-800/50 flex-col flex items-center justify-center gap-3 p-6 rounded-lg border dark:border-gray-100/10 border-gray-200">
        <Rocket color="#f97316" size={48} />
        <h2 className="text-center text-main font-semibold text-xl">
          Sürətli köçürmə
        </h2>
        <p className="text-center text-sm">
          Məhsullarınızı sürətli köçürün və zamana qənaət edin. Güvənli və
          sürətli şəkildə köçürmə.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-neutral-800/50 flex-col flex items-center justify-center gap-3 p-6 rounded-lg border dark:border-gray-100/10 border-gray-200">
        <Wallet size={48} color="#f97316" />
        <h2 className="text-center text-main font-semibold text-xl">
          Sərfəli qiymətlər
        </h2>
        <p className="text-center text-sm">
          Ucuz və sərfəli qiymətlərlə ödəniş edin və pulunuza qənaət edin.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
