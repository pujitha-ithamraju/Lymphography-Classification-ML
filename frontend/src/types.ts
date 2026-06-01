export interface LymphographyData {
  lymphatics: string;
  blockOfAfferent: string;
  blockOfLymphC: string;
  blockOfLymphS: string;
  byPass: string;
  extravasates: string;
  regenerationOf: string;
  earlyUptake: string;
  lymphNodes: string;
  lymphNodesEnlarge: string;
  changesInStructure: string;
  defectInNode: string;
  changesInNodeN: string;
  specialForms: string;
  dislocationOf: string;
  exclusionOfNodeN: string;
  noOfNodesIn: string;
}

export interface ClassificationResult {
  class: string;
  confidence: number;
  explanation: string;
}