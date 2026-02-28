  // Parallax Counter Animation
        class ParallaxCounter {
            constructor() {
                this.targets = [
                    { target: 0, finalValue: 1500, label: 'Clients Served' },
                    { target: 1, finalValue: 250, label: 'OOT Raw Data' },
                    { target: 2, finalValue: 980, label: 'Recommendation' }
                ];
                this.animationDuration = 2500; // 2.5 seconds
                this.isInView = false;
                this.hasAnimated = false;
                this.init();
            }

            init() {
                this.observeHeroSection();
                this.setupParallax();
            }

            observeHeroSection() {
                const options = {
                    threshold: 0.3,
                    rootMargin: '0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !this.hasAnimated) {
                            this.hasAnimated = true;
                            this.animateCounters();
                        }
                    });
                }, options);

                const heroSection = document.getElementById('heroSection');
                if (heroSection) observer.observe(heroSection);
            }

            animateCounters() {
                this.targets.forEach((target) => {
                    this.countUp(target);
                });
            }

            countUp(target) {
                const element = document.querySelector(`[data-target="${target.target}"]`);
                if (!element) return;

                const startValue = 0;
                const endValue = target.finalValue;
                const startTime = Date.now();

                const animate = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / this.animationDuration, 1);

                    // Easing function for smooth animation
                    const easeOutQuad = progress => 1 - (1 - progress) * (1 - progress);
                    const easedProgress = easeOutQuad(progress);

                    const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
                    element.textContent = currentValue.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                animate();
            }

            setupParallax() {
                window.addEventListener('scroll', () => {
                    this.applyParallax();
                });
            }

            applyParallax() {
                const parallaxElements = document.querySelectorAll('.parallax-element');
                const scrollY = window.scrollY;

                parallaxElements.forEach((element, index) => {
                    const speed = 0.5 + (index * 0.1); // Varying speeds for each element
                    const translateY = scrollY * speed;
                    element.style.transform = `translateY(${translateY}px)`;
                });
            }
        }

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            new ParallaxCounter();
        });