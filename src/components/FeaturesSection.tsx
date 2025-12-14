import { motion } from "framer-motion";
import { Smartphone, Trophy, Users, Zap, Code2, Target } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Learn anywhere",
    description: "Take lessons on the go with our mobile app. Learn during your commute or coffee break.",
    color: "text-primary",
  },
  {
    icon: Code2,
    title: "Hands-on practice",
    description: "Write and run code directly in the browser. No setup required, just start coding.",
    color: "text-blue",
  },
  {
    icon: Trophy,
    title: "Earn achievements",
    description: "Unlock badges and climb the leaderboard. Show off your coding skills to the world.",
    color: "text-yellow",
  },
  {
    icon: Users,
    title: "Learn together",
    description: "Join a community of 50M+ learners. Ask questions, share solutions, and grow together.",
    color: "text-purple",
  },
  {
    icon: Zap,
    title: "Bite-sized lessons",
    description: "Short, focused lessons that fit your schedule. Master concepts in just 5 minutes a day.",
    color: "text-orange",
  },
  {
    icon: Target,
    title: "Real-world projects",
    description: "Apply your skills to practical projects. Build a portfolio that impresses employers.",
    color: "text-pink",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why learners love{" "}
            <span className="text-gradient">sololearn</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to go from beginner to pro, all in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
