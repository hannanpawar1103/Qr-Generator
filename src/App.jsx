import { useEffect, useState } from 'react'
function App() {

  const [text , settext] = useState('')
  const [qrImageUrl, setQrImageUrl] = useState('');
  const [isImageVisible, setIsImageVisible] = useState(false);


  function handlechanges(e){
    settext(e.target.value)
  }

  function GenerateQr(){
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    setQrImageUrl(qrCodeUrl);
    setIsImageVisible(true)
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <input
          onChange={handlechanges} 
          value={text}
          type="text"
          placeholder="Type something..."
          className="mb-4 p-2 border rounded"
        />
        <button
          onClick={GenerateQr}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
        Generate QR
        </button>
        <img
          src={qrImageUrl} 
          alt="Hidden"
          className={`w-72 mt-4 transition-opacity duration-1000 ease-in-out 	transition-duration: 1s ${
            isImageVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}

export default App
