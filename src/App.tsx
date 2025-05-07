import  { useState } from 'react';
import { Shield, RefreshCw, Lock, Unlock } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

type Algorithm = 'AES' | 'DES' | 'TripleDES' | 'Rabbit' | 'RC4';

function App() {
  const [isEncrypting, setIsEncrypting] = useState(true);
  const [secretKey, setSecretKey] = useState('');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [algorithm, setAlgorithm] = useState<Algorithm>('AES');

  const handleProcess = () => {
    // This is a dummy implementation
    // In a real app, we would use an actual encryption library
    if (secretKey && inputText) {
      setOutputText(
        isEncrypting 
          ? `Encrypted: ${inputText} (using ${algorithm} with key: ${secretKey})` 
          : `Decrypted: ${inputText} (using ${algorithm} with key: ${secretKey})`
      );
    }
  };

  const handleClear = () => {
    setSecretKey('');
    setInputText('');
    setOutputText('');
  };

  const toggleMode = () => {
    setIsEncrypting(!isEncrypting);
    setOutputText('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="card rounded-lg shadow-lg p-6 md:p-8 w-full max-w-3xl">
          <div className="flex items-center mb-6">
            <Shield className="text-amber-700 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-amber-900">
              Text {isEncrypting ? 'Encryption' : 'Decryption'} Tool
            </h2>
            <button 
              onClick={toggleMode}
              className="ml-auto flex items-center text-amber-700 hover:text-amber-900"
            >
              {isEncrypting ? <Unlock size={18} /> : <Lock size={18} />}
              <span className="ml-1">Switch to {isEncrypting ? 'Decrypt' : 'Encrypt'}</span>
            </button>
          </div>
          
          <p className="text-amber-800 mb-6">
            {isEncrypting 
              ? 'Convert your plain text into encrypted format' 
              : 'Decode your encrypted text back to plain text'}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-amber-800 font-medium mb-2">Secret Key</label>
              <input
                type="text"
                className="w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your secret key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-amber-800 font-medium mb-2">Encryption Algorithm</label>
              <select 
                className="w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
              >
                <option value="AES">AES (Advanced Encryption Standard)</option>
                <option value="DES">DES (Data Encryption Standard)</option>
                <option value="TripleDES">Triple DES</option>
                <option value="Rabbit">Rabbit</option>
                <option value="RC4">RC4</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-amber-800 font-medium mb-2">
              Text to {isEncrypting ? 'Encrypt' : 'Decrypt'}
            </label>
            <textarea
              className="w-full p-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[150px] resize-y"
              placeholder={`Enter the text you want to ${isEncrypting ? 'encrypt' : 'decrypt'}`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={handleProcess}
              className="flex-grow bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center"
              disabled={!secretKey || !inputText}
            >
              {isEncrypting ? <Lock size={18} className="mr-2" /> : <Unlock size={18} className="mr-2" />}
              {isEncrypting ? 'Encrypt Text' : 'Decrypt Text'}
            </button>
            
            <button 
              onClick={handleClear}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg flex items-center justify-center"
            >
              <RefreshCw size={18} className="mr-2" />
              Clear
            </button>
          </div>
          
          <div>
            <label className="block text-amber-800 font-medium mb-2">
              {isEncrypting ? 'Encrypted Output' : 'Decrypted Output'}
            </label>
            <div className="w-full p-4 min-h-[150px] bg-amber-50 border border-amber-200 rounded-lg overflow-auto">
              {outputText || (
                <span className="text-amber-400 italic">
                  Your {isEncrypting ? 'encrypted' : 'decrypted'} text will appear here
                </span>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
  