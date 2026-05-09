import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TermsSection from '@/components/sections/TermsSection';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <TermsSection />
      </div>
      <Footer />
    </main>
  );
}
