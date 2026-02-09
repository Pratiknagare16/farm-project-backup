import os
try:
    import google.generativeai as genai
except Exception:
    genai = None
from PIL import Image
from dotenv import load_dotenv

load_dotenv()

# Configuration
api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")

# If an API key is provided and the client library is available, configure
# the Gemini client. Otherwise fall back to a safe offline stub so the
# app can run without the package or API key.
if api_key and genai:
    try:
        genai.configure(api_key=api_key)
        # Initialize Model (at module level for efficiency)
        model = genai.GenerativeModel('gemini-2.5-flash')
    except Exception:
        model = None
else:
    model = None

def get_gemini_analysis(image_file=None, prompt=None):
    """
    Centralized function to get AI analysis.
    Supports Image + Text, Text only, or Image only (with default prompt).
    """
    if not image_file and not prompt:
        raise ValueError("Either an image or a prompt must be provided.")

    contents = []
    
    if prompt:
        contents.append(prompt)
    
    if image_file:
        try:
            img = Image.open(image_file)
            contents.append(img)
        except Exception as e:
            raise ValueError(f"Failed to process image: {str(e)}")

    # If Gemini model is not configured, return a safe placeholder response
    if model is None:
        return (
            "[Gemini API not configured] This is a demo response. "
            "Set GEMINI_API_KEY in your .env to enable real AI analysis."
        )

    try:
        response = model.generate_content(contents)
        return response.text
    except Exception as e:
        raise Exception(f"AI Generation Error: {str(e)}")