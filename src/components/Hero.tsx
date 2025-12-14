import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, Sparkles, Users, BookOpen, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm">50M+ learners worldwide</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn to{" "}
              <span className="text-gradient">code</span>
              <br />
              for free
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Master coding with bite-sized lessons, real-world projects, and a
              supportive community. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 text-base h-12 px-8">
                Start Learning
                <Play className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base h-12 px-8">
                Explore Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                  <BookOpen className="h-5 w-5 text-primary" />
                  20+
                </div>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                  <Code className="h-5 w-5 text-orange" />
                  1000+
                </div>
                <p className="text-sm text-muted-foreground">Lessons</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                  <Users className="h-5 w-5 text-purple" />
                  50M+
                </div>
                <p className="text-sm text-muted-foreground">Learners</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 p-4 rounded-xl bg-gradient-card border border-border shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow/20 flex items-center justify-center">
                    <span className="text-xl">🐍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Python</p>
                    <p className="text-xs text-muted-foreground">45% complete</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-gradient-card border border-border shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue/20 flex items-center justify-center">
                    <span className="text-xl">⚛️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">React</p>
                    <p className="text-xs text-muted-foreground">12 lessons</p>
                  </div>
                </div>
              </motion.div>

              {/* Code editor mockup */}
              <div className="rounded-2xl bg-gradient-card border border-border shadow-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <span className="ml-2 text-xs text-muted-foreground">main.py</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="flex gap-4">
                    <div className="text-muted-foreground select-none">
                      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                        <div key={n}>{n}</div>
                      ))}
                    </div>
                    <div>
                      <div><span className="text-purple">def</span> <span className="text-blue">greet</span>(name):</div>
                      <div>    <span className="text-purple">return</span> <span className="text-yellow">"Hello, "</span> + name</div>
                      <div></div>
                      <div><span className="text-muted-foreground"># Welcome to Sololearn!</span></div>
                      <div>message = greet(<span className="text-yellow">"World"</span>)</div>
                      <div><span className="text-blue">print</span>(message)</div>
                      <div className="text-primary mt-2">→ Hello, World</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
