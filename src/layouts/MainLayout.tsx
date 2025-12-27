import { Outlet } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content Area */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
