import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Toaster } from "@/components/ui/sonner";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  Apple,
  Code,
  Database,
  ExternalLink,
  Linkedin,
  Loader2,
  Mail,
  Menu,
  Moon,
  Phone,
  Play,
  Smartphone,
  Sun,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './App.css';

// Import all project images
import a3tnImage from './assets/a3tn.svg';
import alKitabImage from './assets/ketab.svg';
import lendHandsExpertImage from './assets/expert.svg';
import fanyPlusImage from './assets/fany.svg';
import lendHandsImage from './assets/lendhands.svg';
import maghsoolImage from './assets/maghsol.svg';
import masakibImage from './assets/masakib.svg';
import masakibCaptaionImage from './assets/masakib_cap.svg';
import sajilImage from './assets/sajil.png';
import wathbahImage from './assets/wathba.svg';
import royaaImage from './assets/royaa.svg';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

  const { toast } = useToast()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(p => !p)
  const toggleMobileMenu = () => setMobileMenuOpen(p => !p)

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const skills = [
    'Architecture: Clean Architecture, S.O.L.I.D, Design Patterns', 
    'Logic: Bloc, Cubit, Provider, Reactive Programming',
    'Tech: Dart, Java, C++, Firebase Core, Google Maps Platform',
    'DevOps: CI/CD, App Store Connect, Play Console, Research & R&D',
    'Enterprise: Payment Gateways, Deep Linking, SQLite, Hive, RESTful APIs'
  ]
  const projects = [
    {
      title: "Lend Hands: Home Services Ecosystem",
      description: "Challenge: Inefficient service dispatching. Solution: Architected a dual-app reactive system with real-time provider tracking. Result: Scaled to 10k+ users with an intuitive custom UI.",
      technologies: ["Flutter", "Real-time Tracking", "Cubit", "Scalable UI"],
      features: ["Dynamic Service Management", "Push Notification Pipeline", "Real-time Provider Sync"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.skylimitstech.lendhands.customer",
      appStore: "https://apps.apple.com/us/app/lend-hands/id6739315883",
      image: lendHandsImage
    },
    {
      title: "Masakeb: Charity Donation Platform",
      description: "Challenge: Managing hyper-local donations. Technical Win: Optimized Google Maps marker clustering for 60fps performance and integrated secure multi-provider payments.",
      technologies: ["Google Maps Platform", "Online Payments", "Performance Optimization"],
      features: ["Live Mosque selection", "Automated Cooling/Water donation", "Real-time Order Lifecycle"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.digitalart.masakeb",
      appStore: "https://apps.apple.com/eg/app/masakib-%D9%85%D8%B3%D8%A7%D9%83%D8%A8/id6478117082?l=ar",
      image: masakibImage
    },
    {
      title: "A3tn: Heavy Logistics SaaS",
      description: "Challenge: Complex multi-role equipment rental. Solution: Built a multi-tenant architecture with live pricing engines and secure workflow monitoring.",
      technologies: ["SaaS Architecture", "Live Pricing Engines", "Role-Based Access"],
      features: ["Customer/Driver/Provider Roles", "Fleet monitoring", "Secure Payouts"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.sharaftech.e3tn",
      appStore: "https://apps.apple.com/us/app/a3tn-%D8%A5%D8%B9%D8%AA%D9%86/id6740632715",
      image: zE
    },
    {
      title: "Wajed: Multi-Vendor Marketplace",
      description: "Challenge: Orchestrating an entire delivery supply chain. Architecture: Established a shared UI library across 4 internal apps leveraging Bloc for consistent state management.",
      technologies: ["Shared Component Library", "Supply Chain Logic", "Real-time Tracking"],
      features: ["Admin Dashboard", "Vendor/Driver/Customer Apps", "Complete Order Lifecycle"],
      status: "In Development",
      googlePlay: null,
      appStore: null,
      image: null
    },
    {
      title: "TSH E-Commerce App",
      description: "E-commerce app with categories, browsing, cart, payments, order tracking, and complete shopping cycle.",
      technologies: ["Flutter", "E-commerce", "Payment integration", "Order tracking"],
      features: ["Product categories", "Add to favorites", "Cart management", "Payment processing", "Order status tracking", "Complete shopping cycle"],
      status: "In Development",
      googlePlay: null,
      appStore: null,
      image: null
    }
  ]

  // Animations
  const fadeInUp = { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
  const fadeInLeft = { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }
  const fadeInRight = { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }
  const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } }
  const scaleOnHover = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }

  // Form helpers
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phoneNumber.trim() || !formData.message.trim()) {
      toast.error('Missing fields', {
        description: 'Please fill in name, email, phone number, and message.',
        className: 'bg-red-500 text-white'

      });

      return false
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    if (!emailOk) {
      toast.error('Invalid email', {
        description: 'Please enter a valid email address.',
        className: 'bg-red-500 text-white'
      })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
        title: 'Portfolio Contact',
        time: new Date().toLocaleString(),
        reply_to: formData.email
      }

      await emailjs.send(
        'service_atbux5r',        // Service ID
        'template_4v5yani',       // Template ID
        templateParams,
        { publicKey: 'AfDkeAEA6f1Z9Q1sL' } // Public Key
      )

      toast.success('Message sent!', {
        description: 'Thanks for reaching out. I will get back to you shortly.',
        className: 'bg-green-500 text-white',
      });
      setFormData({ name: '', email: '', phoneNumber: '', message: '' })
    } catch (err) {
      toast.error(

        'Failed to send', {
        description: 'Something went wrong while sending your message. Please try again later.',
        className: 'bg-red-500 text-white',
      });

      // console.error(err)
    } finally {
      setSending(false)
    }
  }

  // WhatsApp helper
  const waNumber = '201020182806' // بدون + للـ wa.me
  const waText = encodeURIComponent('Hi Osama! I came from your portfolio.')
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
              <h1 className="text-xl font-bold text-primary">Osama Mousa</h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'projects', 'skills', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(section)}
                    className="hover:text-primary transition-colors capitalize"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="rounded-full">
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors capitalize w-full text-left"
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-0 min-h-screen flex items-center justify-center hero-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Osama Mousa
              </motion.h1>
              <motion.h4
                className="text-2xl md:text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Architecting Enterprise Mobile Ecosystems
              </motion.h4>
              <motion.h5
                className="text-lg md:text-xl font-medium text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                60fps Performance | Clean Architecture | Scalable Flutter Systems
              </motion.h5>

              <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" variants={fadeInUp}>
                I transform complex business requirements into high-performance mobile software. Specialist in the Flutter framework, focusing on production-grade architecture that scales from MVP to millions of users.
              </motion.p>
            </motion.div>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <motion.div {...scaleOnHover}>
                <Button size="lg" onClick={() => scrollToSection('projects')} className="text-lg px-8 py-3 btn-hover">
                  View My Work
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-3 btn-hover">
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="flex justify-center space-x-6 pt-8" variants={fadeInUp}>
              <motion.a
                href="https://www.linkedin.com/in/osama-mousa-aba252269?utm_source=share&utm_campaign=share_via&utm_content=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:osamamosabusiness@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
              {/* WhatsApp icon in hero */}
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />

              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I don't just write code; I design systems. My approach combines rigorous architectural patterns (Clean, BLoC) with a deep understanding of UX and business ROI. 
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
              <p className="text-lg leading-relaxed">
                With a massive track record of **13+ production apps**, I specialize in building mission-critical applications that solve complex logistics, donation, and marketplace challenges. 
              </p>
              <p className="text-lg leading-relaxed">
                My focus is always on **Performance (60fps UI)**, **Testability (Solid testing layers)**, and **Maintainability (Clean Code & S.O.L.I.D principles)**.
              </p>
              <motion.div className="flex flex-wrap gap-2" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                {['🎯 Problem Solver', '🚀 Performance Focused', '📱 Mobile First', '🎨 UI/UX Enthusiast'].map((badge) => (
                  <motion.div key={badge} variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                    <Badge variant="secondary" className="text-sm">{badge}</Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-6" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
              {[
                { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform development with Flutter" },
                { icon: Code, title: "Clean Code", desc: "Following best practices and architecture patterns" },
                { icon: Database, title: "Backend Integration", desc: "Firebase, REST APIs, and database management" },
                { icon: ExternalLink, title: "Deployment", desc: "App Store and Google Play Store publishing" }
              ].map((item) => (
                <motion.div key={item.title} variants={fadeInUp} whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ duration: 0.3 }} className="card-hover">
                  <Card>
                    <CardHeader className="text-center">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <item.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                      </motion.div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent Flutter applications showcasing different aspects of mobile development
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.03, rotateY: 2 }} transition={{ duration: 0.3 }} className="card-hover">
                <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Badge variant={project.status === 'Published' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </motion.div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {project.image ? (
                      <div className="mb-4">

                        <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
                      </div>
                    ) : (
                      <div className="mb-4 project-image flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <Smartphone className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-sm">Coming Soon</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <motion.div className="flex flex-wrap gap-2" variants={staggerContainer}>
                        {project.technologies.map((tech, i) => (
                          <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Badge variant="outline" className="text-xs">{tech}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, i) => (
                          <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                            • {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <motion.div className="flex-1" {...scaleOnHover}>
                        {project.googlePlay && (
                          <Button variant="outline" size="sm" className="w-full btn-hover" asChild>
                            <a href={project.googlePlay} target="_blank" rel="noopener noreferrer">
                              <Play className="h-4 w-4 mr-2" />
                              Google Play
                            </a>
                          </Button>
                        )}
                      </motion.div>
                      <motion.div className="flex-1" {...scaleOnHover}>
                        {project.appStore && (
                          <Button variant="outline" size="sm" className="w-full btn-hover" asChild>
                            <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                              <Apple className="h-4 w-4 mr-2" />
                              App Store
                            </a>
                          </Button>
                        )}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Technologies and tools I use to bring ideas to life</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {[
              { icon: Smartphone, title: "Mobile Development", skills: ["Flutter", "Dart", "Android", "iOS"] },
              { icon: Database, title: "Backend & Database", skills: ["Firebase", "SQLite", "REST APIs", "GraphQL"] },
              { icon: Code, title: "Development Tools", skills: ["Git", "Android Studio", "VS Code", "Figma"] }
            ].map((category) => (
              <motion.div key={category.title} variants={fadeInUp} whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ duration: 0.3 }} className="card-hover">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <category.icon className="h-5 w-5 mr-2 text-primary" />
                      </motion.div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div className="flex flex-wrap gap-2" variants={staggerContainer}>
                      {category.skills.map((skill) => (
                        <motion.div key={skill} variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Badge>{skill}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-12" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-center mb-8">All Skills</h3>
            <motion.div className="flex flex-wrap justify-center gap-3" variants={staggerContainer}>
              {skills.map((skill, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }} whileTap={{ scale: 0.95 }}>
                  <Badge variant="secondary" className="text-sm px-4 py-2">{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to work together? I'd love to hear about your project and discuss how I can help bring your mobile app ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div className="space-y-8" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always interested in new opportunities and exciting projects.
                </p>
              </div>

              <motion.div className="space-y-4" variants={staggerContainer}>
                {[
                  { icon: Mail, text: "osamamosabusiness@gmail.com", href: "mailto:osamamosabusiness@gmail.com" },
                  { icon: Phone, text: "+201020182806", href: "tel:+201020182806" },
                  { icon: FaWhatsapp, text: "WhatsApp", href: waLink },
                  { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/osama-mousa-aba252269?utm_source=share&utm_campaign=share_via&utm_content=profile" }
                ].map((contact) => (
                  <motion.div key={contact.text} className="flex items-center space-x-4" variants={fadeInUp} whileHover={{ scale: 1.05, x: 10 }}>
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <contact.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {contact.text}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInRight} className="card-hover">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contact Form (EmailJS) */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                      <label className="text-sm font-medium" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={sending}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                      <label className="text-sm font-medium" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={sending}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                      <label className="text-sm font-medium" htmlFor="phoneNumber">Phone Number</label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        disabled={sending}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="+201020182806"
                      />
                    </motion.div>

                    <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                      <label className="text-sm font-medium" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={sending}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
                        placeholder="Tell me about your project..."
                      />
                    </motion.div>

                    <motion.div {...scaleOnHover}>
                      <Button className="w-full btn-hover" type="submit" disabled={sending}>
                        {sending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer className="bg-background border-t border-border py-12" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h3 className="text-xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              Osama Mousa
            </motion.h3>
            <p className="text-muted-foreground mb-6">Building the future of mobile applications, one Flutter app at a time.</p>
            <motion.div className="flex justify-center space-x-6" variants={staggerContainer}>
              <motion.a
                href="https://www.linkedin.com/in/osama-mousa-aba252269?utm_source=share&utm_campaign=share_via&utm_content=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:osamamosabusiness@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </motion.a>
            </motion.div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">© 2025 Osama Mousa Portfolio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Toasts root */}
      <Toaster />
    </div>
  )
}

export default App
