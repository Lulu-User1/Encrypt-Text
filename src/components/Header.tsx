import  { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-800 to-amber-950 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ShoppingBag className="mr-2" size={28} />
            <h1 className="text-2xl font-bold">Tool V1</h1>
          </div>
          <div>
            <span className="text-sm hidden md:inline-block">The Ancient Route Encryption</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxzaWxrJTIwcm9hZCUyMGFuY2llbnQlMjB0cmFkZSUyMGNhcmF2YW4lMjBkZXNlcnR8ZW58MHx8fHwxNzQ2NTg2NTQ4fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
          alt="Silk Road desert landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-md">
              Protect Your Messages Along the Route
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Encrypt and decrypt your secrets like ancient merchants on the Silk Road
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
  