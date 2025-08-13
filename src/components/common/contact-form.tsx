'use client';

import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import { ContactFormState } from '@/types/contact';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    type: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  const AUTO_REPLY_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.type ||
      !form.message
    ) {
      toast.error('Bütün sahələri doldurun!');
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message_type: form.type,
        message: form.message,
        to_name: 'Admin',
        to_email: 'epicpincontact@gmail.com',
        reply_to: form.email,
        current_date: new Date().toLocaleDateString('az-AZ', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      const adminEmailResult = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY,
      );

      if (AUTO_REPLY_TEMPLATE_ID) {
        try {
          await emailjs.send(
            SERVICE_ID,
            AUTO_REPLY_TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY,
          );
        } catch (error) {
          console.warn('Auto-reply email failed', error);
        }
      }

      if (adminEmailResult.status === 200) {
        toast.success(
          'Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.',
        );
        setForm({
          name: '',
          email: '',
          subject: '',
          type: '',
          message: '',
        });
        formRef.current?.reset();
      } else {
        throw new Error(
          `Email göndərilmədi. Status: ${adminEmailResult.status}`,
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-8"
      onSubmit={handleSubmitForm}
    >
      {/* Başlıq və təsvir */}
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">Əlaqə formu</h1>
        <p className="text-sm font-normal text-gray-400">
          Şikayət, Təklif və ya İstəklərinizi buradan qeyd edə bilərsiniz.
          Yazdıqlarınız oxunulur və anında cavablandırılır.
        </p>
      </div>

      {/* Grid sahəsi */}
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          className="dark:border-gray-100/20 text-sm h-12"
          type="text"
          name="name"
          placeholder="Adınızı yazın"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Input
          className="dark:border-gray-100/20 text-sm h-12"
          type="email"
          name="email"
          placeholder="Email adresinizi yazın"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Input
          className="dark:border-gray-100/20 text-sm h-12"
          type="text"
          name="subject"
          placeholder="Mövzu başlığını yazın"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          required
        />
        <Select
          value={form.type}
          onValueChange={(value) => setForm({ ...form, type: value })}
          required
        >
          <SelectTrigger className="w-full dark:border-gray-100/20 text-sm min-h-12">
            <SelectValue placeholder="Müraciət tipi seçin" />
          </SelectTrigger>
          <SelectContent className="dark:border-gray-100/20 text-sm">
            <SelectGroup>
              <SelectLabel>Müraciət tipi</SelectLabel>
              <SelectItem value="İstək">İstək</SelectItem>
              <SelectItem value="Təklif">Təklif</SelectItem>
              <SelectItem value="İrad">İrad</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Textarea
        className="w-full dark:border-gray-100/20 text-sm resize-none h-[150px]"
        name="message"
        placeholder="Mesajınızı yazın"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="w-fit bg-main font-medium hover:bg-orange-700 disabled:opacity-50 gap-2"
      >
        <SendHorizontal size={16} />
        {isLoading ? 'Göndərilir...' : 'Göndər'}
      </Button>
    </form>
  );
};

export default ContactForm;
