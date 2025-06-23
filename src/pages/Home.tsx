import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Brain, Rocket, Star, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-3000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-1/4 text-cyan-400 opacity-40"
        >
          <Code size={56} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-64 right-1/4 text-pink-400 opacity-40"
        >
          <Database size={48} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 270, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-48 left-1/3 text-yellow-400 opacity-40"
        >
          <Brain size={52} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -90, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-48 right-1/3 text-green-400 opacity-40"
        >
          <Rocket size={44} />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-32 right-1/5 text-purple-400 opacity-40"
        >
          <Star size={40} />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative z-10 min-h-screen pt-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-4rem)]">
          
          {/* Enhanced Name with multiple gradients */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl sm:text-9xl font-display font-black mb-8 text-glow leading-none"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
              backgroundSize: '400% 400%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradient 3s ease infinite'
            }}
          >
            Ashton Liu
          </motion.h1>

          {/* Enhanced animated titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-10"
          >
            <div className="text-3xl sm:text-4xl font-bold text-white mb-4 flex flex-wrap items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="inline-flex items-center mr-4 mb-2"
              >
                <Zap className="w-8 h-8 mr-2 text-yellow-400 animate-pulse" />
                Software Engineer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="inline-block mx-4 text-gradient-to-r from-purple-400 to-pink-400 text-5xl animate-pulse"
              >
                •
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                className="inline-flex items-center mb-2"
              >
                <Brain className="w-8 h-8 mr-2 text-purple-400 animate-float" />
                ML Enthusiast
              </motion.span>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-2xl text-gray-100 mb-12 max-w-3xl leading-relaxed font-medium"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">elegant solutions</span> to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold"> complex problems</span> with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-bold"> clean, maintainable code</span>. 
            Passionate about creating technology that makes a difference in people's lives.
          </motion.p>

          {/* Enhanced Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 max-w-4xl"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-card p-6 neon-glow hover:shadow-purple-500/50 transition-all duration-300"
            >
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">UC Santa Cruz</div>
              <div className="text-purple-200 font-medium">Computer Science Student</div>
              <div className="w-full bg-purple-400/20 rounded-full h-2 mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ delay: 1.7, duration: 1 }}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-card p-6 neon-glow hover:shadow-yellow-500/50 transition-all duration-300"
            >
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">Full Stack</div>
              <div className="text-yellow-200 font-medium">Development Focus</div>
              <div className="w-full bg-yellow-400/20 rounded-full h-2 mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1.9, duration: 1 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-8"
          >
            <motion.a
              href="/Ashton_Liu_SWEINTERN_Resume.pdf"
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-white/20"
              style={{
                backgroundSize: '400% 400%',
                animation: 'gradient 3s ease infinite'
              }}
            >
              <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              <span className="mr-3">Download My Resume</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;