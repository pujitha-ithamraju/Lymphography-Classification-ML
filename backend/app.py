from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this line
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

model = joblib.load("lymphography_model.joblib")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print(" Received data:", data)
    
    try:
        input_data = [[
    int(data['lymphatics']),
    int(data['block_of_afferent_lymphatics']),
    int(data['bl_of_lymph_c']),
    int(data['bl_of_lymph_s']),
    int(data['by_pass']),
    int(data['extravasates']),
    int(data['regeneration_of_ly']),
    int(data['early_uptake_in_ly']),
    int(data['lym_nodes_dimin']),
    int(data['lym_nodes_enlar']),
    int(data['changes_in_lym']),
    int(data['defect_in_node']),
    int(data['changes_in_node']),
    int(data['changes_in_stru']),
    int(data['special_forms']),
    int(data['dislocation_of']),
    int(data['exclusion_of_no']),
    int(data['no_of_nodes_in'])
]]
        prediction = model.predict(input_data)
	 
        # Mapping prediction number to a label
        labels = {
            1: "Class 1: Normal: Indicates a healthy lymphatic system,no abnormalities or diseases found in the scanned lymph nodes.",
            2: "Class 2: Inflamed: Can be caused by infections,nodes may appear enlarged or tender but not cancerous.",
            3: "Class 3: Metastasis: Indicates spread of cancer from another part of the body to the lymph nodes,a serious condition.",
            4: "Class 4: Malignant: Refers to cancer that starts in the lymphatic system itself, such as lymphoma,needs immediate attention."
        }

        return jsonify({'prediction': labels[int(prediction[0])]})
        
    except Exception as e:
        print(" ERROR:", str(e))
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)