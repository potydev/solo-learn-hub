import { motion } from "framer-motion";
import { Users, Clock, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  icon: string;
  color: string;
  learners: string;
  lessons: number;
  rating: number;
  level: string;
  index: number;
}

const CourseCard = ({
  title,
  icon,
  color,
  learners,
  lessons,
  rating,
  level,
  index,
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl bg-gradient-card border border-border p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent" />
        
        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
            style={{ backgroundColor: `${color}20` }}
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Level badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-secondary text-muted-foreground mb-4">
            {level}
          </span>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{learners}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{lessons} lessons</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            <Star className="h-4 w-4 fill-yellow text-yellow" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
