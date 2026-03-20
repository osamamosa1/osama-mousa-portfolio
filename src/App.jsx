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
  console.log('--- App Mounting: Senior Portfolio V2 ---')
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

  const strategicSkills = [
    { category: 'Architecture', items: 'Clean Architecture, S.O.L.I.D, Design Patterns, Modularization' },
    { category: 'Logic & State', items: 'BLoC, Cubit, Provider, Reactive Programming (RxDart)' },
    { category: 'Platform Tech', items: 'Flutter (60fps UI), Google Maps Platform, Firebase Core' },
    { category: 'DevOps & R&D', items: 'CI/CD Pipelines, App Store / Play Console, Performance Benchmarking' },
    { category: 'Enterprise Logic', items: 'Payment Pipelines, Deep Linking, Local Persistence (Hive/SQLite)' }
  ]
  const projects = [
    {
      title: "Lend Hands: Home Services Ecosystem",
      description: "**Problem:** Market fragmentation causing late service delivery. **Solution:** Architected a reactive tracking system using Cubit for real-time provider-customer sync. **Impact:** Successfully scaled to 10k+ users with zero state-concurrency errors.",
      technologies: ["Flutter", "Real-time Tracking", "Cubit", "Scalable UI"],
      googlePlay: "https://play.google.com/store/apps/details?id=com.skylimitstech.lendhands.customer",
      appStore: "https://apps.apple.com/us/app/lend-hands/id6739315883",
      image: lendHandsImage,
      isFeatured: true
    },
    {
      title: "Lend Hands Expert: Provider App",
      description: "Service provider app to receive and manage service requests with REST APIs, Bloc architecture, and Firebase notifications.",
      technologies: ["Flutter", "REST APIs", "Bloc architecture", "Firebase"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.skylimitstech.lendhands.expert",
      appStore: "https://apps.apple.com/us/app/lend-hands-expert/id6739271222",
      image: lendHandsExpertImage,
      isFeatured: false
    },
    {
      title: "Masakeb: Charity Donation Platform",
      description: "**Problem:** Low donor trust due to opaque delivery tracking. **Technical Solution:** Optimized Google Maps marker clustering for smooth navigation and integrated secure multi-provider payments. **Impact:** Enhanced user retention by providing real-time delivery transparency.",
      technologies: ["Google Maps Platform", "Online Payments", "Performance Optimization"],
      googlePlay: "https://play.google.com/store/apps/details?id=com.digitalart.masakeb",
      appStore: "https://apps.apple.com/eg/app/masakib-%D9%85%D8%B3%D8%A7%D9%83%D8%A8/id6478117082?l=ar",
      image: masakibImage,
      isFeatured: true
    },
    {
      title: "Masakeb Captain: Charity Delivery",
      description: "Delivery app for handling charity orders with Google Maps navigation, mosque location, and delivery status updates.",
      technologies: ["Flutter", "Google Maps", "Real-time tracking"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.digitalart.masakeb_captain",
      appStore: "https://apps.apple.com/eg/app/masakib-captain-%D9%85%D8%B3%D8%A7%D9%83%D8%A8-%D9%83%D8%A7%D8%A8%D8%AA%D9%86/id6478289846?l=ar",
      image: masakibCaptaionImage,
      isFeatured: false
    },
    {
      title: "A3tn: Heavy Logistics SaaS",
      description: "**Problem:** Manual paperwork for heavy machinery rentals. **Solution:** Built a multi-tenant architecture with live pricing engines and secure workflow monitoring. **Impact:** Digitalized the entire rental cycle for Saudi corporate fleets.",
      technologies: ["SaaS Architecture", "Live Pricing Engines", "Role-Based Access"],
      googlePlay: "https://play.google.com/store/apps/details?id=com.sharaftech.e3tn",
      appStore: "https://apps.apple.com/us/app/a3tn-%D8%A5%D8%B9%D8%AA%D9%86/id6740632715",
      image: a3tnImage,
      isFeatured: true
    },
    {
      title: "Royat Wattan – Discount Coupons App",
      description: "App for discount coupons with provider/customer modes, package management, and featured discounts.",
      technologies: ["Flutter", "Package management", "Featured discounts"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.tsh.roya.roya",
      appStore: "https://play.google.com/store/apps/details?id=com.tsh.roya.roya",
      image: royaaImage,
      isFeatured: false
    },
    {
      title: "Fany Plus – Home Services App",
      description: "Home services booking app with provider/customer modes, task management, and real-time dashboards.",
      technologies: ["Flutter", "Task management", "Real-time dashboards"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.sharafTech.fany_plus",
      appStore: "https://apps.apple.com/us/app/fany-plus-%D9%81%D9%86%D9%8I-%D8%A8%D9%84%D8%B3/id6743993192",
      image: fanyPlusImage,
      isFeatured: false
    },
    {
      title: "Al-Kitab: Holy Quran Application",
      description: "Offline Quran app with 3 recitation styles, 174 reciters, prayer times, Ramadan schedule, tafsir, Hadith, and Quran radio.",
      technologies: ["Flutter", "Offline storage", "Audio streaming"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.dexef.qetaby&pcampaignid=web_share",
      appStore: "https://apps.apple.com/eg/app/%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85/id1635131408",
      image: alKitabImage,
      isFeatured: false
    },
    {
      title: "Wathba: Property Management App",
      description: "SaaS platform for property and community management, enabling leasing, service requests, and tenant interaction.",
      technologies: ["Flutter", "Property management", "SaaS solution"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.bim.wathba",
      appStore: null,
      image: wathbahImage,
      isFeatured: false
    },
    {
      title: "Sajil: Car Rental Application",
      description: "Car rental app with payments, real-time availability, and optimized state management for booking.",
      technologies: ["Flutter", "Payment integration", "Real-time availability"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=amp.sajil_app",
      appStore: "https://apps.apple.com/eg/app/%D8%B3%D8%A7%D8%AC%D9%84/id1566122348?l=ar",
      image: sajilImage,
      isFeatured: false
    },
    {
      title: "Maghsool: Laundry & Ironing Services App",
      description: "Laundry services app with customer, driver, and provider workflows plus Google Maps route tracking.",
      technologies: ["Flutter", "Google Maps API", "Route tracking"],
      status: "Published",
      googlePlay: "https://play.google.com/store/apps/details?id=com.aait.maghsool",
      appStore: "https://apps.apple.com/eg/app/maghsool-%D9%85%D8%BA%D8%B3%D9%88%D9%84/id6670730000?l=ar",
      image: maghsoolImage,
      isFeatured: false
    },
    {
      title: "Wajed: Multi-Vendor Marketplace",
      description: "**Architectural Challenge:** Orchestrating a 4-app supply chain. **Strategy:** Established a shared UI design system and unified state management using BLoC. **Impact:** Reduced front-end development time for internal tools by 30%.",
      technologies: ["Shared Design System", "Unified BLoC Store", "Supply Chain Logic"],
      status: "In Development",
      googlePlay: null,
      appStore: null,
      image: null,
      isFeatured: false
    },
    {
      title: "TSH E-Commerce App",
      description: "E-commerce app with categories, browsing, cart, payments, order tracking, and complete shopping cycle.",
      technologies: ["Flutter", "E-commerce", "Payment integration", "Order tracking"],
      status: "In Development",
      googlePlay: null,
      appStore: null,
      image: null,
      isFeatured: false
    }
  ]

  // Animations
  const fadeInUp = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
  const fadeInLeft = { initial: { opacity: 1, x: 0 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }
  const fadeInRight = { initial: { opacity: 1, x: 0 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }
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
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Osama Mousa
              </motion.h1>
              <motion.h4
                className="text-2xl md:text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Architecting Enterprise Mobile Ecosystems
              </motion.h4>
              <motion.h5
                className="text-lg md:text-xl font-medium text-muted-foreground mb-4"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                60fps Performance | Clean Architecture | Scalable Flutter Systems
              </motion.h5>

              <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" variants={fadeInUp}>
                I transform complex business requirements into high-performance mobile software. Specialist in the Flutter framework, focusing on production-grade architecture that scales from MVP to millions of users.
              </motion.p>
            </motion.div>
                        <motion.div className="flex flex-wrap justify-center gap-4" variants={fadeInUp}>
                <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection('projects')}>
                  View Projects
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 backdrop-blur-sm" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full px-8 backdrop-blur-sm border-primary/20" asChild>
                  <a href="#" download>Download CV</a>
                </Button>
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
              <div className="grid md:grid-cols-2 gap-8 mt-12">
              {strategicSkills.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-bold text-primary mb-2 flex items-center">
                    <Code className="mr-2 h-5 w-5" /> {skillGroup.category}
                  </h4>
                  <p className="text-muted-foreground">{skillGroup.items}</p>
                </motion.div>
              ))}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col overflow-hidden card-hover group cursor-pointer border-border/50 ${project.isFeatured ? 'ring-2 ring-primary/20 shadow-primary/5' : ''}`}>
                  {project.isFeatured && (
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-primary text-primary-foreground">Featured Case Study</Badge>
                    </div>
                  )}
                  <div className="relative overflow-hidden aspect-video">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center flex-col p-4 text-center">
                        <Smartphone className="h-12 w-12 text-muted-foreground mb-2" />
                        <span className="text-sm font-medium">Coming Soon</span>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      {project.status === 'In Development' && (
                        <Badge variant="outline" className="text-amber-500 border-amber-500">
                          Dev
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm mt-2 leading-relaxed">
                      {project.description.replace(/\*\*/g, '')}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[10px] font-semibold bg-primary/5 text-primary border-primary/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 flex flex-wrap gap-2">
                    {project.googlePlay && (
                      <Button variant="outline" size="sm" asChild className="h-8 px-3 text-xs">
                        <a href={project.googlePlay} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-1.5 h-3.5 w-3.5" /> Google Play
                        </a>
                      </Button>
                    )}
                    {project.appStore && (
                      <Button variant="outline" size="sm" asChild className="h-8 px-3 text-xs">
                        <a href={project.appStore} target="_blank" rel="noopener noreferrer">
                          <Apple className="mr-1.5 h-3.5 w-3.5" /> App Store
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h3 className="text-2xl font-bold text-center mb-8">Full Strategic Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {strategicSkills.flatMap((group, i) => 
                (group.items || '').split(',').map((item, j) => (
                  <motion.div key={`${i}-${j}`} variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Badge variant="secondary" className="text-sm px-4 py-2">{item.trim()}</Badge>
                  </motion.div>
                ))
              )}
            </div>
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
