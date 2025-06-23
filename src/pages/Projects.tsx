import React from 'react';import { motion } from 'framer-motion';import { Github, ExternalLink, Star, Code, Zap, Rocket, Eye, Heart } from 'lucide-react';const projects = [
  {
    title: 'SlugScheduler',
    description: 'Full-stack academic scheduling application for UCSC students with transcript analysis, course recommendations, and personalized scheduling using OpenAI integration.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/ashtonliu88/SlugScheduler',
    live: 'https://slugscheduler.vercel.app',
    tags: ['Python', 'OpenAI', 'MongoDB', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    category: 'Full Stack',
    featured: true,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'SummarAIzer',
    description: 'AI-powered research paper summarization tool with multi-modal features including text summaries, audio generation, image extraction, and interactive chat capabilities.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/ashtonliu88/SummarAIzer-Project',
    live: 'https://github.com/ashtonliu88/SummarAIzer-Project',
    tags: ['TypeScript', 'Python', 'AI/ML', 'Docker', 'Full Stack', 'NLP'],
    category: 'AI/ML',
    featured: true,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'MidiClassifier',
    description: 'Machine learning project that classifies musical compositions by composer using LSTM neural networks with TensorFlow/Keras on MIDI data.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/ashtonliu88/MidiClassifier',
    live: 'https://colab.research.google.com/github/ashtonliu88/MidiClassifier/blob/main/MidiClassifier.ipynb',
    tags: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Jupyter Notebook', 'Machine Learning'],
    category: 'Machine Learning',
    featured: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'DermaScan',
    description: 'Mobile application for dermatological image analysis using computer vision and machine learning for skin condition detection and diagnosis.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/tiwariakshat47/DermaScan',
    live: 'https://github.com/tiwariakshat47/DermaScan',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'React Native', 'Firebase', 'Computer Vision'],
    category: 'Mobile',
    featured: true,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Dota2InfoPull',
    description: 'Python web application that pulls real-time data from Dota 2 API to find top professional teams based on player experience.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/ashtonliu88/Dota2InfoPull',
    live: 'https://github.com/ashtonliu88/Dota2InfoPull',
    tags: ['Python', 'Asyncio', 'Aiohttp', 'YAML', 'REST API'],
    category: 'API Integration',
    featured: false,
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'BananaFit',
    description: 'Real-time gym tracking website for students to monitor gym occupancy and optimize workout schedules.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/ashtonliu88/BananaFit',
    live: 'https://github.com/ashtonliu88/BananaFit',
    tags: ['JavaScript', 'Node.js', 'Express', 'WebSocket', 'Real-time'],
    category: 'Web Application',
    featured: false,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Connect - UCSC Class Finder',
    description: 'Application to help UCSC students connect with their classes and find study groups with other students.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/tiwariakshat47/Connect',
    live: 'https://github.com/tiwariakshat47/Connect',
    tags: ['TypeScript', 'React', 'Node.js', 'Database'],
    category: 'Social',
    featured: false,
    gradient: 'from-cyan-500 to-blue-500'
  }
];const Projects = () => {  const categoryIcons: Record<string, any> = {
    'Full Stack': Code,
    'API Integration': Zap,
    'Machine Learning': Rocket,
    'AI/ML': Rocket,
    'Mobile': Eye,
    'Web Application': Star,
    'Social': Heart
  };  return (    <motion.div      initial={{ opacity: 0 }}      animate={{ opacity: 1 }}      exit={{ opacity: 0 }}      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"    >      {/* Background Elements */}      <div className="absolute inset-0">        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>      </div>      <div className="max-w-7xl mx-auto py-16 relative z-10">        {/* Header */}        <motion.div          initial={{ y: 50, opacity: 0 }}          animate={{ y: 0, opacity: 1 }}          transition={{ delay: 0.2 }}          className="text-center mb-20"        >          <motion.h1            initial={{ y: 20, opacity: 0 }}            animate={{ y: 0, opacity: 1 }}            transition={{ delay: 0.4 }}            className="text-6xl sm:text-8xl font-display font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"          >            My Projects          </motion.h1>          <motion.p            initial={{ y: 20, opacity: 0 }}            animate={{ y: 0, opacity: 1 }}            transition={{ delay: 0.6 }}            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"          >            Showcasing innovative solutions built with modern technologies and creative problem-solving          </motion.p>        </motion.div>        {/* Projects Grid */}        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">          {projects.map((project, index) => (            <motion.div              key={project.title}              initial={{ y: 50, opacity: 0 }}              animate={{ y: 0, opacity: 1 }}              transition={{ delay: 0.3 + index * 0.1 }}              whileHover={{ y: -5, scale: 1.02 }}              className="group glass-card overflow-hidden hover:neon-glow transition-all duration-300"            >              {/* Project Image */}              <div className="relative overflow-hidden h-48">                <img                  src={project.image}                  alt={project.title}                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"                />                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>                                {/* Category */}                <div className="absolute top-3 left-3">                  <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20">                    {React.createElement(categoryIcons[project.category] || Code, { className: "w-3 h-3 text-white" })}                    <span className="text-white text-xs font-medium">{project.category}</span>                  </div>                </div>                {project.featured && (                  <div className="absolute top-3 right-3">                    <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">                      <Star className="w-3 h-3 text-white" />                      <span className="text-white text-xs font-bold">Featured</span>                    </div>                  </div>                )}              </div>              {/* Content */}              <div className="p-5">                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">                  {project.title}                </h3>                <p className="text-gray-300 mb-3 text-sm leading-relaxed">                  {project.description}                </p>                {/* Tags */}                <div className="flex flex-wrap gap-1 mb-4">                  {project.tags.slice(0, 4).map((tag) => (                    <span                      key={tag}                      className="px-2 py-1 bg-white/10 rounded-lg text-white text-xs border border-white/20"                    >                      {tag}                    </span>                  ))}                  {project.tags.length > 4 && (                    <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-xs border border-white/20">                      +{project.tags.length - 4} more                    </span>                  )}                </div>                {/* Links */}                <div className="flex space-x-2">                  <a                    href={project.github}                    target="_blank"                    rel="noopener noreferrer"                    className="flex-1 flex items-center justify-center px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-sm"                  >                    <Github className="w-4 h-4 mr-1" />                    Code                  </a>                  <a                    href={project.live}                    target="_blank"                    rel="noopener noreferrer"                    className={`flex-1 flex items-center justify-center px-3 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-medium hover:shadow-md transition-all duration-300 text-sm`}                  >                    <ExternalLink className="w-4 h-4 mr-1" />                    Live                  </a>                </div>              </div>            </motion.div>          ))}        </div>      </div>    </motion.div>  );};export default Projects;