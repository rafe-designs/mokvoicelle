'use client';

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '2349038732877'; // Replace with your WhatsApp number
  const defaultMessage = encodeURIComponent(
    'Hello MOK Voicelle team, I would like to inquire about starting a web project / media package.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-[11px] font-semibold text-slate-200 bg-[#10172D] border border-slate-800 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing Aura */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127zm10.513-5.385c-.299-.149-1.767-.872-2.041-.971-.274-.1-.474-.149-.673.149-.199.299-.773.971-.948 1.17-.174.199-.349.224-.648.075-1.429-.714-2.671-1.436-3.738-3.273-.284-.489.284-.454.81-1.505.099-.199.05-.373-.025-.522-.075-.149-.673-1.623-.922-2.217-.242-.579-.487-.501-.672-.51-.174-.009-.373-.01-.572-.01-.199 0-.523.075-.797.373-.274.299-1.047 1.022-1.047 2.49 0 1.468 1.072 2.887 1.221 3.086.149.199 2.11 3.222 5.111 4.516 2.14.923 2.97.975 4.032.819.648-.095 1.767-.723 2.016-1.422.249-.698.249-1.295.174-1.422-.074-.127-.274-.224-.573-.373z" />
        </svg>
      </a>
    </div>
  );
}