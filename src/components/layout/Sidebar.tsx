import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, History } from 'lucide-react';
import { ROUTES } from '@/constants';

const navItems = [
  { to: ROUTES.DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
  { to: ROUTES.CREATE, icon: PlusCircle, label: 'Create Page' },
  { to: ROUTES.HISTORY, icon: History, label: 'History' },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 min-h-screen border-r border-slate-200 bg-white px-4 py-6">
      <nav className="flex flex-col gap-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
