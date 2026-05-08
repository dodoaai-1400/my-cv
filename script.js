document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('showContactBtn');
    const details = document.getElementById('contactDetails');

    if (btn && details) {
        btn.addEventListener('click', () => {
            if (details.classList.contains('hidden')) {
                details.classList.remove('hidden');
                btn.textContent = 'Hide Contact Details';
            } else {
                details.classList.add('hidden');
                btn.textContent = 'Show Contact Details';
            }
        });
    }

    const sections = document.querySelectorAll('.cv-section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#fdfbff';
            section.style.transition = '0.3s';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = 'transparent';
        });
    });
});