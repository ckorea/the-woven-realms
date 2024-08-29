document.addEventListener('DOMContentLoaded', () => {
    const realmSections = document.querySelectorAll('.realm-section');
    
    realmSections.forEach(section => {
        const header = section.querySelector('h2');
        header.addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });
});