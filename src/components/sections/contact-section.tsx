'use client';

import React from 'react';
import { SendHorizontal } from 'lucide-react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const ContactSection: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-end gap-4 py-10">
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="name">Adınız</Label>
        <Input
          className="dark:border-gray-100/20 shadow-none text-sm"
          type="text"
          id="name"
          placeholder="Adınızı daxil edin"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          className="dark:border-gray-100/20 shadow-none text-sm"
          type="email"
          id="email"
          placeholder="Email adresinizi daxil edin"
        />
      </div>
      <Button className="text-sm font-medium text-white bg-main flex items-center gap-2">
        <SendHorizontal size={18} /> Bizə yazın
      </Button>
    </div>
  );
};

export default ContactSection;
