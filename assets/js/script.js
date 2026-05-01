/**
 * CR Noticias 24/7 - Funcionalidad del Portal
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('CR Noticias 24/7 cargado correctamente.');

    // --- Efecto Header Sticky ---
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.textContent = mainNav.classList.contains('active') ? 'Cerrar ✕' : 'Menu ☰';
        });
    }

    // --- Animación de entrada para las tarjetas (Lazy Load / Fade In) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.news-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // --- Nota para Adaptación a Blogger ---
    /*
     * Para usar esto en Blogger:
     * 1. Ve a "Tema" -> "Editar HTML".
     * 2. Reemplaza el <style> de Blogger con el contenido de style.css.
     * 3. Reemplaza la estructura del body con el contenido de index.html.
     * 4. Usa etiquetas de Blogger como:
     *    <b:section id='main-posts' showaddelement='yes'>
     *      <b:widget id='Blog1' locked='true' title='Entradas del blog' type='Blog'/>
     *    </b:section>
     *    para renderizar el contenido dinámico.
     */
});
