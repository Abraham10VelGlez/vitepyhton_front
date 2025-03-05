import React, { useEffect } from 'react';

export default function Starts() {
    useEffect(() => {
        function stars() {
            const count = 400;
            const section = document.querySelector('.starlight');

            // Limpiar estrellas anteriores⭐
            section.innerHTML = '';

            for (let i = 0; i < count; i++) {
                const star = document.createElement('i');
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;

                const size = Math.random() * 4;
                star.style.left = `${x}px`;
                star.style.top = `${y}px`;

                star.style.width = `${1 + size}px`;
                star.style.height = `${1 + size}px`;

                const duration = Math.random() * 2;
                star.style.animationDuration = `${2 + duration}s`;
                star.style.animationDelay = `${duration}s`;

                section.appendChild(star);
            }
        }

        // Generar estrellas al montar el componente
        stars();

        // Regenerar estrellas al cambiar el tamaño de la ventana
        window.addEventListener('resize', stars);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', stars);
        };
    }, []);

    return <div className="starlight"></div>;
}
