import { Bell, Search, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';
export default function Layout({ children }) {
  const [light,setLight] = useState(false);
  return <div className={light ? 'app-shell light' : 'app-shell'}>
    <Sidebar/><main className="main-area">
      <header className="topbar"><div className="mobile-brand">SMART<span className="accent">TENDANCE</span></div><div className="search"><Search size={17}/><input placeholder="Search students, subjects..."/></div><div className="top-actions"><button className="icon-button" onClick={()=>setLight(!light)} title="Toggle theme">{light?<Moon size={18}/>:<Sun size={18}/>}</button><button className="icon-button" title="Notifications"><Bell size={18}/></button><div className="avatar">AD</div></div></header>
      <div className="page-content">{children}</div>
      <footer>SMARTTENDANCE · Attendance made smarter</footer>
    </main>
  </div>;
}
