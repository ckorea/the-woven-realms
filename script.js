document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.realm-section');
    const realmButtons = document.querySelectorAll('.realm-button');
    const body = document.body;

    sections.forEach(section => {
        const header = section.querySelector('h2');
        header.addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });

    realmButtons.forEach(button => {
        button.addEventListener('click', () => {
            const realm = button.getAttribute('data-realm');
            body.className = `realm-${realm}`;
            
            // Add visual feedback for button click
            button.classList.add('clicked');
            setTimeout(() => button.classList.remove('clicked'), 200);
        });
    });

    // Add this new part
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});