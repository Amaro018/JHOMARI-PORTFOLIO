"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  Moon,
  Sun,
  Mail,
  Code,
  FileCode,
  FileJson,
  Server,
  Palette,
  Layout,
} from "lucide-react";
import MessageContact from "./components/MessageContact";

// Create a theme instance
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const skills = [
    { name: "React", level: 80, icon: <Code size={24} /> },
    { name: "JavaScript", level: 80, icon: <FileCode size={24} /> },
    { name: "TypeScript", level: 80, icon: <FileJson size={24} /> },
    { name: "Node.js", level: 80, icon: <Server size={24} /> },
    { name: "TAILWIND", level: 80, icon: <Palette size={24} /> },
    { name: "UI/UX Design", level: 30, icon: <Layout size={24} /> },
    { name: "Next.js", level: 80, icon: <Code size={24} /> },
    { name: "MongoDB", level: 80, icon: <FileJson size={24} /> },
    { name: "Git", level: 80, icon: <Code size={24} /> },
    { name: "GitHub", level: 80, icon: <Code size={24} /> },
    { name: "Vim", level: 50, icon: <Code size={24} /> },
    { name: "Vscode", level: 80, icon: <Code size={24} /> },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce rental platform with authentication, cart, checkout, reviews,reservations and user,shop, and admin dashboard.",
      image: "/projects/subli.png",
      tags: [
        "React",
        "Node.js",
        "Sqlite",
        "Session",
        "Material UI",
        "Sonner",
        "Tailwind CSS",
      ],
      hasDemo: false,
      demoLink: "",
      detailLink: "https://github.com/Amaro018/react-subli",
    },
    {
      title: "Architect Portfolio",
      description:
        "A full stack portfolio website for architects with jwt as authentication and user dashboard",
      image: "/projects/arch.png",
      tags: [
        "Next.js",
        "MongoDB",
        "Material UI",
        "Sonner",
        "Tailwind CSS",
        "JWT",
        "Typescript",
        "Node.js",
        "Express.js",
        "Cloudinary",
        "Axios",
        "Framer Motion",
      ],
      hasDemo: true,
      demoLink: "https://archi-raphael-profile.vercel.app/",
      detailLink: "https://github.com/Amaro018/Learning-Mern",
    },
    {
      title: "Portfolio Website",
      description: "My first portfolio website with animations and dark mode.",
      image: "/projects/first-portfolio.png",
      tags: ["React", "Framer Motion", "Material UI", "Tailwind", "Axios"],
      hasDemo: true,
      demoLink: "https://jhomari-portfolio.vercel.app/",
      detailLink: "https://github.com/Amaro018/my-profile2024",
    },
    {
      title: "Healthcare System",
      description:
        "NHMS is a full-stack healthcare system with session as authentication and admin dashboard that can be used by the barangay health workers to determine the health status of the barangay residents.",
      image: "/projects/nhms.png",
      tags: [
        "Blitzjs",
        "React",
        "Material UI",
        "Session",
        "Sqlite",
        "Tailwind",
        "Node.js",
      ],
      hasDemo: false,
      demoLink: "",
      detailLink: "https://github.com/Amaro018/NHMS",
    },
    {
      title: "Inventory System",
      description:
        "This is a full-stack inventory system with session as authentication and admin dashboard that can be to store products that the company sells.",
      image: "/projects/izeek.png",
      tags: [
        "Blitzjs",
        "React",
        "Material UI",
        "Session",
        "Sqlite",
        "Tailwind",
        "Node.js",
      ],
      hasDemo: false,
      demoLink: "",
      detailLink: "https://github.com/Amaro018/izeek",
    },
    {
      title: "My Latest Portfolio",
      description: "This is it!",
      image: "/projects/latest-portfolio.png",
      tags: [
        "Next.js",
        "Material UI",
        "Tailwind",
        "Node.js",
        "Typescript",
        "Framer Motion",
      ],
      hasDemo: true,
      demoLink: "https://jhomari-portfolio.vercel.app/",
      detailLink: "https://github.com/Amaro018/my-profile2024",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppBar position="sticky" color="default" elevation={1}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Portfolio
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={2}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </Button>
                ))}
                <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </AppBar>

        {mobileOpen && (
          <Box
            sx={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              bgcolor: "background.paper",
              zIndex: 1100,
              boxShadow: 3,
            }}
          >
            <Stack direction="column" spacing={0}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  fullWidth
                  sx={{ py: 1.5, justifyContent: "flex-start", pl: 3 }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                fullWidth
                sx={{ py: 1.5, justifyContent: "flex-start", pl: 3 }}
                onClick={toggleDarkMode}
                startIcon={darkMode ? <Sun size={20} /> : <Moon size={20} />}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </Stack>
          </Box>
        )}

        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* Hero Section */}
          <Box
            id="home"
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(45deg, #303f9f 30%, #1a237e 90%)"
                  : "linear-gradient(45deg, #e8eaf6 30%, #c5cae9 90%)",
            }}
          >
            <Container>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  >
                    <Typography
                      variant="overline"
                      sx={{ letterSpacing: 2, fontWeight: "bold" }}
                    >
                      Hello, I&apos;m
                    </Typography>
                    <Typography
                      variant="h2"
                      component="h1"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Jhomari Amaro
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ mb: 4, color: "text.secondary" }}
                    >
                      Full Stack Developer
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => scrollToSection("contact")}
                      sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                    >
                      Contact Me
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      onClick={() => scrollToSection("projects")}
                      sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                    >
                      View Work
                    </Button>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Box
                      component="img"
                      src="/profile/jun.jpg"
                      alt="Profile"
                      sx={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        borderRadius: "50%",
                        boxShadow: 3,
                        mx: "auto",
                        display: "block",
                        transform: "scaleX(-1)",
                      }}
                    />
                  </motion.div>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* About Section */}
          <Box id="about" sx={{ py: 10 }}>
            <Container>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
                >
                  About Me
                </Typography>
                <Divider
                  sx={{
                    mb: 4,
                    width: "80px",
                    mx: "auto",
                    borderBottomWidth: 4,
                    borderColor: "primary.main",
                  }}
                />
              </motion.div>

              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={5}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                  >
                    <Box
                      component="img"
                      src="/profile/jun.jpg"
                      alt="About me"
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                    />
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={7}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                  >
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                      Who I Am
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: "text.secondary" }}
                    >
                      I&apos;m an aspiring Full Stack Developer with a strong
                      passion for building web applications that provide great
                      user experiences. I&apos;m continuously learning and
                      improving my skills in modern technologies to create
                      responsive and accessible applications.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 4, color: "text.secondary" }}
                    >
                      I enjoy tackling challenges, writing clean code, and
                      bringing ideas to life through development. While I&apos;m
                      still growing in my journey, I&apos;m eager to contribute,
                      collaborate, and build meaningful projects that make a
                      difference.
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          Name:
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 2, color: "text.secondary" }}
                        >
                          Jhomari Amaro
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          Email:
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 2, color: "text.secondary" }}
                        >
                          jhomari.amaro@gmail.com
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          Location:
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 2, color: "text.secondary" }}
                        >
                          Albay, Philippines
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          Availability:
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mb: 2, color: "text.secondary" }}
                        >
                          Available for freelance
                        </Typography>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ mt: 2 }}
                      href="/cv/AMARO, JHOMARI CV.pdf"
                      target="_blank"
                    >
                      Download Resume
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Skills Section */}
          <Box
            id="skills"
            sx={{
              py: 10,
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(0, 0, 0, 0.02)",
            }}
          >
            <Container>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
                >
                  My Skills
                </Typography>
                <Divider
                  sx={{
                    mb: 6,
                    width: "80px",
                    mx: "auto",
                    borderBottomWidth: 4,
                    borderColor: "primary.main",
                  }}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <Grid container spacing={4}>
                  {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div variants={fadeIn}>
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            p: 3,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            <Box
                              sx={{
                                mr: 2,
                                color: theme.palette.primary.main,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {skill.icon}
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold" }}
                            >
                              {skill.name}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              position: "relative",
                              height: 8,
                              bgcolor: "rgba(0,0,0,0.1)",
                              borderRadius: 1,
                              mb: 1,
                            }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.3 }}
                              style={{
                                position: "absolute",
                                height: "100%",
                                borderRadius: 4,
                                backgroundColor: theme.palette.primary.main,
                              }}
                            />
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {skill.level}%
                          </Typography>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Projects Section */}
          <Box id="projects" sx={{ py: 10 }}>
            <Container>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
                >
                  My Projects
                </Typography>
                <Divider
                  sx={{
                    mb: 6,
                    width: "80px",
                    mx: "auto",
                    borderBottomWidth: 4,
                    borderColor: "primary.main",
                  }}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
              >
                <Grid container spacing={4}>
                  {projects.map((project, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <motion.div variants={fadeIn}>
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={project.image}
                            alt={project.title}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography
                              variant="h5"
                              component="h3"
                              sx={{ mb: 1, fontWeight: "bold" }}
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 2 }}
                            >
                              {project.description}
                            </Typography>
                            <Box
                              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                            >
                              {project.tags.map((tag, i) => (
                                <Typography
                                  key={i}
                                  variant="caption"
                                  sx={{
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    bgcolor:
                                      theme.palette.mode === "dark"
                                        ? "rgba(255,255,255,0.1)"
                                        : "rgba(0,0,0,0.05)",
                                  }}
                                >
                                  {tag}
                                </Typography>
                              ))}
                            </Box>
                          </CardContent>
                          <Box sx={{ p: 2, pt: 0 }}>
                            {project.detailLink && (
                              <Button
                                size="small"
                                color="primary"
                                component="a"
                                href={project.detailLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Details
                              </Button>
                            )}
                            {project.hasDemo && project.demoLink && (
                              <Button
                                size="small"
                                color="primary"
                                component="a"
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Live Demo
                              </Button>
                            )}
                          </Box>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Container>
          </Box>

          {/* Contact Section */}
          <Box id="contact" sx={{ py: 10 }}>
            <Container>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
                >
                  Get In Touch
                </Typography>
                <Divider
                  sx={{
                    mb: 6,
                    width: "80px",
                    mx: "auto",
                    borderBottomWidth: 4,
                    borderColor: "primary.main",
                  }}
                />
              </motion.div>

              <Grid container spacing={6}>
                {/* Contact Information */}
                <Grid item xs={12} md={5}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                  >
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                      Contact Information
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 4, color: "text.secondary" }}
                    >
                      Feel free to reach out to me for any questions or
                      opportunities. I&apos;m always open to discussing new
                      projects, creative ideas, or opportunities to be part of
                      your vision.
                    </Typography>

                    <Stack spacing={3}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Mail size={20} style={{ marginRight: 16 }} />
                        <Typography variant="body1">
                          jhomari.amaro@gmail.com
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Code size={20} style={{ marginRight: 16 }} />
                        <Typography variant="body1">+639093087961</Typography>
                      </Box>
                    </Stack>
                  </motion.div>
                </Grid>
                <MessageContact fadeIn={fadeIn} />
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
