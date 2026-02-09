/**
 * ================================================================
 * KRISHI OFFICER - PROFESSIONAL I18N (INTERNATIONALIZATION) ENGINE
 * ================================================================
 * 
 * A comprehensive, production-ready multilingual translation system
 * supporting all 22 Indian languages with full RTL support.
 * 
 * Features:
 * - Dynamic language switching without page reload
 * - RTL support for Urdu and Sindhi
 * - Browser language detection
 * - Lazy loading of translation files
 * - Caching for performance
 * - Fallback to English
 * - ARIA labels for accessibility
 * - localStorage/sessionStorage persistence
 * 
 * ================================================================
 */

const KrishiI18n = (function() {
    'use strict';

    // ===== CONFIGURATION =====
    const CONFIG = {
        // Supported languages with display names
        LANGUAGES: {
            en: { name: 'English', native: 'English', flag: '🌍', rtl: false },
            hi: { name: 'Hindi', native: 'हिंदी', flag: '🇮🇳', rtl: false },
            bn: { name: 'Bengali', native: 'বাংলা', flag: '🇧🇩', rtl: false },
            te: { name: 'Telugu', native: 'తెలుగు', flag: '🌾', rtl: false },
            ta: { name: 'Tamil', native: 'தமிழ்', flag: '🌾', rtl: false },
            mr: { name: 'Marathi', native: 'मराठी', flag: '🇮🇳', rtl: false },
            ur: { name: 'Urdu', native: 'اردو', flag: '📱', rtl: true },
            gu: { name: 'Gujarati', native: 'ગુજરાતી', flag: '🌾', rtl: false },
            kn: { name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🌿', rtl: false },
            ml: { name: 'Malayalam', native: 'മലയാളം', flag: '🍃', rtl: false },
            od: { name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🌾', rtl: false },
            pa: { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🌾', rtl: false },
            as: { name: 'Assamese', native: 'অসমীয়া', flag: '🌾', rtl: false },
            mai: { name: 'Maithili', native: 'मैथिली', flag: '🌾', rtl: false },
            ne: { name: 'Nepali', native: 'नेपाली', flag: '⛰️', rtl: false },
            kok: { name: 'Konkani', native: 'कोंकणी', flag: '🌾', rtl: false },
            sd: { name: 'Sindhi', native: 'سنڌي', flag: '📱', rtl: true },
            doi: { name: 'Dogri', native: 'डोगरी', flag: '🏔️', rtl: false },
            mni: { name: 'Manipuri', native: 'মণিপুরী', flag: '🌾', rtl: false },
            brx: { name: 'Bodo', native: 'बोडो', flag: '🌾', rtl: false },
            sat: { name: 'Santhali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', flag: '🌾', rtl: false },
            sa: { name: 'Sanskrit', native: 'संस्कृत', flag: '🕉️', rtl: false },
        },

        // RTL languages
        RTL_LANGUAGES: ['ur', 'sd'],

        // Default language
        DEFAULT_LANGUAGE: 'en',

        // Translation files path
        TRANSLATION_PATH: '/static/i18n/',

        // Storage keys
        LANGUAGE_STORAGE_KEY: 'krishi_language',
        LANGUAGE_SELECTED_KEY: 'krishi_language_selected',
    };

    // ===== STATE =====
    let state = {
        currentLanguage: CONFIG.DEFAULT_LANGUAGE,
        translations: {},
        loadedLanguages: new Set(),
        isLoading: false,
    };

    // ===== INITIALIZATION =====
    function init() {
        console.log('🌍 Initializing Krishi I18n Engine...');
        
        // Check for first visit (Language Selection)
        if (!hasUserSelectedLanguage() && !window.location.pathname.includes('language-selector')) {
            console.log('🚀 First visit detected. Redirecting to language selector...');
            window.location.href = '/language-selector';
            return Promise.resolve(); // Stop initialization here
        }

        // Load saved language or detect browser language
        const savedLanguage = getSavedLanguage();
        const detectedLanguage = detectBrowserLanguage();
        
        const languageToLoad = savedLanguage || detectedLanguage || CONFIG.DEFAULT_LANGUAGE;
        
        // Load language
        return setLanguage(languageToLoad).then(() => {
            console.log(`✅ I18n Engine initialized with language: ${languageToLoad}`);
            return languageToLoad;
        });
    }

    // ===== CHECK IF USER SELECTED LANGUAGE =====
    function hasUserSelectedLanguage() {
        if (typeof localStorage === 'undefined') return false;
        return localStorage.getItem(CONFIG.LANGUAGE_SELECTED_KEY) === 'true';
    }

    // ===== GET SAVED LANGUAGE =====
    function getSavedLanguage() {
        if (typeof localStorage === 'undefined') return null;
        return localStorage.getItem(CONFIG.LANGUAGE_STORAGE_KEY);
    }

    // ===== DETECT BROWSER LANGUAGE =====
    function detectBrowserLanguage() {
        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        
        // Check if we support this language
        if (CONFIG.LANGUAGES[langCode]) {
            console.log(`📱 Detected browser language: ${langCode}`);
            return langCode;
        }
        
        return null;
    }

    // ===== LOAD TRANSLATIONS =====
    async function loadTranslations(language) {
        // Check if already loaded
        if (state.loadedLanguages.has(language)) {
            return state.translations[language];
        }

        if (state.isLoading) {
            return new Promise((resolve) => {
                const checkInterval = setInterval(() => {
                    if (state.loadedLanguages.has(language)) {
                        clearInterval(checkInterval);
                        resolve(state.translations[language]);
                    }
                }, 100);
            });
        }

        state.isLoading = true;

        try {
            const timestamp = new Date().getTime();
            const filePath = `${CONFIG.TRANSLATION_PATH}${language}.json?v=${timestamp}`;
            console.log(`📥 Loading translations for: ${language} (${filePath})`);
            
            const response = await fetch(filePath, {
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const translations = await response.json();
            state.translations[language] = translations;
            state.loadedLanguages.add(language);

            console.log(`✅ Loaded ${Object.keys(translations).length} translation keys for ${language}`);
            return translations;
        } catch (error) {
            console.error(`❌ Failed to load translations for ${language}:`, error);
            
            // Fallback to English if not English
            if (language !== CONFIG.DEFAULT_LANGUAGE) {
                console.warn(`⚠️ Falling back to ${CONFIG.DEFAULT_LANGUAGE}...`);
                return loadTranslations(CONFIG.DEFAULT_LANGUAGE);
            }
            
            return {};
        } finally {
            state.isLoading = false;
        }
    }

    // ===== SET LANGUAGE =====
    async function setLanguage(language) {
        // Validate language
        if (!CONFIG.LANGUAGES[language]) {
            console.warn(`⚠️ Invalid language: ${language}. Using default: ${CONFIG.DEFAULT_LANGUAGE}`);
            language = CONFIG.DEFAULT_LANGUAGE;
        }

        // Load translations
        await loadTranslations(language);
        state.currentLanguage = language;

        // Save language preference
        saveLanguagePreference(language);

        // Update HTML attributes
        updateHtmlAttributes(language);

        // Translate page
        translatePage(language);

        // Dispatch custom event
        dispatchLanguageChangeEvent(language);

        console.log(`✅ Language switched to: ${language}`);
        return language;
    }

    // ===== SAVE LANGUAGE PREFERENCE =====
    function saveLanguagePreference(language) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(CONFIG.LANGUAGE_STORAGE_KEY, language);
                localStorage.setItem(CONFIG.LANGUAGE_SELECTED_KEY, 'true');
            }
        } catch (error) {
            console.warn('❌ Failed to save language preference:', error);
        }

        try {
            if (typeof sessionStorage !== 'undefined') {
                sessionStorage.setItem(CONFIG.LANGUAGE_STORAGE_KEY, language);
            }
        } catch (error) {
            console.warn('❌ Failed to save in sessionStorage:', error);
        }
    }

    // ===== UPDATE HTML ATTRIBUTES =====
    function updateHtmlAttributes(language) {
        const html = document.documentElement;
        const isRTL = CONFIG.LANGUAGES[language].rtl;

        // Set lang attribute
        html.setAttribute('lang', language);
        html.setAttribute('xml:lang', language);

        // Set dir attribute (RTL support)
        html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

        // Set data attribute for CSS
        html.setAttribute('data-language', language);

        // Add/remove dir class for styling
        if (isRTL) {
            html.classList.add('rtl');
            document.body.classList.add('rtl');
        } else {
            html.classList.remove('rtl');
            document.body.classList.remove('rtl');
        }
    }

    // ===== GET TRANSLATION =====
    function t(key, defaultValue = null) {
        try {
            // Helper to get value from object by dot notation
            const getValue = (obj, path) => {
                if (!obj) return null;
                const keys = path.split('.');
                let value = obj;
                for (const k of keys) {
                    if (value && typeof value === 'object' && k in value) {
                        value = value[k];
                    } else {
                        return null;
                    }
                }
                return value;
            };

            // 1. Try current language
            const translations = state.translations[state.currentLanguage];
            let value = getValue(translations, key);

            // 2. If not found, try English if available and different from current
            if (!value && state.currentLanguage !== CONFIG.DEFAULT_LANGUAGE) {
                const enTranslations = state.translations[CONFIG.DEFAULT_LANGUAGE];
                if (enTranslations) {
                    value = getValue(enTranslations, key);
                }
            }

            if (!value) {
                // Key not found
                console.warn(`⚠️ Translation key not found: ${key} (language: ${state.currentLanguage})`);
                return defaultValue || key;
            }

            return value;
        } catch (error) {
            console.error(`❌ Error getting translation for key: ${key}`, error);
            return defaultValue || key;
        }
    }

    // ===== TRANSLATE PAGE =====
    function translatePage(language) {
        console.log(`🔄 Translating page to ${language}...`);

        const translations = state.translations[language] || {};
        let translatedCount = 0;

        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = t(key);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // For input fields, use placeholder or value
                const type = element.getAttribute('data-i18n-type') || 'placeholder';
                if (type === 'placeholder') {
                    element.placeholder = translation;
                } else if (type === 'value') {
                    element.value = translation;
                }
            } else {
                // For other elements, set text content
                element.textContent = translation;
            }

            // Update ARIA labels for accessibility
            if (!element.getAttribute('aria-label')) {
                element.setAttribute('aria-label', translation);
            }

            translatedCount++;
        });

        // Translate aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            const translation = t(key);
            element.setAttribute('aria-label', translation);
        });

        // Translate titles
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = t(key);
            element.setAttribute('title', translation);
        });

        // Update page title
        const titleKey = 'page.title';
        const pageTitle = t(titleKey);
        if (pageTitle !== titleKey) {
            document.title = pageTitle;
        }

        console.log(`✅ Translated ${translatedCount} elements`);
    }

    // ===== DISPATCH LANGUAGE CHANGE EVENT =====
    function dispatchLanguageChangeEvent(language) {
        const event = new CustomEvent('languageChanged', {
            detail: {
                language,
                languageInfo: CONFIG.LANGUAGES[language],
                translations: state.translations[language] || {},
            },
            bubbles: true,
        });

        document.documentElement.dispatchEvent(event);
        console.log(`📢 Dispatched "languageChanged" event for ${language}`);
    }

    // ===== GET CURRENT LANGUAGE =====
    function getCurrentLanguage() {
        return state.currentLanguage;
    }

    // ===== GET LANGUAGE INFO =====
    function getLanguageInfo(language = null) {
        const lang = language || state.currentLanguage;
        return CONFIG.LANGUAGES[lang] || null;
    }

    // ===== GET ALL LANGUAGES =====
    function getAllLanguages() {
        return CONFIG.LANGUAGES;
    }

    // ===== IS RTL =====
    function isRTL() {
        return CONFIG.LANGUAGES[state.currentLanguage].rtl;
    }

    // ===== PUBLIC API =====
    return {
        init,
        setLanguage,
        t,
        getCurrentLanguage,
        getLanguageInfo,
        getAllLanguages,
        isRTL,
        getSavedLanguage,
        detectBrowserLanguage,
        CONFIG,
    };
})();

// ===== AUTO-INITIALIZE ON DOM READY =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        KrishiI18n.init().catch(error => {
            console.error('❌ Failed to initialize i18n:', error);
        });
    });
} else {
    // DOM is already ready
    KrishiI18n.init().catch(error => {
        console.error('❌ Failed to initialize i18n:', error);
    });
}

// ===== EXPOSE GLOBALLY =====
if (typeof window !== 'undefined') {
    window.KrishiI18n = KrishiI18n;
}
