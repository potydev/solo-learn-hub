import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Python",
    icon: "🐍",
    color: "#3776AB",
    learners: "12.5M",
    lessons: 96,
    rating: 4.9,
    level: "Beginner",
  },
  {
    title: "JavaScript",
    icon: "⚡",
    color: "#F7DF1E",
    learners: "10.2M",
    lessons: 112,
    rating: 4.8,
    level: "Beginner",
  },
  {
    title: "HTML & CSS",
    icon: "🎨",
    color: "#E34F26",
    learners: "15.1M",
    lessons: 78,
    rating: 4.9,
    level: "Beginner",
  },
  {
    title: "React",
    icon: "⚛️",
    color: "#61DAFB",
    learners: "4.8M",
    lessons: 64,
    rating: 4.7,
    level: "Intermediate",
  },
  {
    title: "Java",
    icon: "☕",
    color: "#007396",
    learners: "8.3M",
    lessons: 88,
    rating: 4.8,
    level: "Beginner",
  },
  {
    title: "C++",
    icon: "🔷",
    color: "#00599C",
    learners: "6.1M",
    lessons: 94,
    rating: 4.7,
    level: "Intermediate",
  },
  {
    title: "SQL",
    icon: "🗃️",
    color: "#336791",
    learners: "5.2M",
    lessons: 52,
    rating: 4.8,
    level: "Beginner",
  },
  {
    title: "Swift",
    icon: "🍎",
    color: "#FA7343",
    learners: "2.9M",
    lessons: 68,
    rating: 4.6,
    level: "Intermediate",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose your{" "}
            <span className="text-gradient">learning path</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start from scratch or build on your skills. We have courses for every level.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.title} {...course} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View all courses
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
