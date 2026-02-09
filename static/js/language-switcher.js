/**
 * Language Switcher Component
 * Creates a language selector in the header for users to change language
 */

const KrishiLanguageSwitcher = (() => {
    'use strict';

    // HTML template for the language switcher dropdown
    const SWITCHER_TEMPLATE = `
        <div class="language-switcher">
            <button class="language-switcher-btn" id="languageSwitcherBtn" aria-label="Change language" title="Change language">
                <span class="flag-icon">🌍</span>
                <span class="lang-code">EN</span>
                <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            
            <div class="language-dropdown" id="languageDropdown">
                <div class="dropdown-header">
                    <h3>Select Language</h3>
                </div>
                <div class="languages-list" id="languagesList"></div>
            </div>
        </div>
    `;

    // Get language option HTML
    function getLanguageOptionHTML(langCode, langInfo) {
        return `
            <button class="language-option" data-language="${langCode}" title="${langInfo.name}">
                <span class="option-flag">${langInfo.flag}</span>
                <span class="option-name">${langInfo.native}</span>
                <span class="option-name-en">${langInfo.name}</span>
            </button>
        `;
    }

    // Initialize switcher
    function init() {
        console.log('🌐 Initializing Language Switcher...');

        // Insert switcher into page
        insertSwitcherIntoPage();

        // Setup event listeners
        setupEventListeners();

        // Update current language display
        updateCurrentLanguageDisplay();

        console.log('✅ Language Switcher initialized');
    }

    // Insert switcher into header
    function insertSwitcherIntoPage() {
        const header = document.querySelector('header.header, header');
        if (!header) {
            console.warn('⚠️ Header element not found. Language switcher will not be inserted.');
            return;
        }

        // Look for nav or create a language section
        let navElement = header.querySelector('nav');
        if (!navElement) {
            navElement = document.createElement('nav');
            navElement.className = 'nav';
            header.appendChild(navElement);
        }

        // Create a wrapper for the switcher
        const switcherWrapper = document.createElement('div');
        switcherWrapper.className = 'language-switcher-wrapper';
        switcherWrapper.innerHTML = SWITCHER_TEMPLATE;

        // Insert before any existing nav items or at the end
        const firstNavItem = navElement.querySelector('a, button');
        if (firstNavItem) {
            firstNavItem.parentElement.insertBefore(switcherWrapper, firstNavItem.parentElement.firstChild);
        } else {
            navElement.insertBefore(switcherWrapper, navElement.firstChild);
        }

        // Populate language options
        populateLanguageOptions();
    }

    // Populate language dropdown with all available languages
    function populateLanguageOptions() {
        const languagesList = document.getElementById('languagesList');
        if (!languagesList) return;

        const languages = KrishiI18n.getAllLanguages();
        languagesList.innerHTML = '';

        Object.entries(languages).forEach(([code, info]) => {
            languagesList.insertAdjacentHTML('beforeend', getLanguageOptionHTML(code, info));
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        const switcherBtn = document.getElementById('languageSwitcherBtn');
        const dropdown = document.getElementById('languageDropdown');
        const languageOptions = document.querySelectorAll('.language-option');

        // Toggle dropdown
        if (switcherBtn) {
            switcherBtn.addEventListener('click', () => {
                dropdown?.classList.toggle('active');
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher-wrapper')) {
                dropdown?.classList.remove('active');
            }
        });

        // Language selection
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const language = option.getAttribute('data-language');
                selectLanguage(language);
                dropdown?.classList.remove('active');
            });
        });

        // Listen for language change from other sources
        document.documentElement.addEventListener('languageChanged', () => {
            updateCurrentLanguageDisplay();
        });
    }

    // Select language
    function selectLanguage(language) {
        console.log(`🌐 Selecting language: ${language}`);
        KrishiI18n.setLanguage(language).then(() => {
            console.log(`✅ Language changed to: ${language}`);
        }).catch(error => {
            console.error(`❌ Failed to change language:`, error);
        });
    }

    // Update the current language button display
    function updateCurrentLanguageDisplay() {
        const currentLang = KrishiI18n.getCurrentLanguage();
        const langInfo = KrishiI18n.getLanguageInfo(currentLang);
        const switcherBtn = document.getElementById('languageSwitcherBtn');

        if (switcherBtn && langInfo) {
            switcherBtn.innerHTML = `
                <span class="flag-icon">${langInfo.flag}</span>
                <span class="lang-code">${currentLang.toUpperCase()}</span>
                <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;

            // Highlight the selected option
            document.querySelectorAll('.language-option').forEach(option => {
                option.classList.remove('active');
                if (option.getAttribute('data-language') === currentLang) {
                    option.classList.add('active');
                }
            });
        }
    }

    // Public API
    return {
        init,
        selectLanguage,
        updateCurrentLanguageDisplay,
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait for i18n to initialize
        setTimeout(() => {
            KrishiLanguageSwitcher.init();
        }, 100);
    });
} else {
    // DOM is already ready
    setTimeout(() => {
        KrishiLanguageSwitcher.init();
    }, 100);
}

// Expose globally
if (typeof window !== 'undefined') {
    window.KrishiLanguageSwitcher = KrishiLanguageSwitcher;
}
