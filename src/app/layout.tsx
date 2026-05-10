import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'Placement Lab - Job-Oriented Courses',
  description: 'Your career guidance and job-oriented learning platform. Land your dream job with Placement Lab.',
  icons: {
    icon: 'https://github.com/user-attachments/assets/eb93e301-34f6-4985-973a-1e000952a02a',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" toastOptions={{ style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.1)' } }} />
      </body>
    </html>
  );
}
