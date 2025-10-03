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
  Sun,
  Sparkles,
  Target,
  TrendingUp,
  Rocket,
  Star,
  Brain,
  Lightbulb,
  Layers,
  Cpu
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
      title: 'Develop Kreativity (UI/UX Designer)',
      description: 'Develop Kreativity is a platform for creatives to showcase their work and connect with others. Currently a UI/UX Designer for the team.',
      tech: ['Figma'],
      image: '/assets/images/projects/Develop-Kreativity.png',
      link: 'https://www.developkreativity.com/',
      status: 'Employed',
      year: '2025'
    },
    {
      title: 'Owens and Associates (Website Redesign)',
      description: 'Redesigned Owens and Associates website to improve user experience and functionality.',
      tech: ['Figma'],
      image: '/assets/images/projects/Owens-Website-Redesign.png',
      link: 'https://www.figma.com/design/41uORbAgrsqOvZOcNblkQa/Owens-and-Associates-Banner-Only?node-id=1-2&p=f&t=BQ0QXAPrDxnDQXYo-0',
      status: 'Completed',
      year: '2025'
    },
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
    },
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
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Allain</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Full-Stack Developer</span>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Projects
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
                <a href="/Resume-Updated.pdf" download="Allain-Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-green-500/30 rounded-full animate-bounce" style={{ animationDelay: '3.5s' }} />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-500/30 rounded-full animate-bounce" style={{ animationDelay: '4.5s' }} />
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
                <span>PH</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300% bg-[length:300%_300%]">
                  Allain
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm a passionate{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Full-Stack Developer & Designer
                </span>{' '}
                who loves crafting digital experiences with cutting-edge technologies. 
                I transform ideas into reality through clean code and innovative design.
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center space-x-1">
                  <Coffee className="w-4 h-4" />
                  <span>Caffeine Addict</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Code2 className="w-4 h-4" />
                  <span>Casual Coder</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>UI/UX Designer</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
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
          
          {/* Bento Box Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Main Card - Currently Working */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Currently Working</h3>
                  <p className="text-gray-600 dark:text-gray-300">Building the future, one line at a time</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <Calendar className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Innovative Web Applications</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Focusing on React, TypeScript, and cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <Brain className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Advanced Development Patterns</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring microservices, cloud architecture, and AI integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <Target className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Open to Opportunities</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Looking for exciting projects and meaningful collaborations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Overview */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Core Skills</h3>
                  <p className="text-gray-600 dark:text-gray-300">Technical expertise</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Frontend</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">React, TypeScript</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Backend</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Node.js, PHP</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Mobile</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Flutter, Dart</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Design</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Figma, UI/UX</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{achievement.number}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">{achievement.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Passion Card */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">What Drives Me</h3>
                  <p className="text-gray-600 dark:text-gray-300">Beyond just code</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Innovation</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creating solutions that make a real difference</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Collaboration</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Building amazing products with amazing people</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Growth</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Always learning and pushing boundaries</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Excellence</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Delivering quality that exceeds expectations</p>
                </div>
              </div>
            </motion.div>

            {/* Fun Stats */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border border-orange-200/50 dark:border-orange-800/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fun Facts</h3>
                  <p className="text-gray-600 dark:text-gray-300">Life beyond coding</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Cups of Coffee</div>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Caffeine Addict</div>
                    <div>Fueling innovation one cup at a time</div>
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Night Owl</div>
                    <div>Best ideas come after midnight</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold">Tech Stack</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring projects to life. Each tool is carefully selected for its strengths and capabilities.
            </p>
          </motion.div>
          
          {/* Tech Stack Grid */}
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 justify-items-center">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group cursor-pointer"
                  title={tech.name}
                >
                  <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:shadow-xl w-20 h-20 flex items-center justify-center dark:bg-gray-800/50 dark:border-gray-700/50">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {tech.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across different technologies and creative solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg bg-white dark:bg-gray-700 rounded-3xl overflow-hidden hover:scale-[1.02]">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src !== '/assets/images/default.svg') {
                          target.src = '/assets/images/default.svg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge 
                        variant="default"
                        className={`text-sm px-4 py-2 font-medium transition-all duration-300 ${
                          project.status === 'Employed' 
                            ? 'bg-green-500/90 hover:bg-green-500 text-white' 
                            : project.status === 'Live'
                            ? 'bg-blue-500/90 hover:bg-blue-500 text-white'
                            : 'bg-gray-500/90 hover:bg-gray-500 text-white'
                        } backdrop-blur-sm`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                        {project.status}
                      </Badge>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="text-sm text-white font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-3">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-white/95 text-gray-900 hover:bg-white backdrop-blur-sm shadow-lg"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="p-8">
                    <div className="mb-6">
                      <CardTitle className="text-2xl font-bold leading-tight text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Employed' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                            : project.status === 'Live'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-sm px-4 py-2 font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 text-gray-800 dark:text-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold">Let's Work Together</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear from you and discuss how we can bring your ideas to life.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200/50 dark:border-blue-800/50 hover:shadow-xl transition-all duration-300 rounded-3xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send me a message</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
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
                          className="bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
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
                        className="bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
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
                        className="min-h-[120px] bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-3"
                    >
                      {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </Card>
              </motion.div>
              
              {/* Right Column - Contact Info and Services */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Get in touch Card */}
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-800/50 hover:shadow-xl transition-all duration-300 rounded-3xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get in touch</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design. Let's create something amazing together!
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:allainralphlegaspi@gmail.com"
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 group backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 text-gray-800 dark:text-gray-200 transition-colors">Email</div>
                        <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">allainralphlegaspi@gmail.com</div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com/Allain-afk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 group backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold group-hover:text-gray-900 dark:group-hover:text-white text-gray-800 dark:text-gray-200 transition-colors">GitHub</div>
                        <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">@Allain-afk</div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/allain-afk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 group backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 text-gray-800 dark:text-gray-200 transition-colors">LinkedIn</div>
                        <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">www.linkedin.com/in/allain-afk</div>
                      </div>
                    </a>
                  </div>
                </Card>
                
                {/* Available for Card */}
                <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300 rounded-3xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Available for</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Web Development</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Apps</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Palette className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">UI/UX Design</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Consulting</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">Allain</span>
                <span className="text-xs text-gray-400 font-medium">Full-Stack Developer</span>
              </div>
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
