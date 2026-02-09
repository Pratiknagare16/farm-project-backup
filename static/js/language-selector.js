// Language Selector Page - Initialize Language Selection
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initializeLanguageSelector();
    });

    function initializeLanguageSelector() {
        const languageCards = document.querySelectorAll('.language-card');
        const continueBtn = document.getElementById('continueBtn');
        let selectedLanguage = null;

        // Add event listeners to language cards
        languageCards.forEach(card => {
            card.addEventListener('click', () => selectLanguage(card));
        });

        // Continue button click handler
        continueBtn.addEventListener('click', () => {
            if (selectedLanguage) {
                // Save language preference
                saveLanguagePreference(selectedLanguage);
                // Redirect to main site
                window.location.href = '/dashboard';
            }
        });

        // Function to select a language
        function selectLanguage(card) {
            // Remove selection from all cards
            languageCards.forEach(c => c.classList.remove('selected'));
            
            // Add selection to clicked card
            card.classList.add('selected');
            selectedLanguage = card.getAttribute('data-language');
            
            // Enable continue button
            continueBtn.disabled = false;

            // Add animation
            continueBtn.style.animation = 'none';
            setTimeout(() => {
                continueBtn.style.animation = 'slideUp 0.3s ease-out';
            }, 10);
        }

        // Function to save language preference
        function saveLanguagePreference(language) {
            // Save in localStorage
            localStorage.setItem('krishi_language', language);
            localStorage.setItem('krishi_language_selected', 'true');
            
            // Also save in sessionStorage for current session
            sessionStorage.setItem('krishi_language', language);
        }

        // Add animation styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes buttonPulse {
                0% {
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(16, 185, 129, 0.7);
                }
                70% {
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0 10px rgba(16, 185, 129, 0);
                }
                100% {
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0 0 rgba(16, 185, 129, 0);
                }
            }

            .continue-button:not(:disabled):hover {
                animation: buttonPulse 2s infinite;
            }
        `;
        document.head.appendChild(style);
    }
})();
