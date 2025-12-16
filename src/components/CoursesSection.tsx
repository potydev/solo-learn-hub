import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  level: string | null;
  lessons_count: number | null;
}

const CoursesSection = () => {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("title");
      if (error) throw error;
      return data as Course[];
    },
  });

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

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses?.map((course, index) => (
              <CourseCard
                key={course.id}
                title={course.title}
                icon={course.icon || "📚"}
                color={course.color || "#6366f1"}
                learners="1M+"
                lessons={course.lessons_count || 0}
                rating={4.8}
                level={course.level || "Beginner"}
                index={index}
              />
            ))}
          </div>
        )}

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
