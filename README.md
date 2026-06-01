# Lymphography Classification using Machine Learning

A Machine Learning-based web application that classifies lymphography data and predicts the corresponding class through an interactive web interface. The project integrates a Flask backend with a React frontend to provide real-time predictions.

## Features

* Machine Learning-based classification
* User-friendly web interface
* Real-time prediction results
* Flask REST API backend
* React frontend
* Fast and responsive workflow

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Backend

* Python
* Flask

### Machine Learning

* Scikit-learn
* Pandas
* NumPy
* Joblib

## Project Structure

```text
Lymphography-Classification-ML
│
├── backend
│   ├── app.py
│   ├── lymphography_basic.py
│   ├── lymphography_model.joblib
│   └── requirements.txt
│
└── frontend
    ├── src
    ├── package.json
    ├── vite.config.ts
    └── ...
```

## How It Works

1. The user enters lymphography attributes through the web interface.
2. The frontend sends the data to the Flask backend.
3. The trained Machine Learning model processes the input.
4. The model generates a prediction.
5. The result is displayed to the user.

## Installation

### Clone the Repository

```bash
git clone https://github.com/pujitha-ithamraju/Lymphography-Classification-ML.git
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements

* Improve model accuracy
* Add more medical datasets
* Deploy the application to the cloud
* Add authentication and user management
* Create a prediction analytics dashboard

## Project Goal

This project was developed to demonstrate the practical application of Machine Learning in healthcare-related classification problems while gaining experience in full-stack AI application development.
