gsap.fromTo(".card", 
    { y: -200 },
    { y: 0, duration: 5, ease: "elastic" }
);

function animateResult() {
    gsap.fromTo("#resultat", 
        { y: 200 },  // Commence 200px plus bas
        { y: 0, duration: 3, ease: "elastic" }  // Rebondit en remontant
    );
}

