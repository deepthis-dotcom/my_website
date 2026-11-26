import { motion } from 'framer-motion';
import { Users, CheckCircle2, GraduationCap, AlertTriangle } from 'lucide-react';
const icons = { users: Users, check: CheckCircle2, graduation: GraduationCap, alert: AlertTriangle };
export default function StatCard({ item, index = 0 }) {
  const Icon = icons[item.icon] || Users;
  return <motion.article className="stat-card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .07 }}>
    <div className="stat-top"><span>{item.label}</span><span className="icon-wrap"><Icon size={19}/></span></div>
    <strong>{item.value}</strong><small>{item.change}</small>
  </motion.article>;
}
