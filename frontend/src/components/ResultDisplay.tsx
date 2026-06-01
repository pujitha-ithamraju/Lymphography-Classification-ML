import React from 'react';
import { CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import { ClassificationResult } from '../types';

interface ResultDisplayProps {
  result: ClassificationResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const getStatusColor = () => {
    switch (result.class) {
      case 'normal finding':
        return 'text-green-500';
      case 'metastases':
        return 'text-red-500';
      case 'malignant lymphoma':
        return 'text-red-500';
      case 'fibrosis':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = () => {
    switch (result.class) {
      case 'normal finding':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'metastases':
      case 'malignant lymphoma':
        return <AlertCircle className="h-8 w-8 text-red-500" />;
      case 'fibrosis':
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getConfidenceBar = () => {
    const confidencePercent = result.confidence * 100;
    let bgColor = 'bg-gray-300';
    
    if (confidencePercent >= 90) {
      bgColor = 'bg-green-500';
    } else if (confidencePercent >= 70) {
      bgColor = 'bg-blue-500';
    } else if (confidencePercent >= 50) {
      bgColor = 'bg-yellow-500';
    } else {
      bgColor = 'bg-red-500';
    }

    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className={`h-2.5 rounded-full ${bgColor}`} 
          style={{ width: `${confidencePercent}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        {getStatusIcon()}
        <div>
          <h3 className={`text-lg font-medium ${getStatusColor()}`}>
            {result.class.charAt(0).toUpperCase() + result.class.slice(1)}
          </h3>
          <p className="text-sm text-gray-500">
            Confidence: {(result.confidence * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      {getConfidenceBar()}

      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Explanation</h4>
        <p className="text-sm text-gray-600">{result.explanation}</p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500 italic">
          Note: This classification is based on a simplified decision tree model and is for educational purposes only.
          Always consult with healthcare professionals for proper medical diagnosis.
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;