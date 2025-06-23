import { motion } from 'framer-motion';
import { Code, Palette, Coffee, Music, Globe, Heart, Zap, Star, Trophy, Target } from 'lucide-react';
import GitHubContributions from '../components/GitHubContributions';

const About = () => {
  const skills = [
    { name: 'Python', icon: '🐍', level: 90, color: 'from-green-400 to-blue-500' },
    { name: 'JavaScript', icon: '⚡', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', level: 88, color: 'from-blue-400 to-cyan-500' },
    { name: 'TypeScript', icon: '📘', level: 82, color: 'from-blue-500 to-purple-500' },
    { name: 'Node.js', icon: '🟢', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'Machine Learning', icon: '🤖', level: 75, color: 'from-purple-500 to-pink-500' },
    { name: 'AWS', icon: '☁️', level: 70, color: 'from-orange-400 to-red-500' },
    { name: 'Docker', icon: '🐳', level: 78, color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', icon: '🔧', level: 85, color: 'from-gray-500 to-gray-700' },
  ];

  const interests = [
    { name: 'Coding', icon: Code, color: 'text-blue-400' },
    { name: 'Design', icon: Palette, color: 'text-pink-400' },
    { name: 'Coffee', icon: Coffee, color: 'text-amber-600' },
    { name: 'Music', icon: Music, color: 'text-purple-400' },
    { name: 'Travel', icon: Globe, color: 'text-green-400' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto py-16 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full text-white text-lg font-medium border border-white/30 mb-6"
          >
            <Heart className="w-5 h-5 mr-2 text-pink-400 animate-pulse" />
            Get to know me
            <Zap className="w-5 h-5 ml-2 text-yellow-400 animate-bounce" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-6xl sm:text-8xl font-display font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            style={{
              backgroundSize: '400% 400%',
              animation: 'gradient 3s ease infinite'
            }}
          >
            About Me
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Passionate about creating technology that makes a difference in people's lives
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Profile Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Workspace"
                className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 z-10"
              />
              
              {/* Floating Icons around image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
              >
                <Trophy className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 neon-glow">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              >
                Hi there! 👋
              </motion.h2>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="space-y-4 text-gray-300 leading-relaxed text-lg"
              >
                <p>
                  I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">goal-driven, passionate software engineer</span> with expertise in Data Science, Machine Learning, and Full Stack development.
                </p>
                <p>
                  My focus is creating a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">better world for all</span>, one step at a time. Whether large or small, technology can benefit all who choose to embrace it!
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while brainstorming the next big idea.
                </p>
              </motion.div>
            </div>

            {/* Interests */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-400" />
                What I Love
              </h3>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full border border-white/20"
                  >
                    <interest.icon className={`w-5 h-5 ${interest.color}`} />
                    <span className="text-white font-medium">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Technical Arsenal
            </h2>
            <p className="text-xl text-gray-300">The tools and technologies I wield to bring ideas to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 group hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-bold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-white/60 font-medium">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 1 }}
                    className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Portfolio Activity */}
        <GitHubContributions />
      </div>
    </motion.div>
  );
};

export default About;