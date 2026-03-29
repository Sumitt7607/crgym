import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const schedule = [
  { time: "06:00", mon: "HIIT Blast", tue: "Yoga Flow", wed: "HIIT Blast", thu: "Yoga Flow", fri: "HIIT Blast", sat: "Open Gym", sun: "—" },
  { time: "08:00", mon: "Strength", tue: "CrossFit", wed: "Strength", thu: "CrossFit", fri: "Strength", sat: "Zumba", sun: "Yoga" },
  { time: "10:00", mon: "Yoga", tue: "Boxing", wed: "Yoga", thu: "Boxing", fri: "Yoga", sat: "CrossFit", sun: "—" },
  { time: "17:00", mon: "CrossFit", tue: "Strength", wed: "CrossFit", thu: "HIIT Blast", fri: "CrossFit", sat: "—", sun: "—" },
  { time: "19:00", mon: "Boxing", tue: "Zumba", wed: "Boxing", thu: "Strength", fri: "Boxing", sat: "—", sun: "—" },
];

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ScheduleSection = () => {
  return (
    <SectionWrapper id="schedule" className="bg-gradient-dark-reverse">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Weekly Schedule</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            CLASS <span className="text-gradient-primary">TIMETABLE</span>
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-3 text-left text-sm uppercase tracking-wider text-muted-foreground">Time</th>
                {dayLabels.map((d) => (
                  <th key={d} className="py-4 px-3 text-center text-sm uppercase tracking-wider text-muted-foreground">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.time} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-3 font-heading text-xl text-primary">{row.time}</td>
                  {days.map((day) => (
                    <td key={day} className="py-4 px-3 text-center text-sm">
                      <span className={row[day] !== "—" ? "text-foreground" : "text-muted-foreground/30"}>
                        {row[day]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ScheduleSection;
