import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, ClipboardCheck, Bell, FileBarChart, GraduationCap } from 'lucide-react';
const links = [
  ['/','Overview',LayoutDashboard], ['/students','Students',Users],
  ['/attendance','Attendance',ClipboardCheck], ['/notifications','Notifications',Bell],
  ['/reports','Reports',FileBarChart]
];
export default function Sidebar() {
  return <aside className="sidebar">
    <div className="brand"><span className="brand-mark">S</span><span>SMART<span className="accent">TENDANCE</span></span></div>
    <div className="workspace-label">WORKSPACE</div>
    <nav>{links.map(([to,label,Icon]) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}><Icon size={18}/>{label}</NavLink>)}</nav>
    <div className="sidebar-bottom"><div className="avatar">AD</div><div><b>Administrator</b><small>System Admin</small></div></div>
  </aside>;
}
