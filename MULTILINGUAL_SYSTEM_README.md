# Krishi Officer - Complete Multilingual & RTL System Documentation

## Overview

This is a comprehensive, production-ready multilingual translation system supporting 22+ Indian languages including full RTL (Right-to-Left) support for Urdu, Sindhi, and other RTL languages.

## Table of Contents

1. [Architecture](#architecture)
2. [Supported Languages](#supported-languages)
3. [File Structure](#file-structure)
4. [Implementation Guide](#implementation-guide)
5. [Language Selection Page](#language-selection-page)
6. [Translation Engine](#translation-engine)
7. [RTL Support](#rtl-support)
8. [Adding New Languages](#adding-new-languages)
9. [API Reference](#api-reference)
10. [Best Practices](#best-practices)

---

## Architecture

The system consists of three main components:

### 1. **Translation Engine** (`i18n-engine.js`)
- Manages language loading and switching
- Provides translation lookup methods
- Handles RTL/LTR language support
- Manages localStorage for language persistence
- Dispatches custom events for language changes

### 2. **Language Selection Page** (`language-selection.js`)
- Full-screen language selection modal for first-time users
- Displays all 22+ languages in native scripts
- Saves user preference to localStorage
- Prevents repeated display after selection

### 3. **Translation Files** (`static/i18n/*.json`)
- One JSON file per language
- Hierarchical key structure for organization
- Contains all UI text strings

---

## Supported Languages

| Code | Language | Native Name | Notes |
|------|----------|------------|-------|
| en | English | English | Default language |
| hi | Hindi | हिंदी | | 
| bn | Bengali | বাংলা | |
| te | Telugu | తెలుగు | |
| mr | Marathi | मराठी | |
| ta | Tamil | தமிழ் | |
| ur | Urdu | اردو | **RTL Support** |
| gu | Gujarati | ગુજરાતી | |
| kn | Kannada | ಕನ್ನಡ | |
| ml | Malayalam | മലയാളം | |
| od | Odia | ଓଡ଼ିଆ | |
| pa | Punjabi | ਪੰਜਾਬੀ | |
| as | Assamese | অসমীয়া | |
| mai | Maithili | मैथिली | |
| sa | Sanskrit | संस्कृत | |
| ne | Nepali | नेपाली | |
| kok | Konkani | कोंकणी | |
| sd | Sindhi | سنڌي | **RTL Support** |
| doi | Dogri | डोगरी | |
| mni | Manipuri | মণিপুরী | |
| brx | Bodo | बोडो | |
| sat | Santhali | संताली | |

---

## File Structure

```
static/
├── i18n/
│   ├── en.json          (English - Default)
│   ├── hi.json          (Hindi)
│   ├── bn.json          (Bengali)
│   ├── te.json          (Telugu)
│   ├── mr.json          (Marathi)
│   ├── ta.json          (Tamil)
│   ├── ur.json          (Urdu)
│   ├── gu.json          (Gujarati)
│   ├── kn.json          (Kannada)
│   ├── ml.json          (Malayalam)
│   ├── od.json          (Odia)
│   ├── pa.json          (Punjabi)
│   ├── as.json          (Assamese)
│   ├── mai.json         (Maithili)
│   ├── sa.json          (Sanskrit)
│   ├── ne.json          (Nepali)
│   ├── kok.json         (Konkani)
│   ├── sd.json          (Sindhi)
│   ├── doi.json         (Dogri)
│   ├── mni.json         (Manipuri)
│   ├── brx.json         (Bodo)
│   └── sat.json         (Santhali)
├── js/
│   ├── i18n-engine.js              (Core translation engine)
│   ├── language-selection.js       (First-visit language selection)
│   └── script.js                   (Existing app script)
└── css/
    ├── i18n-styles.css              (Language selection & RTL styles)
    └── style.css                    (Existing styles)
```

---

## Implementation Guide

### Step 1: Include Required Files in HTML

Add these script and link tags to your HTML `<head>` or before closing `</body>`:

```html
<!-- Stylesheets -->
<link rel="stylesheet" href="/static/css/i18n-styles.css">

<!-- Scripts (in order) -->
<script src="/static/js/i18n-engine.js"></script>
<script src="/static/js/language-selection.js"></script>
```

### Step 2: Update HTML Elements with Translation Keys

Instead of hardcoding text:

```html
<!-- ❌ BEFORE (Hardcoded) -->
<button>Login</button>
<h1>Welcome, Guest Farmer</h1>
<p>Smart agriculture support powered by technology</p>

<!-- ✅ AFTER (Using translation keys) -->
<button data-i18n="buttons.ok"></button>
<h1 data-i18n="dashboard.welcome"></h1>
<p data-i18n="common.tagline"></p>
```

### Step 3: Add Language Switcher (Optional)

Add this to your header or navigation:

```html
<div class="language-switcher-wrapper">
  <label class="language-switcher-label" data-i18n="common.language">Language</label>
  <select id="languageSwitcher"></select>
</div>
```

### Step 4: Handle Input Placeholders

For input fields with translated placeholders:

```html
<!-- Method 1: data-i18n-placeholder -->
<input type="text" data-i18n-placeholder="forms.email" placeholder="Email">

<!-- Method 2: data-i18n for value -->
<input type="text" data-i18n="forms.name" placeholder="Name">
```

### Step 5: Translate Attributes

For title, alt, and other attributes:

```html
<img src="image.jpg" data-i18n-alt="common.appName" alt="Krishi Officer">
<button data-i18n-title="navigation.dashboard" title="Dashboard">📊</button>
```

---

## Language Selection Page

The language selection page automatically appears on the first visit and:

1. **Displays all 22+ languages** in their native scripts
2. **Shows language names** in both English and native script
3. **Updates preview** as user hovers/selects languages
4. **Saves preference** to localStorage upon selection
5. **Never shows again** unless user resets their language choice

### Browser Language Detection

The system automatically detects browser language and:
- Applies matching language if available
- Falls back to English if no match
- Only on first visit - saved preference takes priority

### Resetting Language Selection

To allow users to re-select language, add this button:

```html
<button onclick="i18n.resetLanguageSelection()">
  <!-- i18n key: "navigation.selectLanguage" -->
</button>
```

---

## Translation Engine

### Core Methods

#### 1. **t(key, defaultValue)**
Get a translated string by key.

```javascript
// Basic usage
const greeting = i18n.t('dashboard.welcome');

// With default fallback
const custom = i18n.t('custom.key', 'Default Text');

// Nested keys
const cityLabel = i18n.t('forms.location');
```

#### 2. **changeLanguage(langCode)**
Change the current language.

```javascript
// Change to Hindi
await i18n.changeLanguage('hi');

// Change to Telugu
await i18n.changeLanguage('te');

// With error handling
if (await i18n.changeLanguage('ur')) {
  console.log('Language changed to Urdu');
} else {
  console.log('Failed to load Urdu');
}
```

#### 3. **getCurrentLanguage()**
Get the current language code.

```javascript
const currentLang = i18n.getCurrentLanguage(); // 'en', 'hi', etc.
```

#### 4. **getCurrentLanguageName()**
Get the current language name in native script.

```javascript
const name = i18n.getCurrentLanguageName(); // 'हिंदी', 'తెలుగు', etc.
```

#### 5. **isRTL()**
Check if current language is RTL.

```javascript
if (i18n.isRTL()) {
  // Apply RTL-specific styling
}
```

#### 6. **getLanguages()**
Get all supported languages.

```javascript
const languages = i18n.getLanguages();
// Returns object with language codes as keys
```

### Events

The system dispatches custom events:

```javascript
// Listen for language changes
document.addEventListener('languageChanged', (e) => {
  console.log('Language changed to:', e.detail.language);
  console.log('Language name:', e.detail.languageName);
  console.log('Is RTL:', e.detail.isRTL);
});

// Listen for translation updates
document.addEventListener('translationUpdated', (e) => {
  console.log('Translations updated for:', e.detail.language);
});
```

---

## RTL Support

### Automatic RTL Handling

The system automatically applies RTL support for:
- **Urdu** (اردو) - Arabic script
- **Sindhi** (سنڌي) - Arabic script

When an RTL language is selected:
1. HTML `dir="rtl"` attribute is set
2. CSS RTL styles are applied
3. Text direction is automatically inverted
4. Form inputs are right-aligned
5. Navigation is mirrored

### Manual RTL Styling

For custom components, use CSS selectors:

```css
/* RTL-specific styles */
html[dir="rtl"] .my-component {
  flex-direction: row-reverse;
}

html[dir="rtl"] .my-component button {
  margin-left: 0;
  margin-right: 10px;
}

/* Or with the .rtl-text class */
.rtl-text {
  text-align: right;
}
```

### RTL Considerations

1. **Flexbox layouts**: Add `flex-direction: row-reverse`
2. **Margins/padding**: Use logical properties or RTL selectors
3. **Text alignment**: Use `inherit` to respect parent direction
4. **Icons**: Position icons after text in RTL
5. **Form submit**: Watch for button positioning

---

## Adding New Languages

### Step 1: Create Translation File

Create a new file at `static/i18n/{code}.json` following this structure:

```json
{
  "common": {
    "appName": "Krishi Officer in Your Language",
    "tagline": "Translation of tagline",
    "selectLanguage": "Translation",
    "selectLanguageDesc": "Translation",
    "continueBtn": "Translation",
    "changeLanguage": "Translation",
    "language": "Translation",
    "appNameFull": "Translation",
    "empoweringFarmers": "Translation",
    "loading": "Translation...",
    "error": "Translation",
    "success": "Translation",
    "warning": "Translation",
    "info": "Translation"
  },
  "navigation": {
    "dashboard": "Translation",
    "cropAdvisory": "Translation",
    "soilHealth": "Translation",
    "pestDetection": "Translation",
    "weather": "Translation",
    "marketPrices": "Translation",
    "voiceAssistance": "Translation",
    "faq": "Translation",
    "features": "Translation",
    "about": "Translation",
    "contact": "Translation",
    "home": "Translation"
  },
  "header": {
    "appName": "Translation",
    "language": "Translation",
    "logout": "Translation",
    "profile": "Translation",
    "settings": "Translation"
  },
  "hero": {
    "title": "Translation",
    "subtitle": "Translation",
    "cta": "Translation",
    "ctaArrow": "Translation →",
    "pestDetectionTitle": "Translation",
    "pestDetectionDesc": "Translation",
    "soilHealthTitle": "Translation",
    "soilHealthDesc": "Translation",
    "cropAdvisoryTitle": "Translation",
    "cropAdvisoryDesc": "Translation"
  },
  "dashboard": {
    "welcome": "Translation",
    "farmStatus": "Translation",
    "farmSnapshot": "Translation",
    "whatCanYouDo": "Translation",
    "attentionNeeded": "Translation",
    "good": "Translation",
    "active": "Translation",
    "soon": "Translation",
    "checkNow": "Translation →",
    "alertTitle": "Translation",
    "alertMessage": "Translation",
    "seeWhatToDo": "Translation →",
    "pestRiskDetected": "Translation",
    "waterLevelGood": "Translation",
    "growthOnTrack": "Translation",
    "guest": "Translation",
    "sidebarToggle": "Translation",
    "totalCrops": "Translation",
    "healthStatus": "Translation",
    "alerts": "Translation",
    "recommendations": "Translation",
    "viewDetails": "Translation →"
  },
  "pestDetection": {
    "title": "Translation",
    "description": "Translation",
    "upload": "Translation",
    "analyzeImage": "Translation",
    "uploadNewImage": "Translation",
    "dragDrop": "Translation",
    "results": "Translation",
    "pestIdentified": "Translation",
    "confidence": "Translation",
    "recommendations": "Translation",
    "treatment": "Translation",
    "prevention": "Translation",
    "noImageSelected": "Translation",
    "analyzing": "Translation...",
    "selectImage": "Translation",
    "fileSize": "Translation",
    "invalidFormat": "Translation"
  },
  "cropAdvisory": {
    "title": "Translation",
    "description": "Translation",
    "selectCrop": "Translation",
    "selectStage": "Translation",
    "currentIssues": "Translation",
    "practicesRequired": "Translation",
    "irrigationSchedule": "Translation",
    "fertilizerRecommendation": "Translation",
    "harvestReadiness": "Translation",
    "harvestDate": "Translation",
    "seedingDate": "Translation",
    "sowingTime": "Translation",
    "cropOptions": "Translation",
    "wheat": "Translation",
    "rice": "Translation",
    "sugarcane": "Translation",
    "cotton": "Translation",
    "maize": "Translation",
    "pulses": "Translation",
    "vegetable": "Translation",
    "fruit": "Translation"
  },
  "soilHealth": {
    "title": "Translation",
    "description": "Translation",
    "ph": "Translation",
    "nitrogen": "Translation",
    "phosphorus": "Translation",
    "potassium": "Translation",
    "moisture": "Translation",
    "organic": "Translation",
    "rating": "Translation",
    "excellent": "Translation",
    "good": "Translation",
    "moderate": "Translation",
    "poor": "Translation",
    "recommendations": "Translation",
    "improvements": "Translation",
    "lastTested": "Translation",
    "testNow": "Translation",
    "uploadSample": "Translation"
  },
  "weather": {
    "title": "Translation",
    "description": "Translation",
    "todayForecast": "Translation",
    "weeklyForecast": "Translation",
    "temperature": "Translation",
    "rainfall": "Translation",
    "humidity": "Translation",
    "windSpeed": "Translation",
    "uvIndex": "Translation",
    "pressure": "Translation",
    "visibility": "Translation",
    "dewPoint": "Translation",
    "location": "Translation",
    "setLocation": "Translation",
    "enterLocation": "Translation",
    "celsius": "°C",
    "fahrenheit": "°F",
    "mm": "mm",
    "kmh": "km/h",
    "mps": "m/s"
  },
  "marketPrices": {
    "title": "Translation",
    "description": "Translation",
    "commodity": "Translation",
    "price": "Translation",
    "unit": "Translation",
    "market": "Translation",
    "date": "Translation",
    "change": "Translation",
    "trend": "Translation",
    "priceHistory": "Translation",
    "bestPrice": "Translation",
    "averagePrice": "Translation",
    "lowestPrice": "Translation",
    "highest": "Translation",
    "lowest": "Translation",
    "currency": "INR (₹)",
    "perKg": "Translation",
    "perTonne": "Translation",
    "selectCrop": "Translation"
  },
  "voiceAssistance": {
    "title": "Translation",
    "description": "Translation",
    "startListening": "Translation",
    "stopListening": "Translation",
    "microphone": "Translation",
    "notAvailable": "Translation",
    "enableMicrophone": "Translation",
    "listening": "Translation...",
    "processing": "Translation...",
    "speaking": "Translation...",
    "askQuestion": "Translation",
    "voiceNotSupported": "Translation",
    "tryAgain": "Translation",
    "clearConversation": "Translation"
  },
  "faq": {
    "title": "Translation",
    "description": "Translation",
    "searchPlaceholder": "Translation",
    "noResults": "Translation",
    "common": "Translation",
    "gettingStarted": "Translation",
    "features": "Translation",
    "troubleshooting": "Translation",
    "contactSupport": "Translation"
  },
  "forms": {
    "name": "Translation",
    "email": "Translation",
    "phone": "Translation",
    "location": "Translation",
    "state": "Translation",
    "district": "Translation",
    "village": "Translation",
    "farmSize": "Translation",
    "cropName": "Translation",
    "submit": "Translation",
    "cancel": "Translation",
    "save": "Translation",
    "reset": "Translation",
    "required": "Translation",
    "invalidEmail": "Translation",
    "invalidPhone": "Translation",
    "selectOption": "Translation"
  },
  "messages": {
    "welcome": "Translation",
    "goodbye": "Translation",
    "savingData": "Translation...",
    "dataSaved": "Translation",
    "loadingData": "Translation...",
    "dataLoaded": "Translation",
    "errorLoading": "Translation",
    "noData": "Translation",
    "pleaseWait": "Translation...",
    "confirmation": "Translation?",
    "confirmDelete": "Translation?",
    "deleted": "Translation",
    "updated": "Translation",
    "created": "Translation"
  },
  "buttons": {
    "ok": "Translation",
    "yes": "Translation",
    "no": "Translation",
    "close": "Translation",
    "back": "Translation",
    "next": "Translation",
    "finish": "Translation",
    "continue": "Translation",
    "skip": "Translation",
    "retry": "Translation",
    "delete": "Translation",
    "edit": "Translation",
    "add": "Translation",
    "clear": "Translation",
    "download": "Translation",
    "share": "Translation",
    "print": "Translation",
    "refresh": "Translation"
  },
  "footer": {
    "copyright": "© 2026 Krishi Officer. Translation",
    "privacyPolicy": "Translation",
    "termsOfService": "Translation",
    "contact": "Translation",
    "followUs": "Translation",
    "allRightsReserved": "Translation"
  },
  "errors": {
    "pageNotFound": "Translation",
    "somethingWentWrong": "Translation",
    "networkError": "Translation",
    "serverError": "Translation",
    "unauthorized": "Translation",
    "forbidden": "Translation",
    "notFound": "Translation",
    "badRequest": "Translation"
  }
}
```

### Step 2: Register Language Code

Update `i18n-engine.js` and add your language to the `supportedLanguages` object:

```javascript
this.supportedLanguages = {
  // ... existing languages ...
  "xx": { name: "Language Name", nativeName: "Native Name", rtl: false }
};
```

For RTL languages set `rtl: true`.

### Step 3: Test

1. Clear localStorage: `localStorage.clear()`
2. Reload page
3. Language selection should appear
4. Verify all strings are translated

---

## Complete Example

Here's a complete example showing how to update a page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="common.appName">Krishi Officer</title>
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="/static/css/style.css">
    <link rel="stylesheet" href="/static/css/i18n-styles.css">
</head>
<body>
    <!-- Header with Language Switcher -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="/static/assets/Logo.png" alt="" data-i18n-alt="common.appName">
                <span data-i18n="common.appName">Krishi Officer</span>
            </div>
            <nav class="nav">
                <a href="#" data-i18n="navigation.features">Features</a>
                <a href="#" data-i18n="navigation.about">About</a>
                <a href="#" data-i18n="navigation.contact">Contact</a>
            </nav>
            <!-- Language Switcher -->
            <div class="language-switcher-wrapper">
                <label class="language-switcher-label" data-i18n="common.language">Language</label>
                <select id="languageSwitcher"></select>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <section class="hero">
            <h1 data-i18n="hero.title">Krishi Officer</h1>
            <p data-i18n="hero.subtitle">Smart agriculture support powered by technology</p>
            <button class="btn" data-i18n="hero.cta">Get Started</button>
        </section>

        <section class="features">
            <div class="feature">
                <h3 data-i18n="hero.pestDetectionTitle">Pest Detection</h3>
                <p data-i18n="hero.pestDetectionDesc">AI-powered crop pest identification</p>
            </div>
            <div class="feature">
                <h3 data-i18n="hero.soilHealthTitle">Soil Health</h3>
                <p data-i18n="hero.soilHealthDesc">AI-powered soil health analysis</p>
            </div>
            <div class="feature">
                <h3 data-i18n="hero.cropAdvisoryTitle">Crop Advisory</h3>
                <p data-i18n="hero.cropAdvisoryDesc">AI-powered crop advisory</p>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <p data-i18n="footer.copyright">© 2026 Krishi Officer. Empowering farmers with AI technology.</p>
        <a href="#" data-i18n="footer.privacyPolicy">Privacy Policy</a>
        <a href="#" data-i18n="footer.termsOfService">Terms of Service</a>
    </footer>

    <!-- Scripts -->
    <script src="/static/js/i18n-engine.js"></script>
    <script src="/static/js/language-selection.js"></script>
    <script src="/static/js/script.js"></script>

    <!-- Listen for language changes if needed -->
    <script>
        document.addEventListener('languageChanged', (e) => {
            console.log('Language changed to:', e.detail.languageName);
            // Update any dynamic content here
        });
    </script>
</body>
</html>
```

---

## Best Practices

### 1. **Translation Keys**
- Use descriptive, hierarchical keys: `module.feature.element`
- Use camelCase: `farmStatus` not `farm_status` or `farmstatus`
- Group related strings under same parent key

### 2. **Content Management**
- Keep all text in translation files, never hardcode
- Use consistent terminology across all languages
- Provide context for translators (comments in JSON)

### 3. **Performance**
- Translation files load asynchronously
- Lazy loads unnecessary languages
- Caches loaded translations in memory
- Minimal DOM traversal for updates

### 4. **Accessibility**
- Always use `lang` attribute for HTML root
- Set `dir` attribute for RTL languages
- Use semantic HTML for screen readers
- Test with screen readers in different languages

### 5. **Testing**
```javascript
// Test missing translations
console.log(i18n.t('nonexistent.key', 'DEFAULT'));

// Test RTL detection
console.log(i18n.isRTL());

// Test language switch
await i18n.changeLanguage('ur'); // Should set RTL mode
```

### 6. **String Formatting**
For dynamic content with variables:

```javascript
// In translation file: "welcome": "Hello, {name}!"
// In JavaScript:
const greeting = i18n.t('messages.welcome').replace('{name}', userName);
```

Or better, use a formatting function:

```javascript
function format(key, vars) {
  let text = i18n.t(key);
  Object.entries(vars).forEach(([k, v]) => {
    text = text.replace(`{${k}}`, v);
  });
  return text;
}

const greeting = format('messages.welcome', { name: 'John' });
```

---

## Troubleshooting

### Issue: Language selection page not showing
**Solution**: Check localStorage:
```javascript
localStorage.removeItem('languageSelected');
location.reload();
```

### Issue: Translations not loading
**Solution**: Check browser console for network errors, verify JSON file paths are correct.

### Issue: RTL not working
**Solution**: Ensure language is marked as RTL in supportedLanguages:
```javascript
sd: { name: 'Sindhi', nativeName: 'سنڌي', rtl: true } // Note: rtl: true
```

### Issue: Text not updating after language change
**Solution**: Ensure all UI elements use `data-i18n` attributes, then call:
```javascript
i18n.updateAllElements();
```

---

## Performance Tips

1. **Lazy load**: Only load languages that users select
2. **Cache**: Browser caches JSON files via HTTP headers
3. **Minimize**: Consider minifying JSON files in production
4. **CDN**: Serve translation files from CDN for faster loading
5. **Preload**: Preload common language files in footer

```html
<link rel="preload" href="/static/i18n/en.json" as="fetch" crossorigin>
<link rel="preload" href="/static/i18n/hi.json" as="fetch" crossorigin>
```

---

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (including RTL)
- IE11: Requires polyfills for fetch and Promise

---

## Future Enhancement Ideas

1. **Lazy loading language selection UI**
2. **Translation management API**
3. **Automatic translation via APIs**
4. **Pluralization support**
5. **Date/time localization**
6. **Number formatting per language**

---

## Support & Maintenance

To add a new language or update existing translations:

1. Create/update JSON file in `static/i18n/`
2. Register in `i18n-engine.js` supportedLanguages
3. Run tests to verify all keys exist
4. Deploy and verify in browser

---

## License

© 2026 Krishi Officer. All translations are part of Krishi Officer.

---

**Last Updated**: February 7, 2026
**Version**: 1.0.0
**Status**: Production Ready
