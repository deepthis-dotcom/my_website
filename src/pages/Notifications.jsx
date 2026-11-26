import { Bell, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { notices } from '../data/demo';
const icons={warning:AlertTriangle,info:Info,success:CheckCircle2};
export default function Notifications(){return <><div className="page-heading"><div><p className="eyebrow">UPDATES</p><h1>Notifications</h1><p className="muted">Important attendance and system updates.</p></div></div><div className="panel notice-list">{notices.map((n,i)=>{const Icon=icons[n.type];return <article className="notice" key={i}><div className={`notice-icon ${n.type}`}><Icon size={19}/></div><div><b>{n.title}</b><p className="muted">{n.body}</p><small>{n.time}</small></div></article>})}</div></>}
