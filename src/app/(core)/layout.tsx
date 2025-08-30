import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { Analytics } from '@vercel/analytics/next';
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Analytics />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
