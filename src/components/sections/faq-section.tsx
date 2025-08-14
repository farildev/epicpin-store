import CustomAccordion from '@/components/common/custom-accordion';

export default function FaqSection() {
  return (
    <div className="flex flex-col justify-center gap-5 pb-5">
      <h1 className="text-2xl font-semibold">Ən çox verilən suallar</h1>
      <CustomAccordion />
    </div>
  );
}
