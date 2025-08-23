// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('RESPECT MY VPS - ACID CYBERPUNK SYSTEM LOADED');
    
    // Initialize glitch text effects
    initGlitchTexts();
    
    // Initialize scanlines effect
    createScanlines();
    
    // Initialize noise overlay
    createNoiseOverlay();
    
    // Initialize responsive menu
    initResponsiveMenu();
    
    // Add hover glitch effects to elements
    addHoverGlitchEffects();
    
    // Add random glitch effects
    setInterval(randomGlitchEffect, 5000);
    
    // Add ultra-aggressive effects to acid text
    initUltraAggressiveEffects();
    
    // Add digital distortion effects to contact section
    if (document.querySelector('#contact-section')) {
        addContactSectionEffects();
    }
    
    // Initialize background music
    initBackgroundAudio();
});

// Initialize all elements with glitch effect
function initGlitchTexts() {
    const glitchElements = document.querySelectorAll('.glitch, .glitch-small');
    
    glitchElements.forEach(element => {
        // Set the data-text attribute to match the text content for the glitch effect
        const text = element.innerText;
        element.setAttribute('data-text', text);
        
        // Add random glitch intervals to each element
        setRandomGlitchInterval(element);
    });
}

// Create scanlines effect
function createScanlines() {
    // Add more scanlines dynamically for aggressive effect
    for (let i = 0; i < 3; i++) {
        const scanline = document.createElement('div');
        scanline.classList.add('scanline-' + i);
        scanline.style.position = 'fixed';
        scanline.style.top = '0';
        scanline.style.left = '0';
        scanline.style.width = '100%';
        scanline.style.height = '1px';
        scanline.style.background = `rgba(255, ${i * 20}, ${i * 60}, 0.1)`;
        scanline.style.zIndex = '9999';
        scanline.style.pointerEvents = 'none';
        scanline.style.animation = `scanline ${3 + i}s linear infinite`;
        document.body.appendChild(scanline);
    }
}

// Add random glitch intervals to elements
function setRandomGlitchInterval(element) {
    // Apply occasional stronger glitch effect
    setInterval(() => {
        // Apply more aggressive glitch
        element.style.animation = 'none';
        element.offsetHeight; // Force reflow
        
        // Apply a random transform
        const glitchX = Math.random() * 10 - 5;
        const glitchY = Math.random() * 10 - 5;
        element.style.transform = `translate(${glitchX}px, ${glitchY}px)`;
        
        // Add color distortion
        const color = Math.random() > 0.5 ? 'rgba(255, 0, 60, 0.8)' : 'rgba(0, 255, 210, 0.8)';
        element.style.textShadow = `0 0 10px ${color}`;
        
        // Reset after a short delay
        setTimeout(() => {
            element.style.transform = '';
            element.style.textShadow = '';
            element.style.animation = '';
        }, 100 + Math.random() * 200);
    }, 3000 + Math.random() * 5000);
}

// Initialize responsive menu
function initResponsiveMenu() {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton) {
        // Enhanced mobile touch handling
        menuButton.addEventListener('click', handleMenuToggle);
        menuButton.addEventListener('touchstart', (e) => {
            // Prevent default to avoid double-trigger issues on iOS
            e.preventDefault();
        });
        menuButton.addEventListener('touchend', (e) => {
            e.preventDefault(); // Prevent double triggering
            handleMenuToggle(e);
        });
        
        function handleMenuToggle(e) {
            if (e) e.stopPropagation(); // Stop event bubbling
            
            // Create glitch effect on menu open
            document.body.classList.add('menu-glitch');
            menuButton.classList.toggle('menu-button-active');
            
            // Force display all navigation items
            navLinks.classList.toggle('active');
            
            // Ensure all links are visible when menu is active
            const navItems = document.querySelectorAll('.nav-links li');
            navItems.forEach(item => {
                if (navLinks.classList.contains('active')) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-10px)';
                }
            });
            
            setTimeout(() => {
                document.body.classList.remove('menu-glitch');
            }, 300);
        }
        
        // Close menu when clicking a nav link (mobile UX improvement)
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuButton.classList.remove('menu-button-active');
                }
            });
            
            // Add touch support for mobile
            link.addEventListener('touchend', (e) => {
                if (navLinks.classList.contains('active')) {
                    // Small delay to allow the link to be followed
                    setTimeout(() => {
                        navLinks.classList.remove('active');
                        menuButton.classList.remove('menu-button-active');
                    }, 100);
                }
            });
        });
        
        // Close menu when clicking outside (mobile UX improvement)
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                e.target !== menuButton && 
                !menuButton.contains(e.target)) {
                navLinks.classList.remove('active');
                menuButton.classList.remove('menu-button-active');
            }
        });
    }
    
    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        // Reset any critical UI elements on orientation change
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuButton.classList.remove('menu-button-active');
        }
    });
}

// Add hover glitch effects to elements
function addHoverGlitchEffects() {
    const cards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add strong glitch effect on hover
            card.classList.add('glitch-hover');
            
            // Add random border flash
            setTimeout(() => {
                card.style.borderColor = 'var(--primary)';
                card.style.boxShadow = '0 0 20px var(--primary-glow)';
                
                setTimeout(() => {
                    card.style.borderColor = 'var(--secondary)';
                    card.style.boxShadow = '0 0 20px var(--secondary-glow)';
                    
                    setTimeout(() => {
                        card.style.borderColor = '';
                        card.style.boxShadow = '';
                    }, 100);
                }, 100);
            }, 0);
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('glitch-hover');
        });
    });
}

// Create random glitch effect throughout the page
function randomGlitchEffect() {
    // Create a full-screen glitch overlay
    const glitchOverlay = document.createElement('div');
    glitchOverlay.style.position = 'fixed';
    glitchOverlay.style.top = '0';
    glitchOverlay.style.left = '0';
    glitchOverlay.style.width = '100%';
    glitchOverlay.style.height = '100%';
    glitchOverlay.style.background = 'rgba(255, 0, 60, 0.05)';
    glitchOverlay.style.zIndex = '9998';
    glitchOverlay.style.pointerEvents = 'none';
    glitchOverlay.style.mixBlendMode = 'color-dodge';
    document.body.appendChild(glitchOverlay);
    
    // Create random horizontal lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        const yPos = Math.random() * 100;
        const height = Math.random() * 5 + 1;
        
        line.style.position = 'absolute';
        line.style.top = `${yPos}%`;
        line.style.left = '0';
        line.style.width = '100%';
        line.style.height = `${height}px`;
        line.style.backgroundColor = i % 2 === 0 ? 'rgba(255, 0, 60, 0.8)' : 'rgba(0, 255, 210, 0.8)';
        line.style.opacity = Math.random() * 0.5 + 0.5;
        
        glitchOverlay.appendChild(line);
    }
    
    // Add color shift to the whole page
    document.body.style.filter = 'hue-rotate(90deg)';
    
    // Add slight offset to all headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.style.transform = 'translateX(5px)';
        heading.style.textShadow = '0 0 15px var(--primary)';
    });
    
    // Reset everything after a short delay
    setTimeout(() => {
        document.body.style.filter = '';
        
        headings.forEach(heading => {
            heading.style.transform = '';
            heading.style.textShadow = '';
        });
        
        document.body.removeChild(glitchOverlay);
    }, 200);
}

// Create noise overlay for more aggressive effect
function createNoiseOverlay() {
    const noiseOverlay = document.createElement('div');
    noiseOverlay.classList.add('noise-overlay');
    noiseOverlay.style.position = 'fixed';
    noiseOverlay.style.top = '0';
    noiseOverlay.style.left = '0';
    noiseOverlay.style.width = '100%';
    noiseOverlay.style.height = '100%';
    noiseOverlay.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")';
    noiseOverlay.style.opacity = '0.12';
    noiseOverlay.style.pointerEvents = 'none';
    noiseOverlay.style.zIndex = '9995';
    noiseOverlay.style.mixBlendMode = 'overlay';
    document.body.appendChild(noiseOverlay);
}

// Ultra aggressive effects for acid text
function initUltraAggressiveEffects() {
    const acidText = document.querySelector('.acid-text');
    if (!acidText) return;
    
    // Create RGB shift effect
    const rgbShift = () => {
        const shifts = [
            {x: -3, y: 0, color: 'rgba(255, 0, 60, 0.8)', blend: 'screen'},
            {x: 3, y: 0, color: 'rgba(0, 255, 210, 0.8)', blend: 'screen'},
            {x: 0, y: 2, color: 'rgba(255, 255, 0, 0.5)', blend: 'overlay'}
        ];
        
        shifts.forEach((shift, i) => {
            const shiftEl = acidText.cloneNode(true);
            shiftEl.style.position = 'absolute';
            shiftEl.style.top = '0';
            shiftEl.style.left = '0';
            shiftEl.style.color = shift.color;
            shiftEl.style.transform = `translate(${shift.x}px, ${shift.y}px)`;
            shiftEl.style.pointerEvents = 'none';
            shiftEl.style.mixBlendMode = shift.blend;
            shiftEl.style.opacity = '0.6';
            shiftEl.style.filter = 'blur(1px)';
            shiftEl.style.zIndex = '-1';
            
            acidText.parentNode.appendChild(shiftEl);
            
            // Animate the RGB shift
            setInterval(() => {
                const newX = shift.x + (Math.random() * 4 - 2);
                const newY = shift.y + (Math.random() * 4 - 2);
                shiftEl.style.transform = `translate(${newX}px, ${newY}px)`;
            }, 100);
        });
        
        // Add digital noise to text
        acidText.style.position = 'relative';
        setInterval(() => {
            if (Math.random() > 0.8) {
                acidText.style.opacity = '0.9';
                setTimeout(() => {
                    acidText.style.opacity = '1';
                }, 100);
            }
            
            if (Math.random() > 0.95) {
                acidText.style.transform = 'translateX(3px)';
                setTimeout(() => {
                    acidText.style.transform = 'translateX(0)';
                }, 50);
            }
        }, 200);
    };
    
    // Execute with slight delay to ensure DOM is ready
    setTimeout(rgbShift, 500);
}

// Add digital distortion effects to the contact section
function addContactSectionEffects() {
    const contactSection = document.querySelector('#contact-section');
    const contactLinks = document.querySelectorAll('.contact-link');
    
    // Create digital distortion lines
    const createDistortionLines = () => {
        const distortionContainer = document.createElement('div');
        distortionContainer.style.position = 'absolute';
        distortionContainer.style.top = '0';
        distortionContainer.style.left = '0';
        distortionContainer.style.width = '100%';
        distortionContainer.style.height = '100%';
        distortionContainer.style.pointerEvents = 'none';
        distortionContainer.style.zIndex = '1';
        distortionContainer.style.overflow = 'hidden';
        contactSection.style.position = 'relative';
        
        // Create horizontal distortion lines
        for (let i = 0; i < 15; i++) {
            const line = document.createElement('div');
            const yPos = Math.random() * 100;
            const height = Math.random() * 1 + 0.5;
            const color = i % 2 === 0 ? 
                'linear-gradient(90deg, rgba(255,0,60,0), rgba(255,0,60,0.4), rgba(255,0,60,0))' : 
                'linear-gradient(90deg, rgba(0,255,210,0), rgba(0,255,210,0.4), rgba(0,255,210,0))';
            
            line.style.position = 'absolute';
            line.style.top = `${yPos}%`;
            line.style.left = '0';
            line.style.width = '100%';
            line.style.height = `${height}px`;
            line.style.background = color;
            line.style.opacity = '0.6';
            line.style.boxShadow = i % 2 === 0 ? 
                '0 0 10px rgba(255,0,60,0.6)' : 
                '0 0 10px rgba(0,255,210,0.6)';
            line.style.animation = `scanline ${5 + i}s linear infinite`;
            
            distortionContainer.appendChild(line);
        }
        
        contactSection.appendChild(distortionContainer);
    };
    
    // Add special effects for each styled contact link
    contactLinks.forEach(link => {
        // Cyberpunk style effects (YouTube)
        if (link.classList.contains('cyberpunk-style')) {
            const glitchBox = link.querySelector('.cyber-glitch-box');
            
            link.addEventListener('mouseenter', () => {
                // Create text glitches
                const addRandomGlitches = () => {
                    // Add random text corruption
                    const span = link.querySelector('span');
                    const originalText = span.innerText;
                    
                    // Create glitch effect on text
                    const glitchText = () => {
                        const chars = '01010010110101!@#$%^&*()_-+=<>?/|\\';
                        const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
                        const randomIndex = Math.floor(Math.random() * originalText.length);
                        const randomLength = Math.floor(Math.random() * 3) + 1;
                        let newText = originalText.split('');
                        
                        for (let i = 0; i < randomLength; i++) {
                            if (randomIndex + i < newText.length) {
                                newText[randomIndex + i] = randomChar();
                            }
                        }
                        
                        span.innerText = newText.join('');
                        
                        // Reset back to original
                        setTimeout(() => {
                            span.innerText = originalText;
                        }, 100);
                    };
                    
                    // Apply glitch randomly
                    if (Math.random() > 0.7) {
                        glitchText();
                    }
                };
                
                // Create horizontal scan lines that move through the element
                const createScanLines = () => {
                    const scanLine = document.createElement('div');
                    scanLine.style.position = 'absolute';
                    scanLine.style.height = '2px';
                    scanLine.style.width = '120%';
                    scanLine.style.background = 'linear-gradient(90deg, rgba(255,42,109,0), rgba(255,42,109,0.8), rgba(255,42,109,0))';
                    scanLine.style.left = '-10%';
                    scanLine.style.top = `${Math.random() * 100}%`;
                    scanLine.style.opacity = '0.8';
                    scanLine.style.zIndex = '5';
                    scanLine.style.animation = 'cyber-scan 1.5s linear forwards';
                    
                    glitchBox.appendChild(scanLine);
                    
                    // Remove scan line after animation completes
                    setTimeout(() => {
                        if (glitchBox.contains(scanLine)) {
                            glitchBox.removeChild(scanLine);
                        }
                    }, 1500);
                };
                
                // Create interval effects
                const glitchInterval = setInterval(addRandomGlitches, 200);
                const scanInterval = setInterval(createScanLines, 700);
                
                // Store intervals for cleanup
                link.dataset.glitchInterval = glitchInterval;
                link.dataset.scanInterval = scanInterval;
            });
            
            link.addEventListener('mouseleave', () => {
                clearInterval(parseInt(link.dataset.glitchInterval));
                clearInterval(parseInt(link.dataset.scanInterval));
                const span = link.querySelector('span');
                span.innerText = 'YouTube Channel';  // Reset to original text
                
                // Clean up any remaining scan lines
                const glitchBox = link.querySelector('.cyber-glitch-box');
                while (glitchBox.firstChild) {
                    glitchBox.removeChild(glitchBox.firstChild);
                }
            });
        }
        
        // Neotech style effects (Email)
        else if (link.classList.contains('neotech-style')) {
            const circuit = link.querySelector('.neotech-circuit');
            
            link.addEventListener('mouseenter', () => {
                // Create moving data particles
                const createParticle = () => {
                    const particle = document.createElement('div');
                    const size = Math.random() * 3 + 2;
                    const startX = Math.random() * 100;
                    const startY = Math.random() * 100;
                    const direction = Math.random() > 0.5 ? 1 : -1;
                    
                    particle.style.position = 'absolute';
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.borderRadius = '50%';
                    particle.style.background = '#05d9e8';
                    particle.style.boxShadow = '0 0 5px #05d9e8';
                    particle.style.top = `${startY}%`;
                    particle.style.left = `${startX}%`;
                    particle.style.zIndex = '2';
                    particle.style.opacity = '0.7';
                    
                    // Animate the particle
                    particle.animate(
                        [
                            { transform: `translate(0, 0)`, opacity: 0.7 },
                            { transform: `translate(${direction * 50}px, ${-50}px)`, opacity: 0 }
                        ],
                        {
                            duration: 1500,
                            easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                        }
                    );
                    
                    circuit.appendChild(particle);
                    
                    // Remove particle after animation
                    setTimeout(() => {
                        if (circuit.contains(particle)) {
                            circuit.removeChild(particle);
                        }
                    }, 1500);
                };
                
                // Create circuit animation effect
                const circuitInterval = setInterval(createParticle, 200);
                link.dataset.circuitInterval = circuitInterval;
                
                // Add extra glow effect
                link.style.boxShadow = '0 0 20px #05d9e8, 0 0 40px rgba(5, 217, 232, 0.4)';
            });
            
            link.addEventListener('mouseleave', () => {
                clearInterval(parseInt(link.dataset.circuitInterval));
                link.style.boxShadow = '';
                
                // Clean up any remaining particles
                const circuit = link.querySelector('.neotech-circuit');
                while (circuit.children.length > 0) {
                    circuit.removeChild(circuit.lastChild);
                }
            });
        }
        
        // Love style effects (Support)
        else if (link.classList.contains('love-style')) {
            const lovePulse = link.querySelector('.love-pulse');
            
            link.addEventListener('mouseenter', () => {
                // Create floating hearts
                const createHeart = () => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '❤';
                    heart.style.position = 'absolute';
                    heart.style.color = '#ff0066';
                    heart.style.fontSize = `${Math.random() * 10 + 10}px`;
                    heart.style.opacity = '0.8';
                    heart.style.left = `${Math.random() * 80 + 10}%`;
                    heart.style.bottom = '0';
                    heart.style.zIndex = '10';
                    heart.style.pointerEvents = 'none';
                    
                    // Animate the heart
                    heart.animate(
                        [
                            { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                            { transform: `translateY(-${Math.random() * 50 + 50}px) rotate(${Math.random() * 90 - 45}deg)`, opacity: 0 }
                        ],
                        {
                            duration: 2000,
                            easing: 'ease-out',
                        }
                    );
                    
                    link.appendChild(heart);
                    
                    // Remove heart after animation
                    setTimeout(() => {
                        if (link.contains(heart)) {
                            link.removeChild(heart);
                        }
                    }, 2000);
                };
                
                // Create heart animation effect
                const heartInterval = setInterval(createHeart, 300);
                link.dataset.heartInterval = heartInterval;
                
                // Intensify pulse animation
                lovePulse.style.opacity = '1';
                lovePulse.style.background = 'radial-gradient(circle at center, rgba(255, 0, 102, 0.3) 0%, transparent 70%)';
            });
            
            link.addEventListener('mouseleave', () => {
                clearInterval(parseInt(link.dataset.heartInterval));
                
                // Remove all hearts
                const hearts = link.querySelectorAll('div:not(.love-pulse)');
                hearts.forEach(heart => {
                    if (heart !== lovePulse) {
                        link.removeChild(heart);
                    }
                });
                
                // Reset pulse
                lovePulse.style.opacity = '0';
            });
        }
        
        // Acid style effects (Discord)
        else if (link.classList.contains('acid-style')) {
            const acidDrip = link.querySelector('.acid-drip');
            
            link.addEventListener('mouseenter', () => {
                // Create acid drips
                const createDrip = () => {
                    const drip = document.createElement('div');
                    const startX = Math.random() * 90 + 5;
                    const width = Math.random() * 5 + 2;
                    const speed = Math.random() * 2 + 1;
                    
                    drip.style.position = 'absolute';
                    drip.style.width = `${width}px`;
                    drip.style.height = '0';
                    drip.style.background = '#00ff66';
                    drip.style.boxShadow = '0 0 8px #00ff66';
                    drip.style.top = '0';
                    drip.style.left = `${startX}%`;
                    drip.style.zIndex = '5';
                    drip.style.opacity = '0.7';
                    drip.style.borderRadius = '0 0 4px 4px';
                    
                    // Start drip animation
                    let height = 0;
                    const dripInterval = setInterval(() => {
                        height += speed;
                        drip.style.height = `${height}px`;
                        
                        // If drip reaches bottom, stop animation
                        if (height >= link.clientHeight) {
                            clearInterval(dripInterval);
                            
                            // Create splash effect
                            const splash = document.createElement('div');
                            splash.style.position = 'absolute';
                            splash.style.width = `${width * 4}px`;
                            splash.style.height = `${width}px`;
                            splash.style.background = '#00ff66';
                            splash.style.borderRadius = '50%';
                            splash.style.left = `calc(${startX}% - ${width * 2}px)`;
                            splash.style.bottom = '0';
                            splash.style.opacity = '0.7';
                            splash.style.boxShadow = '0 0 8px #00ff66';
                            splash.style.zIndex = '4';
                            
                            acidDrip.appendChild(splash);
                            
                            // Fade out splash
                            setTimeout(() => {
                                splash.style.opacity = '0';
                                setTimeout(() => {
                                    if (acidDrip.contains(splash)) {
                                        acidDrip.removeChild(splash);
                                    }
                                }, 500);
                            }, 300);
                            
                            // Remove drip after delay
                            setTimeout(() => {
                                if (acidDrip.contains(drip)) {
                                    acidDrip.removeChild(drip);
                                }
                            }, 500);
                        }
                    }, 20);
                    
                    acidDrip.appendChild(drip);
                };
                
                // Create acid filter effect
                link.style.filter = 'hue-rotate(-30deg) saturate(1.5)';
                
                // Create drip animation effect
                const dripInterval = setInterval(createDrip, 400);
                link.dataset.dripInterval = dripInterval;
            });
            
            link.addEventListener('mouseleave', () => {
                clearInterval(parseInt(link.dataset.dripInterval));
                
                // Clean up any remaining drips
                while (acidDrip.firstChild) {
                    acidDrip.removeChild(acidDrip.firstChild);
                }
                
                link.style.filter = '';
            });
        }
        
        // Tech style effects (GitHub)
        else if (link.classList.contains('tech-style')) {
            const techGrid = link.querySelector('.tech-grid');
            
            link.addEventListener('mouseenter', () => {
                // Create data blocks
                const createDataBlock = () => {
                    const block = document.createElement('div');
                    const size = Math.random() * 15 + 5;
                    const posX = Math.random() * 100;
                    const posY = Math.random() * 100;
                    const colors = ['#4285f4', '#34a853', '#fbbc05', '#ea4335'];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    
                    block.style.position = 'absolute';
                    block.style.width = `${size}px`;
                    block.style.height = `${size}px`;
                    block.style.background = color;
                    block.style.opacity = '0.1';
                    block.style.top = `${posY}%`;
                    block.style.left = `${posX}%`;
                    block.style.zIndex = '3';
                    block.style.borderRadius = Math.random() > 0.5 ? '0' : '50%';
                    
                    // Flash effect
                    block.animate(
                        [
                            { opacity: 0.1 },
                            { opacity: 0.4 },
                            { opacity: 0.1 }
                        ],
                        {
                            duration: 1000,
                            easing: 'ease-in-out',
                        }
                    );
                    
                    techGrid.appendChild(block);
                    
                    // Remove block after animation
                    setTimeout(() => {
                        if (techGrid.contains(block)) {
                            techGrid.removeChild(block);
                        }
                    }, 1000);
                };
                
                // Create scan effect
                const createScan = () => {
                    const scan = document.createElement('div');
                    scan.style.position = 'absolute';
                    scan.style.height = '2px';
                    scan.style.width = '100%';
                    scan.style.background = 'linear-gradient(90deg, transparent, #4285f4, transparent)';
                    scan.style.left = '0';
                    scan.style.top = '0';
                    scan.style.opacity = '0.7';
                    scan.style.zIndex = '4';
                    scan.style.boxShadow = '0 0 10px #4285f4';
                    
                    // Animate scan
                    scan.animate(
                        [
                            { top: '0' },
                            { top: '100%' }
                        ],
                        {
                            duration: 1500,
                            easing: 'linear',
                        }
                    );
                    
                    techGrid.appendChild(scan);
                    
                    // Remove scan after animation
                    setTimeout(() => {
                        if (techGrid.contains(scan)) {
                            techGrid.removeChild(scan);
                        }
                    }, 1500);
                };
                
                // Increase grid opacity
                techGrid.style.opacity = '0.7';
                
                // Create animation effects
                const dataInterval = setInterval(createDataBlock, 200);
                const scanInterval = setInterval(createScan, 1500);
                
                link.dataset.dataInterval = dataInterval;
                link.dataset.scanInterval = scanInterval;
            });
            
            link.addEventListener('mouseleave', () => {
                clearInterval(parseInt(link.dataset.dataInterval));
                clearInterval(parseInt(link.dataset.scanInterval));
                
                // Reset grid opacity
                techGrid.style.opacity = '0.3';
                
                // Clean up any remaining elements
                const elements = techGrid.querySelectorAll('div');
                elements.forEach(el => techGrid.removeChild(el));
            });
        }
    });
    
    createDistortionLines();
}

// Initialize background audio
function initBackgroundAudio() {
    const audioElement = document.getElementById('background-audio');
    const toggleButton = document.getElementById('toggle-audio');
    let isPlaying = false;
    
    // Function to attempt starting the audio
    const startAudio = () => {
        if (!isPlaying) {
            audioElement.volume = 0.7; // Set volume to 70%
            // Set attributes to encourage autoplay
            audioElement.setAttribute('autoplay', 'true');
            audioElement.setAttribute('muted', 'false');
            
            // Try playing with promise to handle autoplay policy
            audioElement.play()
                .then(() => {
                    isPlaying = true;
                    toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>';
                    toggleButton.classList.remove('muted');
                    toggleButton.title = 'Mute Music';
                    
                    // Add animation to button when music is playing
                    toggleButton.style.animation = 'acid-pulse 2s infinite';
                    console.log('Audio playing successfully');
                })
                .catch(error => {
                    console.warn('Autoplay was prevented by browser policy:', error);
                    console.log('Will try again with interaction');
                    isPlaying = false;
                    
                    // Backup method: try again with low volume
                    audioElement.volume = 0.1;
                    audioElement.muted = false;
                    audioElement.play().catch(e => console.error('Second attempt failed:', e));
                });
        }
    };
    
    // Try to start audio immediately
    startAudio();
    
    // Also try starting on visibility change (when tab becomes visible)
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible' && !isPlaying) {
            startAudio();
        }
    });
    
    // Backup plan: start on any interaction
    const startWithInteraction = () => {
        startAudio();
        // Remove event listeners after first interaction
        document.removeEventListener('click', startWithInteraction);
        document.removeEventListener('keydown', startWithInteraction);
        document.removeEventListener('touchstart', startWithInteraction);
        document.removeEventListener('touchend', startWithInteraction);
        document.removeEventListener('scroll', startWithInteraction);
    };
    
    // Add event listeners as backup - more events for mobile compatibility
    document.addEventListener('click', startWithInteraction);
    document.addEventListener('keydown', startWithInteraction);
    document.addEventListener('touchstart', startWithInteraction);
    document.addEventListener('touchend', startWithInteraction);
    document.addEventListener('scroll', startWithInteraction);
    
    // Toggle audio button functionality with enhanced mobile support
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering document click
        handleAudioToggle();
    });
    
    // Add mobile-friendly touch event
    toggleButton.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevent any zoom issues on mobile
        e.stopPropagation();
        handleAudioToggle();
    });
    
    // Centralized function for toggling audio
    function handleAudioToggle() {
        // Add haptic feedback for supported devices
        if (navigator.vibrate) {
            navigator.vibrate(50); // Short vibration for feedback
        }
        
        if (isPlaying) {
            audioElement.pause();
            isPlaying = false;
            toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
            toggleButton.classList.add('muted');
            toggleButton.title = 'Unmute Music';
            toggleButton.style.animation = '';
        } else {
            // Always reset volume to normal level (70%) when manually toggling
            audioElement.volume = 0.7;
            
            audioElement.play()
                .then(() => {
                    isPlaying = true;
                    toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>';
                    toggleButton.classList.remove('muted');
                    toggleButton.title = 'Mute Music';
                    toggleButton.style.animation = 'acid-pulse 2s infinite';
                    
                    // Add visual feedback for successful play
                    toggleButton.style.borderColor = '#00ffd2';
                    setTimeout(() => {
                        toggleButton.style.borderColor = '';
                    }, 300);
                })
                .catch(error => {
                    console.error('Audio playback error:', error);
                    // Show visual feedback for error
                    toggleButton.style.borderColor = '#ff0000';
                    setTimeout(() => {
                        toggleButton.style.borderColor = '';
                    }, 300);
                });
        }
    }
    
    // Desktop effects - only add if not a touch device
    if (window.matchMedia('(hover: hover)').matches) {
        // Add glitch effect to the button on hover - desktop only
        toggleButton.addEventListener('mouseenter', () => {
            // Create glitch effect on button
            toggleButton.style.transform = 'scale(1.05)';
            
            const createGlitch = () => {
                const offsetX = (Math.random() * 6) - 3;
                const offsetY = (Math.random() * 6) - 3;
                toggleButton.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.05)`;
                
                setTimeout(() => {
                    toggleButton.style.transform = 'scale(1.05)';
                }, 50);
            };
            
            // Random glitches
            const glitchInterval = setInterval(createGlitch, 200);
            toggleButton.dataset.glitchInterval = glitchInterval;
        });
        
        toggleButton.addEventListener('mouseleave', () => {
            clearInterval(parseInt(toggleButton.dataset.glitchInterval));
            toggleButton.style.transform = '';
        });
    }
    
    // Add active state for touch devices
    toggleButton.addEventListener('touchstart', () => {
        toggleButton.classList.add('active-touch');
    });
    
    toggleButton.addEventListener('touchend', () => {
        toggleButton.classList.remove('active-touch');
    });
    
    // Force a tiny interaction to try to unlock audio
    setTimeout(() => {
        if (!isPlaying) {
            startAudio();
        }
    }, 100);
    
    // Monitor for potential audio interruptions (like phone calls on mobile)
    audioElement.addEventListener('pause', () => {
        if (isPlaying) {
            isPlaying = false;
            toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
            toggleButton.classList.add('muted');
            toggleButton.title = 'Unmute Music';
            toggleButton.style.animation = '';
        }
    });
    
    // Try to restart after interruption ends
    audioElement.addEventListener('canplaythrough', () => {
        if (!isPlaying && audioElement.paused) {
            audioElement.play().catch(e => console.warn('Could not autoplay after interruption:', e));
        }
    });
}

// Reveal animations for sections as you scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
            
            // Add glitch effect when section comes into view
            setTimeout(() => {
                const headings = section.querySelectorAll('h1, h2, h3');
                headings.forEach(heading => {
                    heading.style.animation = 'textGlitch 0.5s';
                    
                    // Add more aggressive glitch effect
                    if (heading.classList.contains('ultra-glitch')) {
                        heading.style.animation = 'ultra-glitch 0.5s, acid-shift 1s infinite alternate';
                    }
                    
                    setTimeout(() => {
                        if (!heading.classList.contains('ultra-glitch')) {
                            heading.style.animation = '';
                        }
                    }, 500);
                });
            }, 200);
        }
    });
});