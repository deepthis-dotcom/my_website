import { useMemo, useState } from 'react';
import { Search, UserPlus } from 'lucide-react';
import { students } from '../data/demo';
import { attendancePercent } from '../utils/attendance';
export default function Students() {
 const [query,setQuery]=useState('');
 const filtered=useMemo(()=>students.filter(s=>(s.name+s.id+s.dept).toLowerCase().includes(query.toLowerCase())),[query]);
 return <><div className="page-heading"><div><p className="eyebrow">DIRECTORY</p><h1>Students</h1><p className="muted">Browse and monitor student attendance.</p></div><button className="primary-button" onClick={()=>alert('Connect this button to the student creation API in the next implementation step.')}><UserPlus size={16}/> Add student</button></div><div className="panel"><div className="toolbar"><div className="search inline-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name, ID or department"/></div><span className="muted">{filtered.length} records</span></div><div className="table-wrap"><table><thead><tr><th>STUDENT</th><th>DEPARTMENT</th><th>SEMESTER</th><th>ATTENDED</th><th>ATTENDANCE</th><th>STATUS</th></tr></thead><tbody>{filtered.map(s=>{const p=attendancePercent(s.attended,s.conducted);return <tr key={s.id}><td><b>{s.name}</b><small>{s.id}</small></td><td>{s.dept}</td><td>{s.semester}</td><td>{s.attended}/{s.conducted}</td><td>{p.toFixed(1)}%</td><td><span className={p<75?'status danger':'status success'}>{p<75?'Shortage':'On track'}</span></td></tr>})}</tbody></table></div></div></>;
}
