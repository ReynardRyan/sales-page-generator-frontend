import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function MainLayout() {
  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 min-w-0 overflow-y-auto">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
