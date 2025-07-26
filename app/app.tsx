// Professional Portfolio Landing Page for Allain
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ArrowUp,
  Zap,
  Users,
  Smartphone,
  Palette,
  MapPin,
  Calendar,
  Coffee,
  Code2,
  Heart,
  Moon,
  Sun
} from 'lucide-react';
import { 
  SiReact, 
  SiPython, 
  SiFlutter, 
  SiDart, 
  SiCplusplus, 
  SiHtml5, 
  SiCss3, 
  SiFigma, 
  SiCanva,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiVite,
  SiGithub,
  SiVercel,
  SiPhp,
  SiMysql
} from 'react-icons/si';
import portfolioData from './data.json';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const AllainPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode initialization and persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Default to light mode unless user has explicitly chosen dark mode
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Hi Allain,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      const mailtoLink = `mailto:allainralphlegaspi@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  // Icon mapping for technologies
  const iconMap: { [key: string]: JSX.Element } = {
    'React': <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    'JavaScript': <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    'TypeScript': <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    'Python': <SiPython className="w-8 h-8 text-[#3776AB]" />,
    'PHP': <SiPhp className="w-8 h-8 text-[#777BB4]" />,
    'Node.js': <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
    'HTML5': <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
    'CSS3': <SiCss3 className="w-8 h-8 text-[#1572B6]" />,
    'Tailwind CSS': <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    'Flutter': <SiFlutter className="w-8 h-8 text-[#02569B]" />,
    'Dart': <SiDart className="w-8 h-8 text-[#0175C2]" />,
    'C++': <SiCplusplus className="w-8 h-8 text-[#00599C]" />,
    'MySQL': <SiMysql className="w-8 h-8 text-[#4479A1]" />,
    'Git': <SiGit className="w-8 h-8 text-[#F05032]" />,
    'GitHub': <SiGithub className="w-8 h-8 text-[#181717]" />,
    'Vite': <SiVite className="w-8 h-8 text-[#646CFF]" />,
    'Vercel': <SiVercel className="w-8 h-8 text-[#000000]" />,
    'Figma': <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
    'Canva': <SiCanva className="w-8 h-8 text-[#00C4CC]" />,
  };

  // Generate tech stack from data.json with additional static technologies
  const techStack = [
    ...portfolioData.techStack.map(tech => ({
      name: tech.name,
      icon: iconMap[tech.name] || <Code2 className="w-8 h-8 text-gray-600" />,
      color: 'bg-gray-100'
    })),
    // Additional technologies not in data.json
    { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />, color: 'bg-gray-100' },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />, color: 'bg-gray-100' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" />, color: 'bg-gray-100' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />, color: 'bg-gray-100' },
    { name: 'Git', icon: <SiGit className="w-8 h-8 text-[#F05032]" />, color: 'bg-gray-100' },
    { name: 'GitHub', icon: <SiGithub className="w-8 h-8 text-[#181717]" />, color: 'bg-gray-100' },
    { name: 'Vite', icon: <SiVite className="w-8 h-8 text-[#646CFF]" />, color: 'bg-gray-100' },
    { name: 'Vercel', icon: <SiVercel className="w-8 h-8 text-[#000000]" />, color: 'bg-gray-100' },
  ];

  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive library management system with book tracking, member management, borrowing system, and administrative dashboard. Features real-time availability status and automated notifications.',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/assets/images/projects/Library-Management-System.png',
      link: 'https://github.com/Allain-afk/Book-King',
      status: 'Live',
      year: '2024'
    },
    {
      title: 'First Portfolio Design',
      description: 'My initial portfolio website showcasing clean design principles and responsive layouts. Built with modern web technologies and smooth animations to create an engaging user experience.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
      image: '/assets/images/projects/First-Portfolio-Design.png',
      link: 'https://allain-afk.github.io/AllainAutobiography/',
      status: 'Live',
      year: '2023'
    },
    {
      title: 'JackMar Trading Website',
      description: 'Professional trading platform website with real-time market data, user dashboard, and comprehensive trading tools. Features modern UI/UX design and responsive layout.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      image: '/assets/images/projects/JackMar-Trading-Website.png',
      link: 'https://maricel-jackson.github.io/trading/',
      status: 'Live',
      year: '2024'
    },
    {
      title: 'Laundry Management System',
      description: 'Digital solution for laundry business operations including order tracking, customer management, pricing calculator, and service scheduling with automated notifications.',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      image: '/assets/images/projects/Laundry-Management-System.png',
      link: 'https://github.com/Allain-afk/Laundry-Management-System',
      status: 'Live',
      year: '2024'
    }
  ];

  const achievements = [
    { number: '2+', label: 'Years of\nexperience' },
    { number: '75,000+', label: 'Lines of\ncode written' },
    { number: '500+', label: 'Cups of coffee\nconsumed' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center p-2">
                <img src="/code-icon.svg" alt="Code" className="w-full h-full filter invert dark:invert-0" />
              </div>
              <span className="font-bold text-xl">Allain</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </motion.button>
              
              <Button 
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900"
                asChild
              >
                <a href="/resume.pdf" download="Allain_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }} />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <MapPin className="w-4 h-4" />
                <span>Available worldwide</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Allain</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm a passionate <span className="font-semibold text-gray-800 dark:text-gray-200">Full-Stack Developer & Designer</span> who loves crafting digital experiences with modern technologies. 
                I turn ideas into reality through clean code and beautiful design.
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center space-x-1">
                  <Coffee className="w-4 h-4" />
                  <span>Coffee enthusiast</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Code2 className="w-4 h-4" />
                  <span>Code lover</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>Problem solver</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 px-8 py-3 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer and designer with expertise in modern web technologies, 
              mobile development, and creative design. I love bringing ideas to life through code and design.
            </p>
          </motion.div>
          
          {/* Currently Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-8">Currently</h3>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm transition-colors duration-300">
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <Calendar className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Building innovative web applications</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Focusing on React, TypeScript, and modern web technologies</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <Code2 className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Learning advanced development patterns</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring microservices, cloud architecture, and performance optimization</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <Heart className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Open to new opportunities</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Looking for exciting projects and collaborations</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-32 flex flex-col justify-center items-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line text-center">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring projects to life
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                className="group cursor-pointer"
                title={tech.name}
              >
                <div className={`w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105`}>
                  {tech.icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A selection of my recent work showcasing different technologies and design approaches
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg bg-white dark:bg-gray-700 rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-8 left-8">
                      <Badge 
                        variant="default"
                        className="text-sm px-4 py-2 font-medium bg-gray-900/90 text-white hover:bg-gray-900 transition-colors cursor-pointer flex items-center gap-2"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute top-8 right-8 bg-white/95 text-gray-900 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardHeader className="p-10">
                    <div className="flex items-start justify-between mb-6">
                      <CardTitle className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 px-4 py-2 rounded-full">{project.year}</span>
                    </div>
                    <CardDescription className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <div className="flex flex-wrap gap-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm px-4 py-2 font-medium bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear from you and discuss how we can bring your ideas to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion"
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="min-h-[120px] bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get in touch</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:allainralphlegaspi@gmail.com"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                      <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-gray-900 dark:group-hover:text-white text-gray-800 dark:text-gray-200">Email</div>
                      <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">allainralphlegaspi@gmail.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/Allain-afk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-gray-900 dark:group-hover:text-white text-gray-800 dark:text-gray-200">GitHub</div>
                      <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">@Allain-afk</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/allain-afk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-gray-900 dark:group-hover:text-white text-gray-800 dark:text-gray-200">LinkedIn</div>
                      <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">www.linkedin.com/in/allain-afk</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <Separator className="bg-gray-200 dark:bg-gray-700" />
              
              <div>
                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Available for</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Web Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Mobile Apps</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Consulting</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white dark:bg-gray-200 rounded-full flex items-center justify-center p-2">
                <img src="/code-icon.svg" alt="Code" className="w-full h-full" />
              </div>
              <span className="font-bold text-xl">Allain</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 dark:text-gray-500 mb-2">© 2025 Allain-afk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default AllainPortfolio;
