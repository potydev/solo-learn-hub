import { Button } from "@/components/ui/button";
import { Menu, X, Flame, Trophy, Code2, LogOut } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Code Playground", href: "#playground" },
    { name: "Discuss", href: "#discuss" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">sololearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <div className="flex items-center gap-2 text-orange">
                  <Flame className="h-5 w-5" />
                  <span className="font-semibold">{profile?.streak || 0}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow">
                  <Trophy className="h-5 w-5" />
                  <span className="font-semibold">{profile?.xp?.toLocaleString() || 0}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {profile?.username || user.email}
                </span>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm">Sign up free</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex gap-4 pt-4">
                  {user ? (
                    <>
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-1 text-orange">
                          <Flame className="h-4 w-4" />
                          <span className="text-sm">{profile?.streak || 0}</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow">
                          <Trophy className="h-4 w-4" />
                          <span className="text-sm">{profile?.xp || 0}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={signOut}>
                        Sign out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/auth" className="flex-1">
                        <Button variant="ghost" size="sm" className="w-full">
                          Log in
                        </Button>
                      </Link>
                      <Link to="/auth" className="flex-1">
                        <Button size="sm" className="w-full">
                          Sign up free
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
