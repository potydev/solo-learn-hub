import { motion } from "framer-motion";
import { Trophy, Flame, Medal, Crown, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Profile {
  id: string;
  username: string | null;
  xp: number | null;
  streak: number | null;
  avatar_url: string | null;
}

const avatars = ["👩‍💻", "👨‍💻", "👩‍🔬", "🧑‍💻", "👩‍🎓", "🧑‍🔬", "👨‍🎓", "👩‍💼"];

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
  const { data: topLearners, isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("xp", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data as Profile[];
    },
  });

  // Fallback data if no users yet
  const fallbackLearners = [
    { id: "1", username: "Sarah Chen", xp: 125840, streak: 365 },
    { id: "2", username: "Alex Kumar", xp: 118320, streak: 280 },
    { id: "3", username: "Maya Rodriguez", xp: 112450, streak: 245 },
    { id: "4", username: "James Wilson", xp: 98670, streak: 189 },
    { id: "5", username: "Emma Thompson", xp: 94320, streak: 156 },
  ];

  const displayLearners = topLearners?.length ? topLearners : fallbackLearners;

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

              {isLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : (
                <div className="space-y-4">
                  {displayLearners.map((learner, index) => (
                    <motion.div
                      key={learner.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-8 flex justify-center">
                        {getRankIcon(index + 1)}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                        {avatars[index % avatars.length]}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{learner.username || "Anonymous"}</p>
                        <p className="text-sm text-muted-foreground">
                          {(learner.xp || 0).toLocaleString()} XP
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-orange">
                        <Flame className="h-4 w-4" />
                        <span className="text-sm font-medium">{learner.streak || 0}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
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
