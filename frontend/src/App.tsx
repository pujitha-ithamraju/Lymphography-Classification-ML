import React, { useState } from 'react';
import logo from './logo.png'; // Importing image from src folder

function App() {
  const [formData, setFormData] = useState({
    lymphatics: 2,
    block_of_afferent_lymphatics: 2,
    bl_of_lymph_c: 2,
    bl_of_lymph_s: 2,
    by_pass: 2,
    extravasates: 2,
    regeneration_of_ly: 2,
    early_uptake_in_ly: 2,
    lym_nodes_dimin: 2,
    lym_nodes_enlar: 2,
    changes_in_lym: 1,
    defect_in_node: 1,
    changes_in_node: 1,
    changes_in_stru: 1,
    special_forms: 1,
    dislocation_of: 1,
    exclusion_of_no: 1,
    no_of_nodes_in: 2,
  });

  const [result, setResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handlePredict = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.prediction || data.error || 'Unknown error');
    } catch (error) {
      console.error('Error:', error);
      setResult('Something went wrong');
    }
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h3>{title}</h3>
      {children}
    </div>
  );

  const renderDropdown = (label: string, name: string, options: number[]) => (
    <div style={{ marginBottom: '0.75rem' }}>
      <label><strong>{label}</strong>:</label><br />
      <select name={name} value={formData[name as keyof typeof formData]} onChange={handleChange}>
        {options.map((val) => (
          <option key={val} value={val}>{val}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>

      {/*  Image loaded successfully */}
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  }}
>
  <img
    src={logo}
    alt="Lymphography Logo"
    style={{
      width: '90px',
      height: '90px',
    }}
  />
  <h1
    style={{
      fontSize: '3rem',
      color: '#1e90ff',
      fontWeight: 'bold',
      margin: 0,
      textShadow: '1px 1px 2px #ccc',
    }}
  >
     Lymphography Classification Form
  </h1>
</div>

      <Section title="Lymph System">
        {renderDropdown("Lymphatics", "lymphatics", [1, 2, 3])}
        {renderDropdown("Block of Afferent Lymphatics", "block_of_afferent_lymphatic", [1, 2])}
        {renderDropdown("Bl of Lymph C", "bl_of_lymph_c", [1, 2])}
        {renderDropdown("Bl of Lymph S", "bl_of_lymph_s", [1, 2])}
        {renderDropdown("Bypass", "by_pass", [1, 2])}
        {renderDropdown("Extravasates", "extravasates", [1, 2])}
        {renderDropdown("Regeneration of LY", "regeneration_of_ly", [1, 2])}
        {renderDropdown("Early Uptake in LY", "early_uptake_in_ly", [1, 2])}
      </Section>

      <Section title="Node Status">
        {renderDropdown("Lymph Nodes Diminished", "lym_nodes_dimin", [1, 2])}
        {renderDropdown("Lymph Nodes Enlarged", "lym_nodes_enlar", [1, 2])}
        {renderDropdown("Changes in Lymph", "changes_in_lym", [1, 2])}
        {renderDropdown("Defect in Node", "defect_in_node", [1, 2])}
        {renderDropdown("Changes in Node", "changes_in_node", [1, 2])}
      </Section>

      <Section title="Structure & Diagnosis">
        {renderDropdown("Changes in Structure", "changes_in_stru", [1, 2])}
        {renderDropdown("Special Forms", "special_forms", [1, 2])}
        {renderDropdown("Dislocation Of", "dislocation_of", [1, 2])}
        {renderDropdown("Exclusion of Node", "exclusion_of_no", [1, 2])}
        {renderDropdown("No of Nodes Involved", "no_of_nodes_in", [1, 2, 3, 4])}
      </Section>

      <button
        onClick={handlePredict}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#1e90ff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Predict
      </button>

      <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        <strong>Result:</strong> {result}
      </p>
    </div>
  );
}

export default App;
