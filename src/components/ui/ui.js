'use client';
import React from 'react';
import { useEffect, useState, useRef } from "react";
import { CardProject, CreateContact, CreateInput, CreateSkills } from "./creataUi";
import { dataMySkills, dataProjects } from "@/data/data";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm, ValidationError } from '@formspree/react';

export function DesktopNavbar() {
    return (
        <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">Beranda</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">Tentang</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition">Proyek</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition">Keterampilan</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Kontak</a>
        </div>
    )
}

export function MobileNavbar() {
    return (
        <div className="mobile-menu hidden md:hidden bg-white py-4 px-2">
            <a href="#home" className="block py-2 px-4 text-sm hover:bg-gray-100">Beranda</a>
            <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-100">Tentang</a>
            <a href="#projects" className="block py-2 px-4 text-sm hover:bg-gray-100">Proyek</a>
            <a href="#skills" className="block py-2 px-4 text-sm hover:bg-gray-100">Keterampilan</a>
            <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-100">Kontak</a>
        </div>
    )
}

export function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-indigo-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hai, Saya <span className="text-indigo-600">Raichan Machrus Adhyaksa</span></h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">Front-End Developer</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Saya berfokus pada pengembangan antarmuka web yang modern, responsif, dan efisien dengan mengintegrasikan teknologi terkini untuk memastikan pengalaman pengguna yang optimal.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">Hubungi Saya</a>
                            <a href="#projects" className="border border-gray-300 hover:border-indigo-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition">Lihat Proyek</a>
                        </div>
                    </div>
                    <div className="flex justify-center" data-aos="fade-left">
                        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                            alt="Profil Developer"
                            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl" /> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">Tentang Saya</h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12" data-aos="fade-up"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                            alt="Tentang Saya"
                            className="rounded-lg shadow-xl w-full" />
                    </div>
                    <div data-aos="fade-left">
                        <p className="text-lg text-gray-600 mb-4">
                            Saya adalah seorang Front-End Developer yang berfokus pada pengembangan website dan aplikasi web yang responsif, interaktif, serta berorientasi pada pengalaman pengguna.
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            Saya menjunjung tinggi prinsip <span className="font-semibold text-indigo-600">"clean code"</span> dan <span className="font-semibold text-indigo-600">"user-first design"</span>, dengan keyakinan bahwa setiap elemen antarmuka harus dirancang secara terstruktur dan fungsional untuk mendukung kenyamanan serta kebutuhan pengguna.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Di luar aktivitas pengembangan, saya aktif mempelajari teknologi terbaru, berbagi wawasan di komunitas developer, serta sesekali berkontribusi pada proyek open source..
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-indigo-50 px-4 py-2 rounded-full">
                                <span className="text-indigo-600 font-medium">Tailwind CSS</span>
                            </div>
                            <div className="bg-indigo-50 px-4 py-2 rounded-full">
                                <span className="text-indigo-600 font-medium">React.js</span>
                            </div>
                            <div className="bg-indigo-50 px-4 py-2 rounded-full">
                                <span className="text-indigo-600 font-medium">Responsive Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ProjectSection() {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">Proyek Terbaru</h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12" data-aos="fade-up"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardProject datas={dataProjects} />
                </div>
            </div>
        </section>
    )
}

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">Keterampilan</h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12" data-aos="fade-up"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CreateSkills datas={dataMySkills} />
                </div>
            </div>
        </section>
    )
}

export function ContactSection() {
    const [state, handleSubmit] = useForm("mpwdeweg");
    const [showAlert, setShowAlert] = useState(false);
    const [hasShownAlert, setHasShownAlert] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    useEffect(() => {
        if (state.succeeded && !hasShownAlert) {
            setShowAlert(true);
            setHasShownAlert(true);
            // Clear form inputs
            if (formRef.current) {
                formRef.current.reset();
            }
        }
    }, [state.succeeded, hasShownAlert]);

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 relative">
            {/* Custom Alert */}
            {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl transform transition-all" data-aos="zoom-in">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Pesan Terkirim!</h3>
                            </div>
                            <button
                                onClick={closeAlert}
                                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-600 ml-11">Terima kasih telah menghubungi saya. Saya akan segera merespons pesan Anda.</p>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={closeAlert}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">Hubungi Saya</h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12" data-aos="fade-up"></div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div data-aos="fade-right">
                        <h3 className="text-xl font-bold mb-4">Mari Berkolaborasi!</h3>
                        <p className="text-gray-600 mb-6">Jika Anda memiliki proyek atau ingin berdiskusi, silakan hubungi saya melalui formulir atau kontak langsung di bawah ini.</p>

                        <div className="space-y-4">
                            <CreateContact logo={"fa-envelope"} to={"reiadhyaksa@gmail.com"} />
                            <CreateContact logo={"fa-phone-alt"} to={"+62 823-1393-1717"} />
                        </div>
                    </div>

                    <form
                        ref={formRef}
                        method="POST"
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-lg shadow-md"
                        data-aos="fade-left"
                    >
                        <CreateInput to={"name"} text={"Nama"} type={"text"} id={"name"} nm={"name"} />
                        <CreateInput to={"email"} text={"Email"} type={"email"} id={"email"} nm={"email"} />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"></textarea>
                        </div>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}