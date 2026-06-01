import React, { useState } from 'react';
import { LymphographyData } from '../types';

interface LymphographyFormProps {
  onSubmit: (data: LymphographyData) => void;
}

const LymphographyForm: React.FC<LymphographyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LymphographyData>({
    lymphatics: 'normal',
    blockOfAfferent: 'no',
    blockOfLymphC: 'no',
    blockOfLymphS: 'no',
    byPass: 'no',
    extravasates: 'no',
    regenerationOf: 'no',
    earlyUptake: 'no',
    lymphNodes: 'normal',
    lymphNodesEnlarge: 'not enlarged',
    changesInStructure: 'no',
    defectInNode: 'no',
    changesInNodeN: 'no',
    specialForms: 'no',
    dislocationOf: 'no',
    exclusionOfNodeN: 'no',
    noOfNodesIn: 'few'
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lymphatics" className="block text-sm font-medium text-gray-700">
            Lymphatics
          </label>
          <select
            id="lymphatics"
            name="lymphatics"
            value={formData.lymphatics}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="normal">Normal</option>
            <option value="arched">Arched</option>
            <option value="deformed">Deformed</option>
            <option value="displaced">Displaced</option>
          </select>
        </div>

        <div>
          <label htmlFor="blockOfAfferent" className="block text-sm font-medium text-gray-700">
            Block of Afferent
          </label>
          <select
            id="blockOfAfferent"
            name="blockOfAfferent"
            value={formData.blockOfAfferent}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="blockOfLymphC" className="block text-sm font-medium text-gray-700">
            Block of Lymph C
          </label>
          <select
            id="blockOfLymphC"
            name="blockOfLymphC"
            value={formData.blockOfLymphC}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="blockOfLymphS" className="block text-sm font-medium text-gray-700">
            Block of Lymph S
          </label>
          <select
            id="blockOfLymphS"
            name="blockOfLymphS"
            value={formData.blockOfLymphS}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="byPass" className="block text-sm font-medium text-gray-700">
            By Pass
          </label>
          <select
            id="byPass"
            name="byPass"
            value={formData.byPass}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="extravasates" className="block text-sm font-medium text-gray-700">
            Extravasates
          </label>
          <select
            id="extravasates"
            name="extravasates"
            value={formData.extravasates}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="regenerationOf" className="block text-sm font-medium text-gray-700">
            Regeneration Of
          </label>
          <select
            id="regenerationOf"
            name="regenerationOf"
            value={formData.regenerationOf}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="earlyUptake" className="block text-sm font-medium text-gray-700">
            Early Uptake
          </label>
          <select
            id="earlyUptake"
            name="earlyUptake"
            value={formData.earlyUptake}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="lymphNodes" className="block text-sm font-medium text-gray-700">
            Lymph Nodes
          </label>
          <select
            id="lymphNodes"
            name="lymphNodes"
            value={formData.lymphNodes}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="normal">Normal</option>
            <option value="bean">Bean</option>
            <option value="oval">Oval</option>
            <option value="round">Round</option>
          </select>
        </div>

        <div>
          <label htmlFor="lymphNodesEnlarge" className="block text-sm font-medium text-gray-700">
            Lymph Nodes Enlarge
          </label>
          <select
            id="lymphNodesEnlarge"
            name="lymphNodesEnlarge"
            value={formData.lymphNodesEnlarge}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="not enlarged">Not Enlarged</option>
            <option value="enlarged">Enlarged</option>
          </select>
        </div>

        <div>
          <label htmlFor="changesInStructure" className="block text-sm font-medium text-gray-700">
            Changes In Structure
          </label>
          <select
            id="changesInStructure"
            name="changesInStructure"
            value={formData.changesInStructure}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="grainy">Grainy</option>
            <option value="drop-like">Drop-like</option>
            <option value="coarse">Coarse</option>
            <option value="diluted">Diluted</option>
            <option value="reticular">Reticular</option>
            <option value="stripped">Stripped</option>
            <option value="faint">Faint</option>
          </select>
        </div>

        <div>
          <label htmlFor="defectInNode" className="block text-sm font-medium text-gray-700">
            Defect In Node
          </label>
          <select
            id="defectInNode"
            name="defectInNode"
            value={formData.defectInNode}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="lacunar">Lacunar</option>
            <option value="lacunar marginal">Lacunar Marginal</option>
            <option value="lacunar central">Lacunar Central</option>
          </select>
        </div>

        <div>
          <label htmlFor="changesInNodeN" className="block text-sm font-medium text-gray-700">
            Changes In Node N
          </label>
          <select
            id="changesInNodeN"
            name="changesInNodeN"
            value={formData.changesInNodeN}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="lacunar">Lacunar</option>
            <option value="lacunar marginal">Lacunar Marginal</option>
            <option value="lacunar central">Lacunar Central</option>
          </select>
        </div>

        <div>
          <label htmlFor="specialForms" className="block text-sm font-medium text-gray-700">
            Special Forms
          </label>
          <select
            id="specialForms"
            name="specialForms"
            value={formData.specialForms}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="chalices">Chalices</option>
            <option value="vesicles">Vesicles</option>
          </select>
        </div>

        <div>
          <label htmlFor="dislocationOf" className="block text-sm font-medium text-gray-700">
            Dislocation Of
          </label>
          <select
            id="dislocationOf"
            name="dislocationOf"
            value={formData.dislocationOf}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="exclusionOfNodeN" className="block text-sm font-medium text-gray-700">
            Exclusion Of Node N
          </label>
          <select
            id="exclusionOfNodeN"
            name="exclusionOfNodeN"
            value={formData.exclusionOfNodeN}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="noOfNodesIn" className="block text-sm font-medium text-gray-700">
            Number Of Nodes In
          </label>
          <select
            id="noOfNodesIn"
            name="noOfNodesIn"
            value={formData.noOfNodesIn}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="few">Few (0-9)</option>
            <option value="moderate">Moderate (10-19)</option>
            <option value="many">Many (20+)</option>
          </select>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setFormData({
              lymphatics: 'normal',
              blockOfAfferent: 'no',
              blockOfLymphC: 'no',
              blockOfLymphS: 'no',
              byPass: 'no',
              extravasates: 'no',
              regenerationOf: 'no',
              earlyUptake: 'no',
              lymphNodes: 'normal',
              lymphNodesEnlarge: 'not enlarged',
              changesInStructure: 'no',
              defectInNode: 'no',
              changesInNodeN: 'no',
              specialForms: 'no',
              dislocationOf: 'no',
              exclusionOfNodeN: 'no',
              noOfNodesIn: 'few'
            })}
            className="mr-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Classify
          </button>
        </div>
      </div>
    </form>
  );
};

export default LymphographyForm;