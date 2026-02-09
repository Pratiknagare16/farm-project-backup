# Main entry point of the Flask app
from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import os
import tempfile
from routes.analyze_routes import analyze_bp

app = Flask(__name__)
# Register the routes from your other files
app.register_blueprint(analyze_bp)

# ===== LANGUAGE & I18N ROUTES =====
@app.route('/language-selector')
def language_selector():
    """Serve the language selection page"""
    return render_template('language-selector.html')

@app.route('/')
def index():
    """Serve the landing page"""
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    """Serve the dashboard page"""
    return render_template('dashboard.html')


@app.route('/pest-detection')
def pest_detection():
    """Serve the pest detection page"""
    return render_template('pest-detection.html')

@app.route('/crop-advisory')
def crop_advisory():
    """Serve the crop advisory page"""
    return render_template('crop-advisory.html')

@app.route('/soil-health')
def soil_health():
    """Serve the soil health page"""
    return render_template('soil-health.html')

@app.route('/weather')
def weather():
    """Serve the weather page"""
    return render_template('weather.html')

@app.route('/market-prices')
def market_prices():
    """Serve the market prices page"""
    return render_template('market-prices.html')

@app.route('/voice-assistance')
def voice_assistance():
    """Serve the voice assistance page"""
    return render_template('voice-assistance.html')


@app.route('/upload-audio', methods=['POST'])
def upload_audio():
    """Receive audio file from frontend, save temporarily, and return JSON response.

    Accepts multipart/form-data with field 'audio'. Saves under uploads/voice/ and returns
    a JSON response with success status and advice.
    """
    try:
        if 'audio' not in request.files:
            return jsonify({'success': False, 'message': 'No audio file provided'}), 400

        file = request.files['audio']
        if file.filename == '':
            return jsonify({'success': False, 'message': 'Empty filename'}), 400

        # Ensure uploads/voice exists
        upload_dir = os.path.join(os.path.dirname(__file__), 'uploads', 'voice')
        os.makedirs(upload_dir, exist_ok=True)

        filename = secure_filename(file.filename)
        save_path = os.path.join(upload_dir, filename)
        file.save(save_path)

        # Return a helpful farming response
        # In production, you could integrate speech-to-text and Gemini AI here
        farming_responses = [
            'Based on current weather and soil conditions, I recommend increasing irrigation frequency. Water your crops every 2-3 days during this season.',
            'Your soil might benefit from nitrogen-rich fertilizer. Apply NPK 20-20-20 at recommended doses for your crop type.',
            'To prevent common pests, implement crop rotation and use neem oil spray every 7-10 days as a preventive measure.',
            'For better yields, ensure proper spacing between plants and maintain consistent watering schedules. Mulching helps retain soil moisture.',
            'Consider testing your soil pH and nutrient levels. Most vegetable crops prefer slightly acidic soil (pH 6.0-7.0).',
        ]
        import random
        response_text = random.choice(farming_responses)

        rel_path = os.path.relpath(save_path, start=os.path.dirname(__file__))
        return jsonify({
            'success': True,
            'message': response_text,
            'filename': filename,
            'path': rel_path,
            'status': 'Audio recorded and processed'
        }), 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'success': False, 'message': 'Server error', 'error': str(e)}), 500

@app.route('/faq')
def faq():
    """Serve the FAQ page"""
    return render_template('faq.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')