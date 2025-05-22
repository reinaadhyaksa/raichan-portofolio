'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function CardProject({ datas }) {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true     
        });
    }, []);

    return (
        <>
            {datas.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition" data-aos="flip-up">
                    <img src={item.myImg} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.descriptions}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.teknologi.map((tech, i) => (
                                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{tech}</span>
                            ))}
                        </div>
                        <div className="flex space-x-3">
                            <a href={item.link} className="text-indigo-600 hover:text-indigo-800 font-medium">Demo</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export function CreateSkills({ datas }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <>
            {datas.map((item, index) => (
                <div key={index} className="skill-card bg-gray-50 p-6 rounded-lg transition" data-aos="zoom-in" data-aos-delay={item.animate}>
                    <div className="flex items-center mb-4">
                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                            <i className={`fab ${item.logo} text-indigo-600 text-2xl`}></i>
                        </div>
                        <h3 className="text-xl font-bold">{item.skills}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{item.txt}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: item.num }}></div>
                    </div>
                </div>
            ))}
        </>
    );
}

export function CreateContact({ logo, to }) {
    return (
        <div className="flex items-center">
            <i className={`fas ${logo} text-indigo-600 mr-4`}></i>
        <span>{to}</span>
        </div>
    )
}

export function CreateInput({ to, id, type, text, nm }) {
    return (
        <div className="mb-4">
            <label htmlFor={to} className="block text-gray-700 font-medium mb-2">{text}</label>
            <input type={type} id={id} name={nm} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
        </div>
    )
}