import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const barData = [
  { game: "Grade 3", users: 120 },
  { game: "Grade 5", users: 200 },
  { game: "Grade 7", users: 80 },
];

const pieData = [
  { name: "Mobile Users", value: 400 },
  { name: "Desktop Users", value: 300 },
  { name: "Tablet Users", value: 100 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316"];

const chartVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AdminSec = () => {
  const [barRef, barInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [pieRef, pieInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="admin_sec">
      <h2>Admin Analytics</h2>
      <div className="charts_container">
        {/* Bar Chart */}
        <motion.div
          className="chart"
          ref={barRef}
          variants={chartVariants}
          initial="hidden"
          animate={barInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          <h3>Users per Game</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="game" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#4f46e5" animationDuration={1200} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          className="chart"
          ref={pieRef}
          variants={chartVariants}
          initial="hidden"
          animate={pieInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3>User Device Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                animationDuration={1000}
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSec;
