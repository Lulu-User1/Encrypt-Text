import  { ShoppingBag, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <ShoppingBag className="mr-2" size={20} />
            <span className="font-semibold">Tool V1</span>
          </div>
          
          <div className="text-sm text-amber-200">
            <p>Like merchants of old, your secrets travel safely. Your data never leaves your browser.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <a href="#" className="text-amber-200 hover:text-white flex items-center">
              <Github size={18} className="mr-1" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  