"use client";

export default function FloatingWA() {
  const phoneNumber = "628123456789"; // GANTI nomor WA kamu
  const message = encodeURIComponent(
    "Halo Ostakarya Jaya, saya ingin konsultasi mengenai interior & construction."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
    >
      💬 WhatsApp
    </a>
  );
}
