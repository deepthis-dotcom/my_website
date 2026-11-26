import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Attendance from './pages/Attendance';
import Notifications from './pages/Notifications';
import Reports from './pages/Reports';
export default function App(){return <Layout><Routes><Route path="/" element={<Dashboard/>}/><Route path="/students" element={<Students/>}/><Route path="/attendance" element={<Attendance/>}/><Route path="/notifications" element={<Notifications/>}/><Route path="/reports" element={<Reports/>}/><Route path="*" element={<Dashboard/>}/></Routes></Layout>}
