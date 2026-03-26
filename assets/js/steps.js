// ///////////////////////////
// steps before launch section
// ///////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const stepsOuter = document.querySelector('.steps-outer-container');
    const stepsSticky = document.querySelector('.steps-sticky-wrapper');
    const stepContents = document.querySelectorAll('.step-content');

    // mobile specific
    const mobileStarIcon = document.getElementById('star-icon');

    // desktop specific
    const desktopStarIcon = document.getElementById('desktop-star');

    const stepColors = ['#317CBF', '#8B6C7A', '#CD5D42', '#D53F15'];

    if (!stepsOuter) return;

    const handleScroll = () => {
        const rect = stepsOuter.getBoundingClientRect();
        const containerHeight = stepsOuter.offsetHeight;
        const viewportHeight = window.innerHeight;

        let progress = -rect.top / (containerHeight - viewportHeight);
        progress = Math.max(0, Math.min(1, progress));

        const isDesktop = window.innerWidth >= 768;

        if (!isDesktop) {
            // mobile
            if (mobileStarIcon) {
                mobileStarIcon.style.offsetDistance = `${progress * 100}%`;
            }

            const stepCount = stepContents.length;
            const stepIndex = Math.min(Math.floor(progress * stepCount), stepCount - 1);

            stepContents.forEach((content, index) => {
                // mobile only shows one active step at a time
                content.classList.toggle('active', index === stepIndex);
            });

            if (stepsSticky) {
                stepsSticky.style.setProperty('--step-color', stepColors[stepIndex]);
            }
        } else {
            // desktop
            if (desktopStarIcon) {
                desktopStarIcon.style.offsetDistance = `${progress * 100}%`;
            }

            if (progress > 0) {
                const stepCount = stepContents.length;
                const stepIndex = Math.min(Math.floor(progress * stepCount), stepCount - 1);

                stepContents.forEach((content, index) => {
                    // make them appear one after another and stay active
                    content.classList.toggle('active', index <= stepIndex);
                });

                if (stepsSticky) {
                    stepsSticky.style.setProperty('--step-color', stepColors[stepIndex]);
                }
            } else {
                // reset steps if we scroll back up
                stepContents.forEach(content => content.classList.remove('active'));
                if (stepsSticky) {
                    stepsSticky.style.setProperty('--step-color', 'var(--bg-dark)');
                }
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // initial check
});
