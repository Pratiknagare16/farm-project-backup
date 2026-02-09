document.addEventListener('DOMContentLoaded', () => {
  // 1. Elements
  const plusBtn = document.getElementById('plusBtn')
  const imageInput = document.getElementById('imageInput')
  const imagePreview = document.getElementById('imagePreview')
  const previewImg = document.getElementById('previewImg')
  const removeImageBtn = document.getElementById('removeImage')
  const textInput = document.getElementById('textInput')
  const diagnoseBtn = document.getElementById('diagnoseBtn')
  const resultsPlaceholder = document.getElementById('resultsPlaceholder')
  const resultsContent = document.getElementById('resultsContent')

  let selectedFile = null

  // Helper to translate safely
  const t = (key, defaultText) => {
    if (window.KrishiI18n && window.KrishiI18n.t) {
        return window.KrishiI18n.t(key);
    }
    return defaultText;
  };

  // 2. Trigger hidden file input when + is clicked
  plusBtn.addEventListener('click', () => {
    imageInput.click()
  })

  // 3. Handle File Selection and Show Preview Bubble
  imageInput.addEventListener('change', e => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      selectedFile = file
      const reader = new FileReader()

      reader.onload = event => {
        previewImg.src = event.target.result
        imagePreview.style.display = 'block' // Show the floating bubble
      }

      reader.readAsDataURL(file)
    }
  })

  // 4. Remove Image Attachment
  removeImageBtn.addEventListener('click', e => {
    e.preventDefault()
    selectedFile = null
    imageInput.value = ''
    imagePreview.style.display = 'none'
    previewImg.src = ''
  })

  // 5. Auto-expand textarea as user types (Max height 150px)
  textInput.addEventListener('input', function () {
    this.style.height = 'auto'
    const newHeight = Math.min(this.scrollHeight, 150)
    this.style.height = newHeight + 'px'
    this.style.overflowY = this.scrollHeight > 150 ? 'auto' : 'hidden'
  })

  // 6. Diagnose Button (API Orchestration)
  diagnoseBtn.addEventListener('click', async () => {
    const queryText = textInput.value.trim()

    if (!selectedFile && !queryText) {
      alert(t('cropAdvisory.alertNoInput', 'Please provide an image or a description of the issue.'))
      return
    }

    // --- Loading State ---
    diagnoseBtn.disabled = true
    diagnoseBtn.style.opacity = '0.7'
    diagnoseBtn.innerHTML = '<span>⏳</span>'
    
    const analyzingText = t('cropAdvisory.diagnosing', 'Krishi AI is analyzing your crop...');
    const subtext = t('cropAdvisory.diagnosingSubtext', 'This may take a moment');

    resultsPlaceholder.innerHTML = `
      <div class="placeholder-icon">⏳</div>
      <p>${analyzingText}</p>
      <small style="color: #888;">${subtext}</small>
    `

    // Prepare Data
    const formData = new FormData()
    formData.append(
      'query',
      queryText || 'Analyze this crop image for pests or diseases.'
    )
    
    // Add language for localized response
    if (window.KrishiI18n) {
      formData.append('language', KrishiI18n.getCurrentLanguage())
    }

    if (selectedFile) {
      formData.append('crop_image', selectedFile)
    }

    try {
      const response = await fetch('/analyze-crop', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.advice) {
        showResults(data.advice)
      } else {
        throw new Error(data.error || t('cropAdvisory.analysisFailed', 'Analysis failed'))
      }
    } catch (error) {
      console.error('Fetch error:', error)
      const errorText = t('cropAdvisory.error', 'Error: ');
      const tryAgainText = t('cropAdvisory.tryAgain', 'Try Again');
      
      resultsPlaceholder.innerHTML = `
        <div class="placeholder-icon">⚠️</div>
        <p>${errorText}${error.message}</p>
        <button onclick="location.reload()" style="margin-top: 15px; padding: 8px 16px; border-radius: 8px; border: 1px solid #ccc; cursor: pointer;">${tryAgainText}</button>
      `
    } finally {
      diagnoseBtn.disabled = false
      diagnoseBtn.style.opacity = '1'
      diagnoseBtn.innerHTML = '<span>➤</span>'
    }
  })

  // 7. Enhanced Display Logic (Handles Gemini Markdown)
  function showResults (advice) {
    resultsPlaceholder.style.display = 'none'
    resultsContent.style.display = 'block'

    // Advanced formatting for Gemini Markdown
    let formattedAdvice = advice
      .replace(/^### (.*$)/gim, '<h3 class="result-section-title">$1</h3>') // Headers
      .replace(/^## (.*$)/gim, '<h2 class="result-section-title">$1</h2>') // H2
      .replace(/^# (.*$)/gim, '<h1 class="result-section-title">$1</h1>') // H1
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
      .replace(/^\* (.*$)/gim, '<li>$1</li>') // Unordered lists
      .replace(/^\d+\. (.*$)/gim, '<li>$1</li>') // Ordered lists
      .replace(/\n\s*\n/g, '</p><p>') // Paragraphs
      .replace(/\n/g, '<br>') // Line breaks

    // Wrap list items in <ul> if they exist
    if (formattedAdvice.includes('<li>')) {
        // Simple regex to wrap groups of <li> tags in <ul>
        formattedAdvice = formattedAdvice.replace(/(<li>.*<\/li>)/gms, '<ul>$1</ul>');
    }

    // Determine RTL direction
    const isRTL = window.KrishiI18n && window.KrishiI18n.isRTL();
    const dirAttribute = isRTL ? 'dir="rtl"' : '';
    const alignStyle = isRTL ? 'style="text-align: right;"' : '';
    const diagnosisTitle = t('cropAdvisory.diagnosisTitle', '🌿 Krishi AI Diagnosis');

    resultsContent.innerHTML = `
            <div class="result-item">
                <h3 class="result-title">${diagnosisTitle}</h3>
                <div class="result-text" ${dirAttribute} ${alignStyle}><p>${formattedAdvice}</p></div>
            </div>
        `

    // Reset UI
    textInput.value = ''
    textInput.style.height = 'auto'
    selectedFile = null
    imageInput.value = ''
    imagePreview.style.display = 'none'

    // Smooth scroll to results
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
