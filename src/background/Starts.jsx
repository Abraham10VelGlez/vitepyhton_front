import React, { useEffect, useState } from 'react'
export default function Starts() {
    useEffect(() => {
        function stars() {
            const count = 400;
            const section = document.querySelector('.starlight');

            var i = 0;



            while (i < count) {
                const star = document.createElement('i');
                const x = Math.floor(Math.random() * window.innerWidth)
                const y = Math.floor(Math.random() * window.innerHeight)


                const size = Math.random() * 4;
                star.style.left = x + 'px';
                star.style.top = y + 'px';

                star.style.width = 1 + size + 'px';
                star.style.height = 1 + size + 'px';

                const duration = Math.random() * 2;
                star.style.animationDuration = 2 + duration + 's';

                star.style.animationDelay = duration + 's';

                section.appendChild(star);
                i++
            }
        }
        stars();
    }, []);

    return (<div className="starlight"></div>)
}