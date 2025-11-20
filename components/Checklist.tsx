
import React, { useState, useEffect } from 'react';
import { ChecklistItem } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import ToolIcon from './icons/ToolIcon';
import CloseIcon from './icons/CloseIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';

interface ChecklistProps {
  machineModel: string;
  serialNumber: string;
  items: ChecklistItem[];
  onClose: () => void;
}

const Checklist: React.FC<ChecklistProps> = ({ machineModel, serialNumber, items, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState('');
  const [finalNotes, setFinalNotes] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  
  // Usamos el serialNumber (o model si no hay serial) para crear claves únicas en localStorage
  const storageKey = `checklist_${serialNumber}`;
  const notesKey = `checklist_notes_${serialNumber}`;
  const finalNotesKey = `checklist_final_notes_${serialNumber}`;

  useEffect(() => {
    try {
      // Cargar estado de los checkboxes
      const savedState = localStorage.getItem(storageKey);
      if (savedState) {
        setCheckedItems(JSON.parse(savedState));
      }

      // Cargar notas guardadas
      const savedNotes = localStorage.getItem(notesKey);
      if (savedNotes) {
        setNotes(savedNotes);
      }

      // Cargar notas finales guardadas
      const savedFinalNotes = localStorage.getItem(finalNotesKey);
      if (savedFinalNotes) {
        setFinalNotes(savedFinalNotes);
      }
    } catch (error) {
      console.error("Failed to load checklist state from localStorage:", error);
    }
  }, [storageKey, notesKey, finalNotesKey]);

  const handleCheckboxChange = (id: string) => {
    const newCheckedState = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newCheckedState);
    try {
      localStorage.setItem(storageKey, JSON.stringify(newCheckedState));
    } catch (error) {
      console.error("Failed to save checklist state to localStorage:", error);
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setNotes(text);
    try {
      localStorage.setItem(notesKey, text);
    } catch (error) {
      console.error("Failed to save notes to localStorage:", error);
    }
  };

  const handleFinalNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setFinalNotes(text);
    try {
      localStorage.setItem(finalNotesKey, text);
    } catch (error) {
      console.error("Failed to save final notes to localStorage:", error);
    }
  };

  if (!isOpen) {
    return (
      <div className="max-w-4xl mx-auto my-4 animate-fade-in">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex justify-between items-center p-3 text-left font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>Mostrar Checklist de Revisión: {machineModel}</span>
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 my-4 max-w-4xl mx-auto border border-blue-200 rounded-lg shadow-lg bg-white animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <ToolIcon className="w-6 h-6 text-blue-500" />
          Checklist para {machineModel}
        </h2>
        <div className="flex items-center gap-2">
            <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800"
                title="Minimizar Checklist"
            >
                <ChevronDownIcon className="w-6 h-6 rotate-180" />
            </button>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-red-600"
                title="Cerrar Checklist"
            >
                <CloseIcon className="w-5 h-5" />
            </button>
        </div>
      </div>
      
      {/* Sección de Notas Iniciales */}
      <div className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-200">
        <label htmlFor="notes" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
            <DocumentTextIcon className="w-5 h-5 text-gray-500" />
            Estado Inicial / Observaciones del Cliente
        </label>
        <textarea
            id="notes"
            value={notes}
            onChange={handleNotesChange}
            placeholder="Describe aquí el estado físico de la máquina antes de empezar (ej: arañazos laterales, fuga visible, el cliente reporta ruido metálico...)"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400 min-h-[80px]"
        />
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Usa esta lista para una revisión técnica paso a paso. Tu progreso se guarda automáticamente.
      </p>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.id}>
            <label className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={!!checkedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className={`ml-3 text-gray-800 select-none ${checkedItems[item.id] ? 'line-through text-gray-400' : ''}`}>
                {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {/* Sección de Notas de Progreso/Finales */}
      <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-200">
        <label htmlFor="finalNotes" className="flex items-center gap-2 text-sm font-bold text-blue-800 mb-2">
            <DocumentTextIcon className="w-5 h-5 text-blue-600" />
            Notas de Progreso / Resolución
        </label>
        <textarea
            id="finalNotes"
            value={finalNotes}
            onChange={handleFinalNotesChange}
            placeholder="Registra aquí el progreso, las piezas cambiadas o el resultado final de la reparación..."
            className="w-full p-3 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 placeholder-blue-300 min-h-[80px]"
        />
      </div>
    </div>
  );
};

export default Checklist;
