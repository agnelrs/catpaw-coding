import React from "react";
import { Github, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation duration in ms
            once: true,      // animate only once per element
        });
    }, []);

    return (
        <main className="min-h-screen bg-[#0d0d1f] text-white font-sans">
            {/* Navbar */}
            <header className="flex items-center justify-between px-8 py-4 shadow-md bg-[#141428]">
                <div className="flex items-center space-x-3">
                    <img src="/catpaw.png" alt="Logo" className="w-10 h-10" />
                    <div className="text-2xl font-bold text-[#00ffe0]">Cat Paw Coders</div>
                </div>
                <nav className="space-x-6 text-md text-pink-300">
                    <a href="#about" className="hover:text-[#00ffe0]">About</a>
                    <a href="#services" className="hover:text-[#00ffe0]">Services</a>
                    <a href="#portfolio" className="hover:text-[#00ffe0]">Portfolio</a>
                    <a href="#contact" className="hover:text-[#00ffe0]">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-4"
                data-aos="fade-up">
                <h1 className="text-5xl font-extrabold mb-4 text-[#00ffe0]">Welcome to the New Coding Experience</h1>
                <p className="text-lg max-w-2xl mb-6 text-pink-200">Web development, UI/UX design, mobile app development, and custom solutions — all handcrafted with code.</p>
                <button className="bg-[#00ffe0] hover:bg-[#00ccbb] text-black px-6 py-2 text-lg rounded-xl">Get in Touch</button>
            </section>

            {/* About Section */}
            <section id="about" className="px-6 py-16 bg-[#1f1f3b]" data-aos="fade-up">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#00ffe0]">About Us</h2>
                    <p className="text-pink-200 text-lg">At Cat Paw Coders, we’re passionate about creating clean, efficient, and beautiful digital solutions. We combine creativity with logic to build amazing experiences for web and mobile users.</p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="px-6 py-16" data-aos="fade-up">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[#00ffe0]">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Web Development", desc: "Custom websites using modern frameworks." },
                            { title: "UI/UX Design", desc: "Designs that are user-friendly and stunning." },
                            { title: "App Development", desc: "Mobile apps for Android & iOS." },
                        ].map((service, i) => (
                            <div key={i} className="bg-[#1f1f3b] rounded-xl shadow-md p-6" data-aos="zoom-in"
                                data-aos-delay={i * 100}>
                                <h3 className="text-xl font-semibold mb-2 text-pink-300">{service.title}</h3>
                                <p className="text-pink-100">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="px-6 py-16 bg-[#141428]"data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#00ffe0] mb-10">Portfolio</h2>

                    <div className="grid md:grid-cols-2 gap-6"data-aos="flip-left">
                        <div className="bg-[#1f1f3b] rounded-xl shadow p-4">
                            <img src="/myweb.png" alt="My App Screenshot" className="rounded mb-4" />
                            <h4 className="font-bold text-lg mb-1 text-pink-200">My Weather App</h4>
                            <p className="text-pink-100 mb-2">A live weather forecast app built with React and OpenWeather API.</p>
                            <a href="https://myweatherapp.vercel.app" target="_blank" rel="noreferrer" className="text-[#00ffe0] hover:underline">
                                Live Demo
                            </a>
                        </div>

                        <div className="bg-[#1f1f3b] rounded-xl shadow p-4"data-aos="flip-left">
                            <img src="/my_uiux.png" alt="UIUX Screenshot" className="rounded mb-4" />
                            <h4 className="font-bold text-lg mb-1 text-pink-200">UI/UX Design Portfolio</h4>
                            <p className="text-pink-100 mb-2">Case studies and design samples for mobile and web interfaces.</p>
                            <a href="https://yourfigmalink.com" target="_blank" rel="noreferrer" className="text-[#00ffe0] hover:underline">
                                View Case Study
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-6 py-16"data-aos="fade-up">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#00ffe0] mb-6">Contact Us</h2>
                    <p className="mb-6 text-pink-100">Let’s build something amazing together. Reach out now!</p>
                    <div className="flex justify-center space-x-6 text-pink-300">
                        <a href="mailto:catpaw@coders.com" className="hover:text-[#00ffe0]"><Mail size={24} /></a>
                        <a href="tel:+1234567890" className="hover:text-[#00ffe0]"><Phone size={24} /></a>
                        <a href="https://github.com/catpawcoders" target="_blank" rel="noreferrer" className="hover:text-[#00ffe0]"><Github size={24} /></a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-[#1f1f3b] text-pink-300">
                &copy; {new Date().getFullYear()} Cat Paw Coders. All rights reserved.
            </footer>
        </main>
    );
};

export default HomePage;
