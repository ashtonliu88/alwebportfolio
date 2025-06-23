import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ExternalLink, Building, GraduationCap, Code2, Users, Award } from 'lucide-react';

const experiences = [
  {
    type: 'internship',
    title: 'Lead Engineer and Product Manager',
    company: 'veb.ai',
    location: 'Santa Cruz, CA',
    duration: 'April 2025 - Present',
    description: 'Leading full-stack development and product management for an AI-powered platform with advanced messaging and data processing capabilities.',
    achievements: [
      'Led the production of a FastAPI backend in Python with Pydantic-validated endpoints for onboarding, LinkedIn scraping and Firestore storage',
      'Implemented background tasks for non-blocking data ingestion and vector embeddings persisted in Firestore',
      'Integrated AI and messaging pipelines by generating semantic embeddings with Google Generative AI',
      'Performed Firestore native vector similarity search, driving GPT-4o conversational workflows via OpenAI function-calling',
      'Orchestrated two-way SMS interactions through the Sinch Conversation API'
    ],
    technologies: ['Python', 'FastAPI', 'REST APIs', 'Docker', 'Kubernetes', 'Firebase Firestore', 'OpenAI API', 'Sinch'],
    icon: Code2
  },
  {
    type: 'research',
    title: 'AI Research Assistant',
    company: 'AIEA Lab, University of California Santa Cruz',
    location: 'Santa Cruz, CA',
    duration: 'September 2024 - Present',
    description: 'Conducting cutting-edge research in autonomous vehicle navigation using hierarchical reinforcement learning algorithms.',
    achievements: [
      'Spearhead the research initiative on Hierarchical Reinforcement Learning algorithms',
      'Enhanced autonomous vehicle navigation efficiency by 40% and reduced processing time by 30%',
      'Conduct testing and optimization of autonomous vehicle paths using Stable Baselines with Python and CARLA',
      'Incorporated Proximal Policy Optimization and Deep Deterministic Policy Gradient algorithms',
      'Ensured efficient navigation while identifying potential errors and failures in driving algorithms'
    ],
    technologies: ['Python', 'Docker', 'Kubernetes', 'Stable Baselines', 'Conda', 'CARLA'],
    icon: GraduationCap
  },
  {
    type: 'teaching',
    title: 'Computer Science Tutor',
    company: 'Baskin Engineering at UCSC',
    location: 'Santa Cruz, CA (Remote)',
    duration: 'January 2025 - Present',
    description: 'Providing academic support and tutoring for advanced computer science courses.',
    achievements: [
      'Tutoring students in Principles of Computer System Design (CSE 130) for Spring 2025 and Winter 2025',
      'Supporting students in Applied Discrete Mathematics (CSE 16) for Spring 2025',
      'Helping students understand complex programming concepts and system design principles',
      'Providing one-on-one and group tutoring sessions to improve student comprehension',
      'Developing supplementary materials and practice problems for challenging coursework'
    ],
    technologies: ['Python', 'System Design', 'Discrete Mathematics', 'Programming Fundamentals'],
    icon: Users
  },
  {
    type: 'teaching',
    title: 'Computer Science Grader',
    company: 'Baskin Engineering at UCSC',
    location: 'Santa Cruz, CA (Remote)',
    duration: 'September 2024 - Present',
    description: 'Evaluating student work and providing detailed feedback for multiple advanced computer science courses.',
    achievements: [
      'Grading assignments for Principles of Computer System Design (CSE 130) across multiple quarters',
      'Evaluating student work in Introduction to Analysis of Algorithms (CSE 102)',
      'Assessing assignments for Computer Architecture (CSE 120) courses',
      'Providing detailed feedback to help students improve their understanding',
      'Maintaining consistent grading standards across large class sizes'
    ],
    technologies: ['Algorithm Analysis', 'Computer Architecture', 'System Design', 'Academic Assessment'],
    icon: Users
  },
  {
    type: 'internship',
    title: 'Software Engineer Intern',
    company: 'Clavata.ai',
    location: 'San Francisco, CA',
    duration: 'June 2024 - September 2024',
    description: 'Developed AI-powered moderation systems and cross-platform bot integrations for enhanced community management.',
    achievements: [
      'Architected a scalable, AI-powered moderation system deploying Python/Golang-based Slack and Discord bot',
      'Deployed on AWS EC2 instances with Kubernetes for fault-tolerant, auto-scaling deployment',
      'Integrated Slack/Discord APIs with Clavata\'s LLM models via REST APIs',
      'Introduced cross-platform functionality to increase user engagement across 100+ client communities',
      'Optimized machine learning algorithms for real-time content filtering, improving processing speed by 50%',
      'Supported moderation for over 10K messages per hour through servers'
    ],
    technologies: ['Python', 'Golang', 'REST API', 'Docker', 'Kubernetes', 'AWS', 'Slack API', 'Discord API', 'Git'],
    icon: Code2
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science and Applied Mathematics',
    school: 'University of California, Santa Cruz',
    duration: '2022 - 2026 (Expected)',
    coursework: [
      'Data Structures & Algorithms', 
      'Machine Learning', 
      'Software Engineering', 
      'Database Systems', 
      'Computer Networks', 
      'Operating Systems',
      'Principles of Computer System Design',
      'Introduction to Analysis of Algorithms',
      'Computer Architecture',
      'Applied Discrete Mathematics',
      'Programming Abstractions',
      'Computer Systems and Assembly Language'
    ]
  }
];

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Expected 2025',
    status: 'In Progress'
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Expected 2025',
    status: 'In Progress'
  }
];

const Experience = () => {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'internship': return 'Internship';
      case 'research': return 'Research';
      case 'teaching': return 'Teaching';
      case 'project': return 'Project';
      default: return 'Experience';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-10 min-h-screen pt-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-fade-in">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey, research contributions, and project achievements in software engineering and computer science.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
            <Building className="mr-3 text-purple-400" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 border-l-4 border-purple-400"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex items-start mb-4 lg:mb-0">
                      <div className="bg-purple-500/20 p-2 rounded-lg mr-4 backdrop-blur-sm border border-purple-300/30">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold mr-3 text-white">{exp.title}</h3>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-300/30">
                            {getTypeLabel(exp.type)}
                          </span>
                        </div>
                        <p className="text-cyan-400 font-medium text-lg">{exp.company}</p>
                        <div className="flex items-center text-gray-300 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{exp.location}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-sm text-purple-300 border border-purple-300/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
            <GraduationCap className="mr-3 text-purple-400" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-cyan-400 font-medium">{edu.school}</p>
                    <div className="flex items-center text-gray-300 text-sm mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-4 text-white">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 rounded-lg text-sm border border-cyan-300/30"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
            <Award className="mr-3 text-purple-400" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{cert.name}</h3>
                <p className="text-cyan-400 font-medium mb-1">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">{cert.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    cert.status === 'In Progress' 
                      ? 'bg-yellow-500/20 text-yellow-300 border-yellow-300/30' 
                      : 'bg-green-500/20 text-green-300 border-green-300/30'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-300/30 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Interested in Working Together?</h3>
            <p className="text-lg mb-6 text-gray-300">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-lg"
              >
                Get In Touch
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
