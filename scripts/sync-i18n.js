const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '../static/i18n');
const enPath = path.join(i18nDir, 'en.json');

// Read English file as source of truth
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Master translation dictionary for all 22 languages
const masterTranslations = {
    // Hindi (hi)
    'hi': {
        'common.appName': 'कृषी अधिकारी', 'common.tagline': 'प्रौद्योगिकी द्वारा संचालित स्मार्ट कृषि सहायता',
        'navigation.home': 'होम', 'navigation.dashboard': 'डैशबोर्ड', 'navigation.weather': 'मौसम', 'navigation.marketPrices': 'बाजार भाव', 'navigation.cropAdvisory': 'फसल सलाह', 'navigation.soilHealth': 'मृदा स्वास्थ्य', 'navigation.pestDetection': 'कीट पहचान', 'navigation.voiceAssistance': 'वॉयस असिस्टेंस', 'navigation.faq': 'सामान्य प्रश्न',
        'hero.title': 'कृषी अधिकारी', 'hero.subtitle': 'प्रौद्योगिकी द्वारा संचालित स्मार्ट कृषि सहायता', 'hero.cta': 'शुरू करें',
        'dashboard.welcome': 'स्वागत है, किसान भाई', 'dashboard.todaysWeather': '☀️ आज का मौसम', 'dashboard.wheatPrice': '₹ गेहूं का भाव (निकटतम मंडी)',
        'weather.title': 'मौसम', 'weather.today': 'आज', 'weather.tomorrow': 'कल', 'weather.next7Days': 'अगले 7 दिन',
        'marketPrices.title': 'बाजार भाव', 'marketPrices.searchBtn': 'खोजें',
        'common.days.mon': 'सोम', 'common.days.tue': 'मंगल', 'common.days.wed': 'बुध', 'common.days.thu': 'गुरु', 'common.days.fri': 'शुक्र', 'common.days.sat': 'शनि', 'common.days.sun': 'रवि',
        'crops.wheat': 'गेहूं', 'crops.rice': 'चावल', 'crops.sugarcane': 'गन्ना', 'crops.cotton': 'कपास', 'crops.maize': 'मकई', 'crops.pulses': 'दालें', 'crops.vegetables': 'सब्जियां', 'crops.fruits': 'फल',
        'pestDetection.title': 'कीट पहचान', 'pestDetection.analyzeImage': 'छवि का विश्लेषण करें',
        'soilHealth.title': 'मिट्टी स्वास्थ्य', 'soilHealth.testNow': 'अभी परीक्षण करें',
        'cropAdvisory.title': 'फसल सलाह', 'cropAdvisory.getAdvice': 'सलाह प्राप्त करें',
        'voiceAssistance.title': 'वॉयस सहायता', 'voiceAssistance.listening': 'सुन रहे हैं...',
        'faq.title': 'सामान्य प्रश्न'
    },
    // Bengali (bn)
    'bn': {
        'common.appName': 'কৃষি অফিসার', 'common.tagline': 'প্রযুক্তি দ্বারা চালিত স্মার্ট কৃষি সহায়তা',
        'navigation.home': 'হোম', 'navigation.dashboard': 'ড্যাশবোর্ড', 'navigation.weather': 'আবহাওয়া', 'navigation.marketPrices': 'বাজার দর', 'navigation.cropAdvisory': 'ফসল পরামর্শ', 'navigation.soilHealth': 'মাটির স্বাস্থ্য', 'navigation.pestDetection': 'পোকামাকড় সনাক্তকরণ', 'navigation.voiceAssistance': 'ভয়েস সহায়তা', 'navigation.faq': 'সাধারণ প্রশ্ন',
        'hero.title': 'কৃষি অফিসার', 'hero.subtitle': 'প্রযুক্তি দ্বারা চালিত স্মার্ট কৃষি সহায়তা', 'hero.cta': 'শুরু করুন',
        'dashboard.welcome': 'স্বাগতম, কৃষক ভাই', 'dashboard.todaysWeather': '☀️ আজকের আবহাওয়া', 'dashboard.wheatPrice': '₹ গমের দাম (নিকটস্থ মান্ডি)',
        'weather.title': 'আবহাওয়া', 'weather.today': 'আজ', 'weather.tomorrow': 'আগামীকাল', 'weather.next7Days': 'আগামী ৭ দিন',
        'marketPrices.title': 'বাজার দর', 'marketPrices.searchBtn': 'অনুসন্ধান',
        'common.days.mon': 'সোম', 'common.days.tue': 'মঙ্গল', 'common.days.wed': 'বুধ', 'common.days.thu': 'বৃহঃ', 'common.days.fri': 'শুক্র', 'common.days.sat': 'শনি', 'common.days.sun': 'রবি',
        'crops.wheat': 'গম', 'crops.rice': 'ধান', 'crops.sugarcane': 'আখ', 'crops.cotton': 'তুলা', 'crops.maize': 'ভুট্টা', 'crops.pulses': 'ডাল', 'crops.vegetables': 'সবজি', 'crops.fruits': 'ফল',
        'pestDetection.title': 'পোকামাকড় সনাক্তকরণ', 'pestDetection.analyzeImage': 'ছবি বিশ্লেষণ করুন',
        'soilHealth.title': 'মাটির স্বাস্থ্য', 'soilHealth.testNow': 'এখন পরীক্ষা করুন',
        'cropAdvisory.title': 'ফসল পরামর্শ', 'cropAdvisory.getAdvice': 'পরামর্শ নিন',
        'voiceAssistance.title': 'ভয়েস সহায়তা', 'voiceAssistance.listening': 'শুনছি...',
        'faq.title': 'সাধারণ প্রশ্ন'
    },
    // Telugu (te)
    'te': {
        'common.appName': 'కృషి ఆఫీసర్', 'common.tagline': 'టెక్నాలజీతో కూడిన స్మార్ట్ వ్యవసాయ మద్దతు',
        'navigation.home': 'హోమ్', 'navigation.dashboard': 'డాష్‌బోర్డ్', 'navigation.weather': 'వాతావరణం', 'navigation.marketPrices': 'మార్కెట్ ధరలు', 'navigation.cropAdvisory': 'పంట సలహా', 'navigation.soilHealth': 'నేల ఆరోగ్యం', 'navigation.pestDetection': 'తెగుళ్ళ గుర్తింపు', 'navigation.voiceAssistance': 'వాయిస్ సహాయం', 'navigation.faq': 'తరచుగా అడిగే ప్రశ్నలు',
        'hero.title': 'కృషి ఆఫీసర్', 'hero.subtitle': 'టెక్నాలజీతో కూడిన స్మార్ట్ వ్యవసాయ మద్దతు', 'hero.cta': 'ప్రారంభించండి',
        'dashboard.welcome': 'స్వాగతం, రైతు సోదరుడా', 'dashboard.todaysWeather': '☀️ నేటి వాతావరణం', 'dashboard.wheatPrice': '₹ గోధుమ ధర (దగ్గరి మండి)',
        'weather.title': 'వాతావరణం', 'weather.today': 'ఈ రోజు', 'weather.tomorrow': 'రేపు', 'weather.next7Days': 'రాబోయే 7 రోజులు',
        'marketPrices.title': 'మార్కెట్ ధరలు', 'marketPrices.searchBtn': 'శోధన',
        'common.days.mon': 'సోమ', 'common.days.tue': 'మంగళ', 'common.days.wed': 'బుధ', 'common.days.thu': 'గురు', 'common.days.fri': 'శుక్ర', 'common.days.sat': 'శని', 'common.days.sun': 'ఆది',
        'crops.wheat': 'గోధుమ', 'crops.rice': 'వరి', 'crops.sugarcane': 'చెరకు', 'crops.cotton': 'పత్తి', 'crops.maize': 'మొక్కజొన్న', 'crops.pulses': 'పప్పుధాన్యాలు', 'crops.vegetables': 'కూరగాయలు', 'crops.fruits': 'పండ్లు',
        'pestDetection.title': 'తెగుళ్ళ గుర్తింపు', 'pestDetection.analyzeImage': 'చిత్రాన్ని విశ్లేషించండి',
        'soilHealth.title': 'నేల ఆరోగ్యం', 'soilHealth.testNow': 'ఇప్పుడే పరీక్షించండి',
        'cropAdvisory.title': 'పంట సలహా', 'cropAdvisory.getAdvice': 'సలహా పొందండి',
        'voiceAssistance.title': 'వాయిస్ సహాయం', 'voiceAssistance.listening': 'వినబడుతోంది...',
        'faq.title': 'తరచుగా అడిగే ప్రశ్నలు'
    },
    // Marathi (mr)
    'mr': {
        'common.appName': 'कृषी अधिकारी', 'common.tagline': 'तंत्रज्ञानाद्वारे समर्थित स्मार्ट कृषी समर्थन',
        'navigation.home': 'होम', 'navigation.dashboard': 'डॅशबोर्ड', 'navigation.weather': 'हवामान', 'navigation.marketPrices': 'बाजार भाव', 'navigation.cropAdvisory': 'पिक सल्ला', 'navigation.soilHealth': 'मातीचे आरोग्य', 'navigation.pestDetection': 'कीटक शोध', 'navigation.voiceAssistance': 'व्हॉईस सहाय्य', 'navigation.faq': 'नेहमीचे प्रश्न',
        'hero.title': 'कृषी अधिकारी', 'hero.subtitle': 'तंत्रज्ञानाद्वारे समर्थित स्मार्ट कृषी समर्थन', 'hero.cta': 'सुरु करा',
        'dashboard.welcome': 'स्वागत आहे, शेतकरी भाऊ', 'dashboard.todaysWeather': '☀️ आजचे हवामान', 'dashboard.wheatPrice': '₹ गव्हाचा भाव (जवळची मंडी)',
        'weather.title': 'हवामान', 'weather.today': 'आज', 'weather.tomorrow': 'उद्या', 'weather.next7Days': 'पुढील ७ दिवस',
        'marketPrices.title': 'बाजार भाव', 'marketPrices.searchBtn': 'शोधा',
        'common.days.mon': 'सोम', 'common.days.tue': 'मंगळ', 'common.days.wed': 'बुध', 'common.days.thu': 'गुरु', 'common.days.fri': 'शुक्र', 'common.days.sat': 'शनी', 'common.days.sun': 'रवि',
        'crops.wheat': 'गहू', 'crops.rice': 'तांदूळ', 'crops.sugarcane': 'ऊस', 'crops.cotton': 'कापूस', 'crops.maize': 'मका', 'crops.pulses': 'डाळी', 'crops.vegetables': 'भाज्या', 'crops.fruits': 'फळे',
        'pestDetection.title': 'कीटक शोध', 'pestDetection.analyzeImage': 'प्रतिमेचे विश्लेषण करा',
        'soilHealth.title': 'मातीचे आरोग्य', 'soilHealth.testNow': 'आता चाचणी करा',
        'cropAdvisory.title': 'पिक सल्ला', 'cropAdvisory.getAdvice': 'सल्ला मिळवा',
        'voiceAssistance.title': 'व्हॉईस सहाय्य', 'voiceAssistance.listening': 'ऐकत आहे...',
        'faq.title': 'नेहमीचे प्रश्न'
    },
    // Tamil (ta)
    'ta': {
        'common.appName': 'கிருஷி அதிகாரி', 'common.tagline': 'தொழில்நுட்பத்தால் இயங்கும் ஸ்மார்ட் விவசாய ஆதரவு',
        'navigation.home': 'முகப்பு', 'navigation.dashboard': 'முகப்பு பலகை', 'navigation.weather': 'வானிலை', 'navigation.marketPrices': 'சந்தை விலைகள்', 'navigation.cropAdvisory': 'பயிர் ஆலோசனை', 'navigation.soilHealth': 'மண் வளம்', 'navigation.pestDetection': 'பூச்சி கண்டறிதல்', 'navigation.voiceAssistance': 'குரல் உதவி', 'navigation.faq': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
        'hero.title': 'கிருஷி அதிகாரி', 'hero.subtitle': 'தொழில்நுட்பத்தால் இயங்கும் ஸ்மார்ட் விவசாய ஆதரவு', 'hero.cta': 'தொடங்கவும்',
        'dashboard.welcome': 'வரவேற்கிறோம், விவசாயி', 'dashboard.todaysWeather': '☀️ இன்றைய வானிலை', 'dashboard.wheatPrice': '₹ கோதுமை விலை',
        'weather.title': 'வானிலை', 'weather.today': 'இன்று', 'weather.tomorrow': 'நாளை', 'weather.next7Days': 'அடுத்த 7 நாட்கள்',
        'marketPrices.title': 'சந்தை விலைகள்', 'marketPrices.searchBtn': 'தேடு',
        'common.days.mon': 'திங்கள்', 'common.days.tue': 'செவ்வாய்', 'common.days.wed': 'புதன்', 'common.days.thu': 'வியாழன்', 'common.days.fri': 'வெள்ளி', 'common.days.sat': 'சனி', 'common.days.sun': 'ஞாயிறு',
        'crops.wheat': 'கோதுமை', 'crops.rice': 'அரிசி', 'crops.sugarcane': 'கரும்பு', 'crops.cotton': 'பருத்தி', 'crops.maize': 'சோளம்', 'crops.pulses': 'பருப்பு', 'crops.vegetables': 'காய்கறிகள்', 'crops.fruits': 'பழங்கள்',
        'pestDetection.title': 'பூச்சி கண்டறிதல்', 'pestDetection.analyzeImage': 'படத்தை பகுப்பாய்வு செய்',
        'soilHealth.title': 'மண் வளம்', 'soilHealth.testNow': 'இப்போது சோதிக்கவும்',
        'cropAdvisory.title': 'பயிர் ஆலோசனை', 'cropAdvisory.getAdvice': 'ஆலோசனை பெறுங்கள்',
        'voiceAssistance.title': 'குரல் உதவி', 'voiceAssistance.listening': 'கேட்கிறது...',
        'faq.title': 'அடிக்கடி கேட்கப்படும் கேள்விகள்'
    },
    // Urdu (ur)
    'ur': {
        'common.appName': 'کرشی آفیسر', 'common.tagline': 'ٹیکنالوجی کے ذریعے سمارٹ زرعی معاونت',
        'navigation.home': 'ہوم', 'navigation.dashboard': 'ڈیش بورڈ', 'navigation.weather': 'موسم', 'navigation.marketPrices': 'مارکیٹ کی قیمتیں', 'navigation.cropAdvisory': 'فصلوں کا مشورہ', 'navigation.soilHealth': 'مٹی کی صحت', 'navigation.pestDetection': 'کیڑوں کی شناخت', 'navigation.voiceAssistance': 'آواز کی مدد', 'navigation.faq': 'عام سوالات',
        'hero.title': 'کرشی آفیسر', 'hero.subtitle': 'ٹیکنالوجی کے ذریعے سمارٹ زرعی معاونت', 'hero.cta': 'شروع کریں',
        'dashboard.welcome': 'خوش آمدید، کسان بھائی', 'dashboard.todaysWeather': '☀️ آج کا موسم', 'dashboard.wheatPrice': '₹ گندم کی قیمت',
        'weather.title': 'موسم', 'weather.today': 'آج', 'weather.tomorrow': 'کل', 'weather.next7Days': 'اگلے 7 دن',
        'marketPrices.title': 'مارکیٹ کی قیمتیں', 'marketPrices.searchBtn': 'تلاش کریں',
        'common.days.mon': 'پیر', 'common.days.tue': 'منگل', 'common.days.wed': 'بدھ', 'common.days.thu': 'جمعرات', 'common.days.fri': 'جمعہ', 'common.days.sat': 'ہفتہ', 'common.days.sun': 'اتوار',
        'crops.wheat': 'گندم', 'crops.rice': 'چاول', 'crops.sugarcane': 'گنا', 'crops.cotton': 'کپاس', 'crops.maize': 'مکئی', 'crops.pulses': 'دالیں', 'crops.vegetables': 'سبزیاں', 'crops.fruits': 'پھل',
        'pestDetection.title': 'کیڑوں کی شناخت', 'pestDetection.analyzeImage': 'تصویر کا تجزیہ کریں',
        'soilHealth.title': 'مٹی کی صحت', 'soilHealth.testNow': 'ابھی ٹیسٹ کریں',
        'cropAdvisory.title': 'فصلوں کا مشورہ', 'cropAdvisory.getAdvice': 'مشورہ حاصل کریں',
        'voiceAssistance.title': 'آواز کی مدد', 'voiceAssistance.listening': 'سن رہا ہے...',
        'faq.title': 'عام سوالات'
    },
    // Gujarati (gu)
    'gu': {
        'common.appName': 'કૃષિ અધિકારી', 'common.tagline': 'ટેકનોલોજી દ્વારા સંચાલિત સ્માર્ટ કૃષિ સહાય',
        'navigation.home': 'હોમ', 'navigation.dashboard': 'ડેશબોર્ડ', 'navigation.weather': 'હવામાન', 'navigation.marketPrices': 'બજાર ભાવ', 'navigation.cropAdvisory': 'પાક સલાહ', 'navigation.soilHealth': 'જમીન આરોગ્ય', 'navigation.pestDetection': 'જીવાત ઓળખ', 'navigation.voiceAssistance': 'વૉઇસ સહાય', 'navigation.faq': 'પ્રશ્નોત્તરી',
        'hero.title': 'કૃષિ અધિકારી', 'hero.subtitle': 'ટેકનોલોજી દ્વારા સંચાલિત સ્માર્ટ કૃષિ સહાય', 'hero.cta': 'શરૂ કરો',
        'dashboard.welcome': 'સ્વાગત છે, ખેડૂત મિત્ર', 'dashboard.todaysWeather': '☀️ આજનું હવામાન', 'dashboard.wheatPrice': '₹ ઘઉંનો ભાવ',
        'weather.title': 'હવામાન', 'weather.today': 'આજે', 'weather.tomorrow': 'કાલે', 'weather.next7Days': 'આગામી ૭ દિવસ',
        'marketPrices.title': 'બજાર ભાવ', 'marketPrices.searchBtn': 'શોધો',
        'common.days.mon': 'સોમ', 'common.days.tue': 'મંગળ', 'common.days.wed': 'બુધ', 'common.days.thu': 'ગુરુ', 'common.days.fri': 'શુક્ર', 'common.days.sat': 'શનિ', 'common.days.sun': 'રવિ',
        'crops.wheat': 'ઘઉં', 'crops.rice': 'ચોખા', 'crops.sugarcane': 'શેરડી', 'crops.cotton': 'કપાસ', 'crops.maize': 'મકાઈ', 'crops.pulses': 'કઠોળ', 'crops.vegetables': 'શાકભાજી', 'crops.fruits': 'ફળો',
        'pestDetection.title': 'જીવાત ઓળખ', 'pestDetection.analyzeImage': 'ઇમેજ વિશ્લેષણ કરો',
        'soilHealth.title': 'જમીન આરોગ્ય', 'soilHealth.testNow': 'હવે પરીક્ષણ કરો',
        'cropAdvisory.title': 'પાક સલાહ', 'cropAdvisory.getAdvice': 'સલાહ મેળવો',
        'voiceAssistance.title': 'વૉઇસ સહાય', 'voiceAssistance.listening': 'સાંભળી રહ્યું છે...',
        'faq.title': 'પ્રશ્નોત્તરી'
    },
    // Kannada (kn)
    'kn': {
        'common.appName': 'ಕೃಷಿ ಅಧಿಕಾರಿ', 'common.tagline': 'ತಂತ್ರಜ್ಞಾನ ಚಾಲಿತ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಬೆಂಬಲ',
        'navigation.home': 'ಮುಖಪುಟ', 'navigation.dashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', 'navigation.weather': 'ಹವಾಮಾನ', 'navigation.marketPrices': 'ಮಾರುಕಟ್ಟೆ ದರಗಳು', 'navigation.cropAdvisory': 'ಬೆಳೆ ಸಲಹೆ', 'navigation.soilHealth': 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ', 'navigation.pestDetection': 'ಕೀಟ ಪತ್ತೆ', 'navigation.voiceAssistance': 'ದನಿ ಸಹಾಯ', 'navigation.faq': 'ಪ್ರಶ್ನೋತ್ತರ',
        'hero.title': 'ಕೃಷಿ ಅಧಿಕಾರಿ', 'hero.subtitle': 'ತಂತ್ರಜ್ಞಾನ ಚಾಲಿತ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಬೆಂಬಲ', 'hero.cta': 'ಪ್ರಾರಂಭಿಸಿ',
        'dashboard.welcome': 'ಸ್ವಾಗತ, ರೈತ ಮಿತ್ರ', 'dashboard.todaysWeather': '☀️ ಇಂದಿನ ಹವಾಮಾನ', 'dashboard.wheatPrice': '₹ ಗೋಧಿ ಬೆಲೆ',
        'weather.title': 'ಹವಾಮಾನ', 'weather.today': 'ಇಂದು', 'weather.tomorrow': 'ನಾಳೆ', 'weather.next7Days': 'ಮುಂದಿನ 7 ದಿನಗಳು',
        'marketPrices.title': 'ಮಾರುಕಟ್ಟೆ ದರಗಳು', 'marketPrices.searchBtn': 'ಹುಡುಕಿ',
        'common.days.mon': 'ಸೋಮ', 'common.days.tue': 'ಮಂಗಳ', 'common.days.wed': 'ಬುಧ', 'common.days.thu': 'ಗುರು', 'common.days.fri': 'ಶುಕ್ರ', 'common.days.sat': 'ಶನಿ', 'common.days.sun': 'ಭಾನು',
        'crops.wheat': 'ಗೋಧಿ', 'crops.rice': 'ಅಕ್ಕಿ', 'crops.sugarcane': 'ಕಬ್ಬು', 'crops.cotton': 'ಹತ್ತಿ', 'crops.maize': 'ಜೋಳ', 'crops.pulses': 'ಬೇಳೆಕಾಳುಗಳು', 'crops.vegetables': 'ತರಕಾರಿಗಳು', 'crops.fruits': 'ಹಣ್ಣುಗಳು',
        'pestDetection.title': 'ಕೀಟ ಪತ್ತೆ', 'pestDetection.analyzeImage': 'ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
        'soilHealth.title': 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ', 'soilHealth.testNow': 'ಈಗ ಪರೀಕ್ಷಿಸಿ',
        'cropAdvisory.title': 'ಬೆಳೆ ಸಲಹೆ', 'cropAdvisory.getAdvice': 'ಸಲಹೆ ಪಡೆಯಿರಿ',
        'voiceAssistance.title': 'ದನಿ ಸಹಾಯ', 'voiceAssistance.listening': 'ಆಲಿಸಲಾಗುತ್ತಿದೆ...',
        'faq.title': 'ಪ್ರಶ್ನೋತ್ತರ'
    },
    // Malayalam (ml)
    'ml': {
        'common.appName': 'കൃഷി ഓഫീസർ', 'common.tagline': 'സാങ്കേതികവിദ്യയുടെ സഹായത്തോടെ സ്മാർട്ട് കൃഷി',
        'navigation.home': 'ഹോം', 'navigation.dashboard': 'ഡാഷ്ബോർഡ്', 'navigation.weather': 'കാലാവസ്ഥ', 'navigation.marketPrices': 'വിപണി വിലകൾ', 'navigation.cropAdvisory': 'വിള ഉപദേശം', 'navigation.soilHealth': 'മണ്ണ് ആരോഗ്യം', 'navigation.pestDetection': 'കീടനാശിനി', 'navigation.voiceAssistance': 'ശബ്ദ സഹായം', 'navigation.faq': 'സംശയങ്ങൾ',
        'hero.title': 'കൃഷി ഓഫീസർ', 'hero.subtitle': 'സാങ്കേതികവിദ്യയുടെ സഹായത്തോടെ സ്മാർട്ട് കൃഷി', 'hero.cta': 'തുടങ്ങുക',
        'dashboard.welcome': 'സ്വാഗതം, കർഷക സുഹൃത്തേ', 'dashboard.todaysWeather': '☀️ ഇന്നത്തെ കാലാവസ്ഥ', 'dashboard.wheatPrice': '₹ ഗോതമ്പ് വില',
        'weather.title': 'കാലാവസ്ഥ', 'weather.today': 'ഇന്ന്', 'weather.tomorrow': 'നാളെ', 'weather.next7Days': 'അടുത്ത 7 ദിവസങ്ങൾ',
        'marketPrices.title': 'വിപണി വിലകൾ', 'marketPrices.searchBtn': 'തിരയുക',
        'common.days.mon': 'തിങ്കൾ', 'common.days.tue': 'ചൊവ്വ', 'common.days.wed': 'ബുധൻ', 'common.days.thu': 'വ്യാഴം', 'common.days.fri': 'വെള്ളി', 'common.days.sat': 'ശനി', 'common.days.sun': 'ഞായർ',
        'crops.wheat': 'ഗോതമ്പ്', 'crops.rice': 'അരി', 'crops.sugarcane': 'കരിമ്പ്', 'crops.cotton': 'പരുത്തി', 'crops.maize': 'ചോളം', 'crops.pulses': 'പയർവർഗ്ഗങ്ങൾ', 'crops.vegetables': 'പച്ചക്കറികൾ', 'crops.fruits': 'പഴങ്ങൾ',
        'pestDetection.title': 'കീടനാശിനി', 'pestDetection.analyzeImage': 'ചിത്രം വിശകലനം ചെയ്യുക',
        'soilHealth.title': 'മണ്ണ് ആരോഗ്യം', 'soilHealth.testNow': 'ഇപ്പോൾ പരിശോധിക്കുക',
        'cropAdvisory.title': 'വിള ഉപദേശം', 'cropAdvisory.getAdvice': 'ഉപദേശം നേടുക',
        'voiceAssistance.title': 'ശബ്ദ സഹായം', 'voiceAssistance.listening': 'കേൾക്കുന്നു...',
        'faq.title': 'സംശയങ്ങൾ'
    },
    // Odia (od)
    'od': {
        'common.appName': 'କୃଷି ଅଧିକାରୀ', 'common.tagline': 'ଟେକ୍ନୋଲୋଜି ଦ୍ୱାରା ସ୍ମାର୍ଟ କୃଷି ସହାୟତା',
        'navigation.home': 'ମୂଳପୃଷ୍ଠା', 'navigation.dashboard': 'ଡ୍ୟାସବୋର୍ଡ', 'navigation.weather': 'ପାଣିପାଗ', 'navigation.marketPrices': 'ବଜାର ଦର', 'navigation.cropAdvisory': 'ଫସଲ ପରାମର୍ଶ', 'navigation.soilHealth': 'ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ', 'navigation.pestDetection': 'କୀଟ ଚିହ୍ନଟ', 'navigation.voiceAssistance': 'ଭଏସ୍ ସହାୟତା', 'navigation.faq': 'ସାଧାରଣ ପ୍ରଶ୍ନ',
        'hero.title': 'କୃଷି ଅଧିକାରୀ', 'hero.subtitle': 'ଟେକ୍ନୋଲୋଜି ଦ୍ୱାରା ସ୍ମାର୍ଟ କୃଷି ସହାୟତା', 'hero.cta': 'ଆରମ୍ଭ କରନ୍ତୁ',
        'dashboard.welcome': 'ସ୍ୱାଗତ, କୃଷକ ବନ୍ଧୁ', 'dashboard.todaysWeather': '☀️ ଆଜିର ପାଣିପାଗ', 'dashboard.wheatPrice': '₹ ଗହମ ଦର',
        'weather.title': 'ପାଣିପାଗ', 'weather.today': 'ଆଜି', 'weather.tomorrow': 'ଆସନ୍ତାକାଲି', 'weather.next7Days': 'ଆଗାମୀ ୭ ଦିନ',
        'marketPrices.title': 'ବଜାର ଦର', 'marketPrices.searchBtn': 'ସନ୍ଧାନ',
        'common.days.mon': 'ସୋମ', 'common.days.tue': 'ମଙ୍ଗଳ', 'common.days.wed': 'ବୁଧ', 'common.days.thu': 'ଗୁରୁ', 'common.days.fri': 'ଶୁକ୍ର', 'common.days.sat': 'ଶନି', 'common.days.sun': 'ରବି',
        'crops.wheat': 'ଗହମ', 'crops.rice': 'ଚାଉଳ', 'crops.sugarcane': 'ଆଖୁ', 'crops.cotton': 'କପା', 'crops.maize': 'ମକା', 'crops.pulses': 'ଡାଲି', 'crops.vegetables': 'ପନିପରିବା', 'crops.fruits': 'ଫଳ',
        'pestDetection.title': 'କୀଟ ଚିହ୍ନଟ', 'pestDetection.analyzeImage': 'ଚିତ୍ର ବିଶ୍ଳେଷଣ କରନ୍ତୁ',
        'soilHealth.title': 'ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ', 'soilHealth.testNow': 'ବର୍ତ୍ତମାନ ପରୀକ୍ଷା କରନ୍ତୁ',
        'cropAdvisory.title': 'ଫସଲ ପରାମର୍ଶ', 'cropAdvisory.getAdvice': 'ପରାମର୍ଶ ନିଅନ୍ତୁ',
        'voiceAssistance.title': 'ଭଏସ୍ ସହାୟତା', 'voiceAssistance.listening': 'ଶୁଣୁଛି...',
        'faq.title': 'ସାଧାରଣ ପ୍ରଶ୍ନ'
    },
    // Punjabi (pa)
    'pa': {
        'common.appName': 'ਕ੍ਰਿਸ਼ੀ ਅਫਸਰ', 'common.tagline': 'ਤਕਨਾਲੋਜੀ ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਸਮਾਰਟ ਖੇਤੀ ਸਹਾਇਤਾ',
        'navigation.home': 'ਹੋਮ', 'navigation.dashboard': 'ਡੈਸ਼ਬੋਰਡ', 'navigation.weather': 'ਮੌਸਮ', 'navigation.marketPrices': 'ਮਾਰਕੀਟ ਕੀਮਤਾਂ', 'navigation.cropAdvisory': 'ਫਸਲ ਸਲਾਹ', 'navigation.soilHealth': 'ਮਿੱਟੀ ਦੀ ਸਿਹਤ', 'navigation.pestDetection': 'ਕੀੜੇ ਦੀ ਪਛਾਣ', 'navigation.voiceAssistance': 'ਆਵਾਜ਼ ਸਹਾਇਤਾ', 'navigation.faq': 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ',
        'hero.title': 'ਕ੍ਰਿਸ਼ੀ ਅਫਸਰ', 'hero.subtitle': 'ਤਕਨਾਲੋਜੀ ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਸਮਾਰਟ ਖੇਤੀ ਸਹਾਇਤਾ', 'hero.cta': 'ਸ਼ੁਰੂ ਕਰੋ',
        'dashboard.welcome': 'ਜੀ ਆਇਆਂ ਨੂੰ, ਕਿਸਾਨ ਵੀਰ', 'dashboard.todaysWeather': '☀️ ਅੱਜ ਦਾ ਮੌਸਮ', 'dashboard.wheatPrice': '₹ ਕਣਕ ਦੀ ਕੀਮਤ',
        'weather.title': 'ਮੌਸਮ', 'weather.today': 'ਅੱਜ', 'weather.tomorrow': 'ਕੱਲ੍ਹ', 'weather.next7Days': 'ਅਗਲੇ 7 ਦਿਨ',
        'marketPrices.title': 'ਮਾਰਕੀਟ ਕੀਮਤਾਂ', 'marketPrices.searchBtn': 'ਖੋਜ',
        'common.days.mon': 'ਸੋਮ', 'common.days.tue': 'ਮੰਗਲ', 'common.days.wed': 'ਬੁੱਧ', 'common.days.thu': 'ਵੀਰ', 'common.days.fri': 'ਸ਼ੁੱਕਰ', 'common.days.sat': 'ਸ਼ਨੀ', 'common.days.sun': 'ਐਤ',
        'crops.wheat': 'ਕਣਕ', 'crops.rice': 'ਚੌਲ', 'crops.sugarcane': 'ਗੰਨਾ', 'crops.cotton': 'ਕਪਾਹ', 'crops.maize': 'ਮੱਕੀ', 'crops.pulses': 'ਦਾਲਾਂ', 'crops.vegetables': 'ਸਬਜ਼ੀਆਂ', 'crops.fruits': 'ਫਲ',
        'pestDetection.title': 'ਕੀੜੇ ਦੀ ਪਛਾਣ', 'pestDetection.analyzeImage': 'ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
        'soilHealth.title': 'ਮਿੱਟੀ ਦੀ ਸਿਹਤ', 'soilHealth.testNow': 'ਹੁਣੇ ਟੈਸਟ ਕਰੋ',
        'cropAdvisory.title': 'ਫਸਲ ਸਲਾਹ', 'cropAdvisory.getAdvice': 'ਸਲਾਹ ਲਵੋ',
        'voiceAssistance.title': 'ਆਵਾਜ਼ ਸਹਾਇਤਾ', 'voiceAssistance.listening': 'ਸੁਣ ਰਿਹਾ ਹੈ...',
        'faq.title': 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ'
    },
    // Assamese (as)
    'as': {
        'common.appName': 'কৃষি বিষয়া', 'common.tagline': 'প্ৰযুক্তিৰ দ্বাৰা চালিত স্মাৰ্ট কৃষি সহায়',
        'navigation.home': 'গৃহ', 'navigation.dashboard': 'ডেশবৰ্ড', 'navigation.weather': 'বতৰ', 'navigation.marketPrices': 'বজাৰৰ দৰ', 'navigation.cropAdvisory': 'শস্যৰ পৰামৰ্শ', 'navigation.soilHealth': 'মাটিৰ স্বাস্থ্য', 'navigation.pestDetection': 'পোক-পৰুৱা চিনাক্তকৰণ', 'navigation.voiceAssistance': 'কণ্ঠ সহায়', 'navigation.faq': 'সঘনাই সোধা প্ৰশ্ন',
        'hero.title': 'কৃষি বিষয়া', 'hero.subtitle': 'প্ৰযুক্তিৰ দ্বাৰা চালিত স্মাৰ্ট কৃষি সহায়', 'hero.cta': 'আৰম্ভ কৰক',
        'dashboard.welcome': 'স্বাগতম, কৃষক বন্ধু', 'dashboard.todaysWeather': '☀️ আজিৰ বতৰ', 'dashboard.wheatPrice': '₹ ঘেঁহুৰ দৰ',
        'weather.title': 'বতৰ', 'weather.today': 'আজি', 'weather.tomorrow': 'কাইলৈ', 'weather.next7Days': 'পৰৱৰ্তী ৭ দিন',
        'marketPrices.title': 'বজাৰৰ দৰ', 'marketPrices.searchBtn': 'সন্ধান',
        'common.days.mon': 'সোম', 'common.days.tue': 'মঙ্গল', 'common.days.wed': 'বুধ', 'common.days.thu': 'বৃহঃ', 'common.days.fri': 'শুক্ৰ', 'common.days.sat': 'শনি', 'common.days.sun': 'দেও',
        'crops.wheat': 'ঘেঁহু', 'crops.rice': 'ধান', 'crops.sugarcane': 'কুঁহিয়াৰ', 'crops.cotton': 'কপাহ', 'crops.maize': 'মাকৈ', 'crops.pulses': 'দাইল', 'crops.vegetables': 'শাক-পাচলি', 'crops.fruits': 'ফল-মূল',
        'pestDetection.title': 'পোক-পৰুৱা চিনাক্তকৰণ', 'pestDetection.analyzeImage': 'ছবি বিশ্লেষণ কৰক',
        'soilHealth.title': 'মাটিৰ স্বাস্থ্য', 'soilHealth.testNow': 'এতিয়া পৰীক্ষা কৰক',
        'cropAdvisory.title': 'শস্যৰ পৰামৰ্শ', 'cropAdvisory.getAdvice': 'পৰামৰ্শ লওক',
        'voiceAssistance.title': 'কণ্ঠ সহায়', 'voiceAssistance.listening': 'শুনি আছো...',
        'faq.title': 'সঘনাই সোধা প্ৰশ্ন'
    },
    // Maithili (mai)
    'mai': {
        'common.appName': 'कृषि अधिकारी', 'common.tagline': 'प्रौद्योगिकी द्वारा संचालित स्मार्ट कृषि सहायता',
        'navigation.home': 'होम', 'navigation.dashboard': 'डैशबोर्ड', 'navigation.weather': 'मौसम', 'navigation.marketPrices': 'बाजार भाव', 'navigation.cropAdvisory': 'फसल सलाह', 'navigation.soilHealth': 'माटिके स्वास्थ्य', 'navigation.pestDetection': 'कीट पहचान', 'navigation.voiceAssistance': 'आवाज सहायता', 'navigation.faq': 'सामान्य प्रश्न',
        'hero.title': 'कृषि अधिकारी', 'hero.subtitle': 'प्रौद्योगिकी द्वारा संचालित स्मार्ट कृषि सहायता', 'hero.cta': 'शुरू करू',
        'dashboard.welcome': 'स्वागत अछि, किसान भाई', 'dashboard.todaysWeather': '☀️ आई के मौसम', 'dashboard.wheatPrice': '₹ गेहूं के भाव',
        'weather.title': 'मौसम', 'weather.today': 'आई', 'weather.tomorrow': 'काल्हि', 'weather.next7Days': 'अगिला 7 दिन',
        'marketPrices.title': 'बाजार भाव', 'marketPrices.searchBtn': 'खोजू',
        'common.days.mon': 'सोम', 'common.days.tue': 'मंगल', 'common.days.wed': 'बुध', 'common.days.thu': 'बृहस्पति', 'common.days.fri': 'शुक्र', 'common.days.sat': 'शनि', 'common.days.sun': 'रवि',
        'crops.wheat': 'गेहूं', 'crops.rice': 'धान', 'crops.sugarcane': 'ईख', 'crops.cotton': 'कपास', 'crops.maize': 'मकई', 'crops.pulses': 'दालि', 'crops.vegetables': 'सब्जी', 'crops.fruits': 'फल',
        'pestDetection.title': 'कीट पहचान', 'pestDetection.analyzeImage': 'चित्र विश्लेषण करू',
        'soilHealth.title': 'माटिके स्वास्थ्य', 'soilHealth.testNow': 'आब परीक्षण करू',
        'cropAdvisory.title': 'फसल सलाह', 'cropAdvisory.getAdvice': 'सलाह लेउ',
        'voiceAssistance.title': 'आवाज सहायता', 'voiceAssistance.listening': 'सुनि रहल छी...',
        'faq.title': 'सामान्य प्रश्न'
    },
    // Sanskrit (sa)
    'sa': {
        'common.appName': 'कृषि अधिकारी', 'common.tagline': 'प्रौद्योगिक्या चालितं स्मार्ट कृषिसहाय्यम्',
        'navigation.home': 'गृहम्', 'navigation.dashboard': 'फलकम्', 'navigation.weather': 'वातावरणम्', 'navigation.marketPrices': 'विपणीमूल्यानि', 'navigation.cropAdvisory': 'सस्यपरामर्शः', 'navigation.soilHealth': 'मृत्तिकास्वास्थ्यम्', 'navigation.pestDetection': 'कीटपरिज्ञानम्', 'navigation.voiceAssistance': 'ध्वनिसहाय्यम्', 'navigation.faq': 'सामन्यप्रश्नाः',
        'hero.title': 'कृषि अधिकारी', 'hero.subtitle': 'प्रौद्योगिक्या चालितं स्मार्ट कृषिसहाय्यम्', 'hero.cta': 'आरभताम्',
        'dashboard.welcome': 'स्वागतम्, कृषक', 'dashboard.todaysWeather': '☀️ अद्यतनं वातावरणम्', 'dashboard.wheatPrice': '₹ गोधूममूल्यम्',
        'weather.title': 'वातावरणम्', 'weather.today': 'अद्य', 'weather.tomorrow': 'श्वः', 'weather.next7Days': 'आगामि ७ दिनानि',
        'marketPrices.title': 'विपणीमूल्यानि', 'marketPrices.searchBtn': 'अन्विष्यताम्',
        'common.days.mon': 'सोम', 'common.days.tue': 'मंगल', 'common.days.wed': 'बुध', 'common.days.thu': 'गुरु', 'common.days.fri': 'शुक्र', 'common.days.sat': 'शनि', 'common.days.sun': 'रवि',
        'crops.wheat': 'गोधूमः', 'crops.rice': 'तण्डुलः', 'crops.sugarcane': 'इक्षुः', 'crops.cotton': 'कार्पासः', 'crops.maize': 'मक्का', 'crops.pulses': 'दालः', 'crops.vegetables': 'शाकानि', 'crops.fruits': 'फलानि',
        'pestDetection.title': 'कीटपरिज्ञानम्', 'pestDetection.analyzeImage': 'चित्रं विश्लेषणं कुरु',
        'soilHealth.title': 'मृत्तिकास्वास्थ्यम्', 'soilHealth.testNow': 'इदानीं परीक्षताम्',
        'cropAdvisory.title': 'सस्यपरामर्शः', 'cropAdvisory.getAdvice': 'परामर्शं प्राप्नोतु',
        'voiceAssistance.title': 'ध्वनिसहाय्यम्', 'voiceAssistance.listening': 'शृणोति...',
        'faq.title': 'सामन्यप्रश्नाः'
    },
    // Nepali (ne)
    'ne': {
        'common.appName': 'कृषि अधिकारी', 'common.tagline': 'प्रविधि द्वारा संचालित स्मार्ट कृषि सहायता',
        'navigation.home': 'गृहपृष्ठ', 'navigation.dashboard': 'ड्यासबোর্ড', 'navigation.weather': 'मौसम', 'navigation.marketPrices': 'बजार मूल्य', 'navigation.cropAdvisory': 'बाली सल्लाह', 'navigation.soilHealth': 'माटोको स्वास्थ्य', 'navigation.pestDetection': 'कीरा पहिचान', 'navigation.voiceAssistance': 'आवाज सहायता', 'navigation.faq': 'प्राय: सोधिने प्रश्नहरू',
        'hero.title': 'कृषि अधिकारी', 'hero.subtitle': 'प्रविधि द्वारा संचालित स्मार्ट कृषि सहायता', 'hero.cta': 'सुरु गर्नुहोस्',
        'dashboard.welcome': 'स्वागत छ, किसान दाजुभाइ', 'dashboard.todaysWeather': '☀️ आजको मौसम', 'dashboard.wheatPrice': '₹ गहुँको मूल्य',
        'weather.title': 'मौसम', 'weather.today': 'आज', 'weather.tomorrow': 'भोलि', 'weather.next7Days': 'आगामी ७ दिन',
        'marketPrices.title': 'बजार मूल्य', 'marketPrices.searchBtn': 'खोज्नुहोस्',
        'common.days.mon': 'सोम', 'common.days.tue': 'मंगल', 'common.days.wed': 'बुध', 'common.days.thu': 'बिही', 'common.days.fri': 'शुक्र', 'common.days.sat': 'शनि', 'common.days.sun': 'आइत',
        'crops.wheat': 'गहुँ', 'crops.rice': 'धान', 'crops.sugarcane': 'उखु', 'crops.cotton': 'कपास', 'crops.maize': 'मकै', 'crops.pulses': 'दाल', 'crops.vegetables': 'तरकारी', 'crops.fruits': 'फलफूल',
        'pestDetection.title': 'कीरा पहिचान', 'pestDetection.analyzeImage': 'तस्बिर विश्लेषण गर्नुहोस्',
        'soilHealth.title': 'माटोको स्वास्थ्य', 'soilHealth.testNow': 'अहिले परीक्षण गर्नुहोस्',
        'cropAdvisory.title': 'बाली सल्लाह', 'cropAdvisory.getAdvice': 'सल्लाह लिनुहोस्',
        'voiceAssistance.title': 'आवाज सहायता', 'voiceAssistance.listening': 'सुन्दै छ...',
        'faq.title': 'प्राय: सोधिने प्रश्नहरू'
    },
    // Konkani (kok)
    'kok': {
        'common.appName': 'कृषी अधिकारी', 'common.tagline': 'तंत्रज्ञानावर आदारिल्लो स्मार्ट शेती आदार',
        'navigation.home': 'घर', 'navigation.dashboard': 'डॅशबोर्ड', 'navigation.weather': 'हवामान', 'navigation.marketPrices': 'बाजार भाव', 'navigation.cropAdvisory': 'पीक सल्ला', 'navigation.soilHealth': 'माती भलायकी', 'navigation.pestDetection': 'कीड वळख', 'navigation.voiceAssistance': 'ताळो आदार', 'navigation.faq': 'सामान्य प्रस्न',
        'hero.title': 'कृषी अधिकारी', 'hero.subtitle': 'तंत्रज्ञानावर आदारिल्लो स्मार्ट शेती आदार', 'hero.cta': 'सुरू करात',
        'dashboard.welcome': 'येवकार, शेतकार भाव', 'dashboard.todaysWeather': '☀️ आयचें हवामान', 'dashboard.wheatPrice': '₹ गव्हाचो भाव',
        'weather.title': 'हवामान', 'weather.today': 'आयज', 'weather.tomorrow': 'फाल्यां', 'weather.next7Days': 'फुडले 7 दीस',
        'marketPrices.title': 'बाजार भाव', 'marketPrices.searchBtn': 'सोदात',
        'common.days.mon': 'सोम', 'common.days.tue': 'मंगळ', 'common.days.wed': 'बुध', 'common.days.thu': 'गुरु', 'common.days.fri': 'शुक्र', 'common.days.sat': 'शनि', 'common.days.sun': 'आयतार',
        'crops.wheat': 'गवं', 'crops.rice': 'तांदूळ', 'crops.sugarcane': 'काबी', 'crops.cotton': 'कापूस', 'crops.maize': 'मको', 'crops.pulses': 'डाळी', 'crops.vegetables': 'भाजी', 'crops.fruits': 'फळां',
        'pestDetection.title': 'कीड वळख', 'pestDetection.analyzeImage': 'चित्राचें विश्लेशण करात',
        'soilHealth.title': 'माती भलायकी', 'soilHealth.testNow': 'आतां तपासात',
        'cropAdvisory.title': 'पीक सल्ला', 'cropAdvisory.getAdvice': 'सल्लो घेयात',
        'voiceAssistance.title': 'ताळो आदार', 'voiceAssistance.listening': 'आयकता...',
        'faq.title': 'सामान्य प्रस्न'
    },
    // Sindhi (sd) - RTL
    'sd': {
        'common.appName': 'ڪرشي آفيسر', 'common.tagline': 'ٽيڪنالاجي جي ذريعي سمارٽ زرعي مدد',
        'navigation.home': 'گهر', 'navigation.dashboard': 'ڊيش بورڊ', 'navigation.weather': 'موسم', 'navigation.marketPrices': 'مارڪيٽ قيمتون', 'navigation.cropAdvisory': 'فصل جي صلاح', 'navigation.soilHealth': 'مٽي جي صحت', 'navigation.pestDetection': 'ڪيڙن جي سڃاڻپ', 'navigation.voiceAssistance': 'آواز جي مدد', 'navigation.faq': 'عام سوال',
        'hero.title': 'ڪرشي آفيسر', 'hero.subtitle': 'ٽيڪنالاجي جي ذريعي سمارٽ زرعي مدد', 'hero.cta': 'شروع ڪريو',
        'dashboard.welcome': 'ڀليڪار، آبادگار ڀاءُ', 'dashboard.todaysWeather': '☀️ اڄ جي موسم', 'dashboard.wheatPrice': '₹ ڪڻڪ جي قيمت',
        'weather.title': 'موسم', 'weather.today': 'اڄ', 'weather.tomorrow': 'سڀاڻي', 'weather.next7Days': 'ايندڙ 7 ڏينهن',
        'marketPrices.title': 'مارڪيٽ قيمتون', 'marketPrices.searchBtn': 'ڳوليو',
        'common.days.mon': 'سومر', 'common.days.tue': 'اڱارو', 'common.days.wed': 'اربع', 'common.days.thu': 'خميس', 'common.days.fri': 'جمعو', 'common.days.sat': 'ڇنڇر', 'common.days.sun': 'آچر',
        'crops.wheat': 'ڪڻڪ', 'crops.rice': 'چيور', 'crops.sugarcane': 'ڪمند', 'crops.cotton': 'پُٽي', 'crops.maize': 'مڪئي', 'crops.pulses': 'دال', 'crops.vegetables': 'ڀاڄيون', 'crops.fruits': 'ميوو',
        'pestDetection.title': 'ڪيڙن جي سڃاڻپ', 'pestDetection.analyzeImage': 'تصوير جو تجزيو ڪريو',
        'soilHealth.title': 'مٽي جي صحت', 'soilHealth.testNow': 'هاڻي ٽيسٽ ڪريو',
        'cropAdvisory.title': 'فصل جي صلاح', 'cropAdvisory.getAdvice': 'صلاح حاصل ڪريو',
        'voiceAssistance.title': 'آواز جي مدد', 'voiceAssistance.listening': 'ٻڌي رهيو آهي...',
        'faq.title': 'عام سوال'
    },
    // Dogri (doi)
    'doi': {
        'common.appName': 'कृषि अफसर', 'common.tagline': 'तकनीक दे जरिए स्मार्ट खेती मदद',
        'navigation.home': 'घर', 'navigation.dashboard': 'डैशबोर्ड', 'navigation.weather': 'मौसम', 'navigation.marketPrices': 'बाजार भाव', 'navigation.cropAdvisory': 'फसल सलाह', 'navigation.soilHealth': 'मिट्टी दी सेहत', 'navigation.pestDetection': 'कीड़ा पछाण', 'navigation.voiceAssistance': 'आवाज मदद', 'navigation.faq': 'आम सवाल',
        'hero.title': 'कृषि अफसर', 'hero.subtitle': 'तकनीक दे जरिए स्मार्ट खेती मदद', 'hero.cta': 'शुरू करो',
        'dashboard.welcome': 'स्वागत ऐ, किसान भरा', 'dashboard.todaysWeather': '☀️ अज्ज दा मौसम', 'dashboard.wheatPrice': '₹ कनक दा भाव',
        'weather.title': 'मौसम', 'weather.today': 'अज्ज', 'weather.tomorrow': 'कल', 'weather.next7Days': 'अगले 7 दिन',
        'marketPrices.title': 'बाजार भाव', 'marketPrices.searchBtn': 'टोलो',
        'common.days.mon': 'सोम', 'common.days.tue': 'मंगल', 'common.days.wed': 'बुध', 'common.days.thu': 'वीर', 'common.days.fri': 'शुक्कर', 'common.days.sat': 'शनी', 'common.days.sun': 'ऐत',
        'crops.wheat': 'कनक', 'crops.rice': 'चाउल', 'crops.sugarcane': 'गन्ना', 'crops.cotton': 'कपास', 'crops.maize': 'मक्की', 'crops.pulses': 'दालां', 'crops.vegetables': 'सब्जियां', 'crops.fruits': 'फल',
        'pestDetection.title': 'कीड़ा पछाण', 'pestDetection.analyzeImage': 'फोटो दा विश्लेषण करो',
        'soilHealth.title': 'मिट्टी दी सेहत', 'soilHealth.testNow': 'हुन टेस्ट करो',
        'cropAdvisory.title': 'फसल सलाह', 'cropAdvisory.getAdvice': 'सलाह लैओ',
        'voiceAssistance.title': 'आवाज मदद', 'voiceAssistance.listening': 'सुनी रा ऐ...',
        'faq.title': 'आम सवाल'
    },
    // Manipuri (mni)
    'mni': {
        'common.appName': 'কৃষি ওফিসার', 'common.tagline': 'টেকনোলজীনা পাংথোকপা স্মার্ট লৌউ-শিংউ',
        'navigation.home': 'য়ুম', 'navigation.dashboard': 'দেশবোর্ড', 'navigation.weather': 'নোং-চিং', 'navigation.marketPrices': ' কৈথেল মমল', 'navigation.cropAdvisory': 'লৌউ-শিংউ পাউতাক', 'navigation.soilHealth': 'লৈবাক হকশেল', 'navigation.pestDetection': 'তিল-কাং খঙদোকপা', 'navigation.voiceAssistance': 'খোঞ্জেল মতেং', 'navigation.faq': 'তোয়না হংবা ৱাহংশিং',
        'hero.title': 'কৃষি ওফিসার', 'hero.subtitle': 'টেকনোলজীনা পাংথোকপা স্মার্ট লৌউ-শিংউ', 'hero.cta': 'হৌগৎলসি',
        'dashboard.welcome': 'তরাম্না ওকচরি, লৌমী ইচিন-ইনাও', 'dashboard.todaysWeather': '☀️ ঙসিগী নোং-চিং', 'dashboard.wheatPrice': '₹ গেহু মমল',
        'weather.title': 'নোং-চিং', 'weather.today': 'ঙসি', 'weather.tomorrow': 'হয়েং', 'weather.next7Days': 'মথং নুমিৎ ৭',
        'marketPrices.title': 'কৈথেল মমল', 'marketPrices.searchBtn': 'থিবা',
        'common.days.mon': 'নিং', 'common.days.tue': 'লৈ', 'common.days.wed': 'য়ুম', 'common.days.thu': 'শগোল', 'common.days.fri': 'ইরা', 'common.days.sat': 'থাং', 'common.days.sun': 'নোং',
        'crops.wheat': 'গেহু', 'crops.rice': 'ফৌ', 'crops.sugarcane': 'চু', 'crops.cotton': 'লশিং', 'crops.maize': 'চুজাক', 'crops.pulses': 'हৱাই-চেঙৱাই', 'crops.vegetables': 'মনা-মশিং', 'crops.fruits': 'উহৈ-ৱাহৈ',
        'pestDetection.title': 'তিল-কাং খঙদোকপা', 'pestDetection.analyzeImage': 'মমি য়েংবা',
        'soilHealth.title': 'লৈবাক হকশেল', 'soilHealth.testNow': 'হৌজিক চাংয়েং তৌবা',
        'cropAdvisory.title': 'লৌউ-শিংউ পাউতাক', 'cropAdvisory.getAdvice': 'পাউতাক লৌবা',
        'voiceAssistance.title': 'খোঞ্জেল মতেং', 'voiceAssistance.listening': 'তাজরি...',
        'faq.title': 'তোয়না হংবা ৱাহংশিং'
    },
    // Bodo (brx)
    'brx': {
        'common.appName': 'कृषि अफिसार', 'common.tagline': 'टेक्नलगिजों सालायजानाय स्मार्ट आबाद मदत',
        'navigation.home': 'न', 'navigation.dashboard': 'डेशबर्ड', 'navigation.weather': 'बोर', 'navigation.marketPrices': 'हाथाय बेसेन', 'navigation.cropAdvisory': 'आबाद सुबुं', 'navigation.soilHealth': 'हामना देहा', 'navigation.pestDetection': 'फोका सिनायथि', 'navigation.voiceAssistance': 'राव मदत', 'navigation.faq': 'सांफ्रोम सोंनाय सोंथि',
        'hero.title': 'कृषि अफिसार', 'hero.subtitle': 'टेक्नलगिजों सालायजानाय स्मार्ट आबाद मदत', 'hero.cta': 'जायजेन',
        'dashboard.welcome': 'बरायनो, आबादारी बिदा', 'dashboard.todaysWeather': '☀️ दिनैनि बोर', 'dashboard.wheatPrice': '₹ गम बेसेन',
        'weather.title': 'बोर', 'weather.today': 'दिनै', 'weather.tomorrow': 'गाबोन', 'weather.next7Days': 'उननि 7 सान',
        'marketPrices.title': 'हाथाय बेसेन', 'marketPrices.searchBtn': 'नागिर',
        'common.days.mon': 'सम', 'common.days.tue': 'मंगल', 'common.days.wed': 'बुद', 'common.days.thu': 'बिसथि', 'common.days.fri': 'सुखुर', 'common.days.sat': 'सुनि', 'common.days.sun': 'रबि',
        'crops.wheat': 'गम', 'crops.rice': 'माय', 'crops.sugarcane': 'कुसियार', 'crops.cotton': 'खुन्दुं', 'crops.maize': 'गुम', 'crops.pulses': 'दालि', 'crops.vegetables': 'मैगं-ताइगं', 'crops.fruits': 'फिथाय-सामथाय',
        'pestDetection.title': 'फोका सिनायथि', 'pestDetection.analyzeImage': 'सावगारि बिजिर',
        'soilHealth.title': 'हामना देहा', 'soilHealth.testNow': 'दानो आनजाद खालाम',
        'cropAdvisory.title': 'आबाद सुबुं', 'cropAdvisory.getAdvice': 'सुबुं ला',
        'voiceAssistance.title': 'राव मदत', 'voiceAssistance.listening': 'खोनासंदों...',
        'faq.title': 'सांफ्रोम सोंनाय सोंथि'
    },
    // Santhali (sat)
    'sat': {
        'common.appName': 'ᱠᱨᱤᱥᱤ ᱚᱯᱷᱤᱥᱟᱨ', 'common.tagline': 'ᱴᱮᱠᱱᱚᱞᱚᱡᱤ ᱛᱮ ᱪᱟᱞᱟᱣ ᱟᱠᱟᱱ ᱥᱢᱟᱨᱴ ᱪᱟᱥ ᱜᱚᱲᱚ',
        'navigation.home': 'ᱚᱲᱟᱜ', 'navigation.dashboard': 'ᱰᱮᱥᱵᱚᱨᱰ', 'navigation.weather': 'ᱢᱚᱥᱚᱢ', 'navigation.marketPrices': 'ᱵᱟᱡᱟᱨ ᱫᱟᱨ', 'navigation.cropAdvisory': 'ᱪᱟᱥ ᱯᱚᱨᱟᱢᱚᱨᱥ', 'navigation.soilHealth': 'ᱦᱟᱥᱟ ᱦᱚᱲᱢᱚ', 'navigation.pestDetection': 'ᱛᱤᱡᱩ ᱪᱤᱱᱦᱟᱹᱯ', 'navigation.voiceAssistance': 'ᱟᱲᱟᱝ ᱜᱚᱲᱚ', 'navigation.faq': 'ᱵᱟᱹᱲᱛᱤ ᱠᱩᱞᱤ ᱟᱠᱟᱱ ᱠᱩᱠᱞᱤ',
        'hero.title': 'ᱠᱨᱤᱥᱤ ᱚᱯᱷᱤᱥᱟᱨ', 'hero.subtitle': 'ᱴᱮᱠᱱᱚᱞᱚᱡᱤ ᱛᱮ ᱪᱟᱞᱟᱣ ᱟᱠᱟᱱ ᱥᱢᱟᱨᱴ ᱪᱟᱥ ᱜᱚᱲᱚ', 'hero.cta': 'ᱮᱛᱚᱦᱚᱵ ᱢᱮ',
        'dashboard.welcome': 'ᱡᱚᱦᱟᱨ, ᱪᱟᱥᱤ ᱵᱚᱭᱦᱟ', 'dashboard.todaysWeather': '☀️ ᱛᱮᱦᱮᱧᱟᱜ ᱢᱚᱥᱚᱢ', 'dashboard.wheatPrice': '₹ ᱜᱚᱦᱩᱢ ᱫᱟᱨ',
        'weather.title': 'ᱢᱚᱥᱚᱢ', 'weather.today': 'ᱛᱮᱦᱮᱧ', 'weather.tomorrow': 'ᱜᱟᱯᱟ', 'weather.next7Days': 'ᱫᱟᱨᱟᱭ ᱗ ᱢᱟᱦᱟ',
        'marketPrices.title': 'ᱵᱟᱡᱟᱨ ᱫᱟᱨ', 'marketPrices.searchBtn': 'ᱥᱮᱸᱫᱽᱨᱟ',
        'common.days.mon': 'ᱥᱚᱢ', 'common.days.tue': 'ᱢᱚᱝᱜᱚᱞ', 'common.days.wed': 'ᱵᱩᱫᱷ', 'common.days.thu': 'ᱞᱚᱠᱷᱤ', 'common.days.fri': 'ᱡᱤᱨᱩᱢ', 'common.days.sat': 'ᱥᱚᱱᱤ', 'common.days.sun': 'ᱥᱤᱝᱜᱤ',
        'crops.wheat': 'ᱜᱚᱦᱩᱢ', 'crops.rice': 'ᱪᱟᱣᱞᱮ', 'crops.sugarcane': 'ᱟᱠ', 'crops.cotton': 'ᱠᱟᱥᱠᱚᱢ', 'crops.maize': 'ᱡᱚᱱᱰᱨᱟ', 'crops.pulses': 'ᱫᱟᱹᱞ', 'crops.vegetables': 'ᱩᱛᱩ', 'crops.fruits': 'ᱡᱚ',
        'pestDetection.title': 'ᱛᱤᱡᱩ ᱪᱤᱱᱦᱟᱹᱯ', 'pestDetection.analyzeImage': 'ᱪᱤᱛᱟᱹᱨ ᱧᱮᱞ ᱢᱮ',
        'soilHealth.title': 'ᱦᱟᱥᱟ ᱦᱚᱲᱢᱚ', 'soilHealth.testNow': 'ᱱᱤᱛᱚᱜ ᱵᱤᱰᱟᱹᱣ ᱢᱮ',
        'cropAdvisory.title': 'ᱪᱟᱥ ᱯᱚᱨᱟᱢᱚᱨᱥ', 'cropAdvisory.getAdvice': 'ᱯᱚᱨᱟᱢᱚᱨᱥ ᱦᱟᱛᱟᱣ ᱢᱮ',
        'voiceAssistance.title': 'ᱟᱲᱟᱝ ᱜᱚᱲᱚ', 'voiceAssistance.listening': 'ᱟᱸᱡᱚᱢᱮᱫᱟ...',
        'faq.title': 'ᱵᱟᱹᱲᱛᱤ ᱠᱩᱞᱤ ᱟᱠᱟᱱ ᱠᱩᱠᱞᱤ'
    }
};

// Deep merge utility
function deepMerge(source, target, langCode, prefix = '') {
    let modified = false;
    for (const key in source) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            if (!target[key] || typeof target[key] !== 'object') {
                target[key] = {};
                modified = true;
            }
            if (deepMerge(source[key], target[key], langCode, fullKey)) modified = true;
        } else {
            // Check master translations first
            const manualTranslation = masterTranslations[langCode] && masterTranslations[langCode][fullKey];
            
            if (manualTranslation) {
                if (target[key] !== manualTranslation) {
                    target[key] = manualTranslation;
                    modified = true;
                }
            } else if (!target[key]) {
                // Fallback to English if missing
                target[key] = source[key];
                modified = true;
            }
        }
    }
    return modified;
}

// Language mapping (file names)
const languages = {
    'hi': 'Hindi', 'bn': 'Bengali', 'te': 'Telugu', 'mr': 'Marathi', 'ta': 'Tamil', 
    'ur': 'Urdu', 'gu': 'Gujarati', 'kn': 'Kannada', 'ml': 'Malayalam', 'od': 'Odia', 
    'pa': 'Punjabi', 'as': 'Assamese', 'mai': 'Maithili', 'sa': 'Sanskrit', 'ne': 'Nepali', 
    'kok': 'Konkani', 'sd': 'Sindhi', 'doi': 'Dogri', 'mni': 'Manipuri', 'brx': 'Bodo', 'sat': 'Santhali'
};

// Sync process
console.log('Starting translation sync...');

Object.keys(languages).forEach(langCode => {
    const filePath = path.join(i18nDir, `${langCode}.json`);
    let langData = {};
    
    if (fs.existsSync(filePath)) {
        try {
            langData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            console.error(`Error parsing ${langCode}.json, creating fresh.`);
        }
    }
    
    const modified = deepMerge(enData, langData, langCode);
    
    if (modified || !fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(langData, null, 2), 'utf8');
        console.log(`Updated ${languages[langCode]} (${langCode}.json)`);
    } else {
        console.log(`No changes for ${languages[langCode]}`);
    }
});

console.log('Sync completed!');
