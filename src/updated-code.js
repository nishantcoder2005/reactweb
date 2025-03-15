{/* Dashboard mockup */}
<div className="relative mx-auto w-full max-w-md">
  <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800">
    <div className="bg-gray-800 py-2 px-4 flex items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
    {/* Animated Copsgate logo */}
    <div className="w-full bg-black copsgate-logo-container">
      <object
        data="copsgate-logo_1.svg"
        type="image/svg+xml"
        className="copsgate-logo"
      />
      <div className="shimmer-effect" />
    </div>
  </div>
  {/* Floating elements */}
  <div 
    className="absolute -top-8 -right-8 text-black font-bold px-4 py-2 rounded-lg shadow-lg z-30"
    style={{ 
      backgroundColor: '#fbbe01'
    }}
  >
    Real-time notifications
  </div>
  <div 
    className="absolute -bottom-8 -left-8 bg-white text-black font-bold px-4 py-2 rounded-lg shadow-lg flex items-center z-20"
  >
    <CheckCircle size={16} className="mr-2" style={{ color: '#fbbe01' }} />
    Secure check-in
  </div>
</div>