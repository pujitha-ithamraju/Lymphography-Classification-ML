import { LymphographyData, ClassificationResult } from '../types';

// This is a simplified decision tree classifier for lymphography data
// In a real application, this would be a more sophisticated model
export function classifyLymphography(data: LymphographyData): ClassificationResult {
  // Decision tree based on key features
  
  // Rule 1: Normal finding
  if (data.lymphatics === 'normal' && 
      data.lymphNodes === 'normal' && 
      data.changesInStructure === 'no' && 
      data.defectInNode === 'no') {
    return {
      class: 'normal finding',
      confidence: 0.95,
      explanation: 'The lymphography shows normal lymphatics, normal lymph nodes, no changes in structure, and no defects in nodes, which strongly indicates a normal finding.'
    };
  }
  
  // Rule 2: Metastases - Strong indicators
  if (data.defectInNode === 'lacunar' || 
      data.changesInNodeN === 'lacunar' || 
      data.lymphNodesEnlarge === 'enlarged') {
    
    let confidence = 0.75;
    
    // Increase confidence based on additional factors
    if (data.lymphatics === 'deformed' || data.lymphatics === 'displaced') {
      confidence += 0.1;
    }
    
    if (data.blockOfAfferent === 'yes' || data.blockOfLymphC === 'yes') {
      confidence += 0.05;
    }
    
    if (data.changesInStructure !== 'no') {
      confidence += 0.05;
    }
    
    return {
      class: 'metastases',
      confidence: Math.min(confidence, 0.95),
      explanation: 'The presence of lacunar defects in nodes, lacunar changes in node N, and/or enlarged lymph nodes are strong indicators of metastases. Additional factors like deformed lymphatics and structural changes further support this classification.'
    };
  }
  
  // Rule 3: Malignant lymphoma
  if (data.lymphNodes === 'oval' || 
      data.lymphNodes === 'round') {
    
    let confidence = 0.7;
    
    if (data.changesInStructure === 'coarse' || 
        data.changesInStructure === 'diluted' || 
        data.changesInStructure === 'reticular') {
      confidence += 0.15;
    }
    
    if (data.earlyUptake === 'yes') {
      confidence += 0.1;
    }
    
    return {
      class: 'malignant lymphoma',
      confidence: Math.min(confidence, 0.95),
      explanation: 'Oval or round lymph nodes are characteristic of malignant lymphoma. The presence of coarse, diluted, or reticular changes in structure, along with early uptake, further supports this classification.'
    };
  }
  
  // Rule 4: Fibrosis
  if (data.lymphatics === 'arched' || 
      data.regenerationOf === 'yes' || 
      data.changesInStructure === 'stripped' || 
      data.changesInStructure === 'faint') {
    
    return {
      class: 'fibrosis',
      confidence: 0.8,
      explanation: 'Arched lymphatics, regeneration, and stripped or faint changes in structure are indicative of fibrosis, which is a benign condition characterized by scarring of the lymphatic tissue.'
    };
  }
  
  // Default case - if no clear pattern is found
  // Determine most likely class based on a weighted approach
  let scores = {
    'normal finding': 0,
    'metastases': 0,
    'malignant lymphoma': 0,
    'fibrosis': 0
  };
  
  // Add weights based on various features
  if (data.lymphatics === 'normal') scores['normal finding'] += 2;
  if (data.lymphatics === 'arched') scores['fibrosis'] += 2;
  if (data.lymphatics === 'deformed' || data.lymphatics === 'displaced') scores['metastases'] += 2;
  
  if (data.blockOfAfferent === 'yes' || data.blockOfLymphC === 'yes') {
    scores['metastases'] += 1;
    scores['malignant lymphoma'] += 0.5;
  }
  
  if (data.byPass === 'yes') scores['fibrosis'] += 1;
  
  if (data.extravasates === 'yes') {
    scores['metastases'] += 1;
    scores['malignant lymphoma'] += 1;
  }
  
  if (data.regenerationOf === 'yes') scores['fibrosis'] += 2;
  
  if (data.earlyUptake === 'yes') scores['malignant lymphoma'] += 2;
  
  if (data.lymphNodes === 'normal') scores['normal finding'] += 2;
  if (data.lymphNodes === 'bean') scores['fibrosis'] += 1;
  if (data.lymphNodes === 'oval' || data.lymphNodes === 'round') scores['malignant lymphoma'] += 2;
  
  if (data.lymphNodesEnlarge === 'enlarged') {
    scores['metastases'] += 1;
    scores['malignant lymphoma'] += 1;
  }
  
  // Find the class with the highest score
  let maxClass = 'normal finding';
  let maxScore = scores['normal finding'];
  
  for (const [className, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxClass = className;
      maxScore = score;
    }
  }
  
  // Calculate confidence based on how dominant the max score is
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const confidence = totalScore > 0 ? maxScore / totalScore : 0.5;
  
  return {
    class: maxClass,
    confidence: Math.min(0.7, confidence), // Cap confidence at 0.7 for the default case
    explanation: `Based on a combination of features, this appears to be ${maxClass}. However, the pattern is not as clear as in typical cases, so this classification has moderate confidence.`
  };
}