import { motion } from "framer-motion";
import { Trophy, Flame, Medal, Crown } from "lucide-react";

const topLearners = [
  { rank: 1, name: "Sarah Chen", xp: 125840, streak: 365, avatar: "👩‍💻" },
  { rank: 2, name: "Alex Kumar", xp: 118320, streak: 280, avatar: "👨‍💻" },
  { rank: 3, name: "Maya Rodriguez", xp: 112450, streak: 245, avatar: "👩‍🔬" },
  { rank: 4, name: "James Wilson", xp: 98670, streak: 189, avatar: "🧑‍💻" },
  { rank: 5, name: "Emma Thompson", xp: 94320, streak: 156, avatar: "👩‍🎓" },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-5 w-5 text-yellow" />;
    case 2:
      return <Medal className="h-5 w-5 text-muted-foreground" />;
    case 3:
      return <Medal className="h-5 w-5 text-orange" />;
    default:
      return <span className="text-muted-foreground font-semibold">{rank}</span>;
  }
};

const LeaderboardSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-gradient-card border border-border p-6 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow/20 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-yellow" />
                </div>
                <div>
                  <h3 className="font-semibold">Weekly Leaderboard</h3>
                  <p className="text-sm text-muted-foreground">Top performers this week</p>
                </div>
              </div>

              <div className="space-y-4">
                {topLearners.map((learner, index) => (
                  <motion.div
                    key={learner.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-8 flex justify-center">
                      {getRankIcon(learner.rank)}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                      {learner.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{learner.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {learner.xp.toLocaleString()} XP
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-orange">
                      <Flame className="h-4 w-4" />
                      <span className="text-sm font-medium">{learner.streak}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Compete with{" "}
              <span className="text-gradient">millions</span>
              <br />
              of learners
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Challenge yourself and climb the global leaderboard. Earn XP for every lesson completed, maintain your streak, and become a coding champion.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 text-yellow mb-2">
                  <Trophy className="h-5 w-5" />
                  <span className="font-semibold">XP System</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Earn points for lessons, quizzes, and challenges
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-2 text-orange mb-2">
                  <Flame className="h-5 w-5" />
                  <span className="font-semibold">Daily Streaks</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Keep your streak alive for bonus rewards
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
