import React, { useState } from 'react';
import { Heart, Calendar, Camera, MessageCircle, Sparkles, Clock, MapPin, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LoveMemory {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  location?: string;
}

interface LoveMessage {
  id: number;
  message: string;
  author: string;
  date: string;
}

interface GalleryImage {
  id: number;
  url: string;
  isVertical: boolean;
  title?: string;
  description?: string;
}

function App() {
  const [selectedMemory, setSelectedMemory] = useState<LoveMemory | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const startDate = new Date('2025-06-16'); // Fecha de inicio de la relación
  const today = new Date();
  const daysTogether = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

  const memories: LoveMemory[] = [
    {
      id: 1,
      date: '16 Jul 2025',
      title: 'El día en que pololeamos',
      description: 'Estaba tan nervioso cuando caminaba contigo a la orilla de la playa, pensando en que decirte, pero al final fue todo mágico y hermoso.',
      image: '/img/IMG_8857.jpg',
      location: 'Playa El Sol, Viña del Mar'
    },
    {
      id: 2,
      date: '17 Jul 2025',
      title: 'Disfrutando del panorama',
      description: 'Ese día fuimos al pueblito y luego a esa placita, fue muy divertido y lindo.',
      image: '/public/img/IMG_8862.jpg',
      location: 'Cerca de mi casa'
    },
    {
      id: 3,
      date: '31 Jul 2025',
      title: 'Mi apoyo perfecto',
      description: 'El día que defendí mi proyecto de título y fuiste el mejor apoyo que pude tener.',
      image: 'public/img/84dcf20d-0dde-4ea6-ac3f-7a52d8a158be.JPG',
      location: 'Universidad Diego Portales FIC'
    },
    {
      id: 4,
      date: '07 Ago 2025',
      title: 'Nuestra Primera ida al Templo',
      description: 'Uno de mis lugares favoritos a donde ir contigo es al Templo.',
      image: 'public/img/IMG_8991.jpg',
      location: 'Templo del Señor, Santiago'
    },
    {
      id: 5,
      date: '08 Ago 2025',
      title: 'La mejor atención dental',
      description: 'Esta ha sido la mejor atención dental que he tenido. Es que la doctora era demasiado hermosa.',
      image: 'public/img/IMG_9006.jpg',
      location: 'Clinica Salud Nacional'
    },
    {
      id: 6,
      date: '16 Ago 2025',
      title: 'Nuestro primer mes juntos',
      description: 'Primer mes de toda una eternidad juntos, y no podría estar más feliz.',
      image: 'public/img/63a2710f-ab83-4fe2-8e60-3059f6260a77.JPG',
      location: 'Mall Vespucio'
    },
    {
      id: 7,
      date: '23 Ago 2025',
      title: 'Los huasos más lindos del sector',
      description: 'Contigo me di cuenta lo realmente linda que se puede ver una huasita. Eres demasiado hermosa jajajaja.',
      image: 'public/img/IMG_1540.jpg',
      location: 'Capilla Barrio Colonial'
    }
  ];

  const loveMessages: LoveMessage[] = [
    {
      id: 1,
      message: "Cada día a tu lado es una nueva página en nuestra historia de amor. Eres mi hogar, mi aventura y mi paz.",
      author: "Para mi amor",
      date: "14 Feb 2024"
    },
    {
      id: 2,
      message: "En tus ojos encontré mi universo, en tu sonrisa mi felicidad, y en tu corazón mi hogar para siempre.",
      author: "Con todo mi amor",
      date: "20 Mar 2024"
    },
    {
      id: 3,
      message: "Antes de ti, yo era una historia a medias. Contigo, soy una novela completa llena de amor y aventuras.",
      author: "Tu alma gemela",
      date: "15 Jun 2024"
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: 'public/img/IMG_8857.jpg',
      isVertical: false,
      title: 'Pololeo en la playa',
      description: 'Me gustas mucho'
    },
    {
      id: 2,
      url: 'public/img/IMG_8839.jpg',
      isVertical: false,
      title: 'Felices en la playa',
      description: 'Esta es como una foto de papás cuando eran jóvenes jaja'
    },
    {
      id: 3,
      url: 'public/img/522b40bb-ac8a-4648-9cc4-e016ba0cf218.JPG',
      isVertical: false,
      title: 'Mi defensa de título',
      description: 'Gracias por estar presente en mis cositas. Te amo.'
    },
    {
      id: 4,
      url: 'public/img/IMG_8921.jpg',
      isVertical: false,
      title: 'Ensayo Cueca',
      description: 'Por ti aprendería a hacer lo que sea'
    },
    {
      id: 5,
      url: 'public/img/IMG_8951.jpg',
      isVertical: false,
      title: 'Lindo día en el mall',
      description: 'Ese día nos reimos mucho jajajaja'
    },
    {
      id: 6,
      url: 'public/img/IMG_8973.jpg',
      isVertical: true,
      title: 'Día de gym',
      description: 'Ese día casi muero jajajaja, pero me encanta hacer cosas contigo'
    },
    {
      id: 7,
      url: 'public/img/IMG_8984.jpg',
      isVertical: false,
      title: 'Hermoso día en el templo',
      description: 'Contigo es aun más especial'
    },
    {
      id: 8,
      url: 'public/img/IMG_8990.jpg',
      isVertical: true,
      title: 'Eres simplemente perfecta',
      description: 'hasta las flores más lindas se ven opacadas cuando estás tú cerca'
    },
    {
      id: 9,
      url: 'public/img/IMG_8991.jpg',
      isVertical: true,
      title: 'En el frente del templo',
      description: 'Un gran día para recordar'
    },
    {
      id: 10,
      url: 'public/img/IMG_8995.jpg',
      isVertical: true,
      title: 'Foto en el espejo del metro',
      description: 'Volvíamos del templo, estabas tan linda'
    }
  ];

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-rose-200/30 to-orange-200/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        ></div>
        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3 text-rose-500">
              <Heart className="w-8 h-8 animate-pulse" fill="currentColor" />
              <Sparkles className="w-6 h-6 animate-bounce" />
              <Heart className="w-8 h-8 animate-pulse" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4 animate-fade-in">
            Nuestra Historia
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-light mb-8">
            Un amor que trasciende el tiempo
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-700">
            <Clock className="w-5 h-5" />
            <span className="text-lg font-medium">{daysTogether} días juntos</span>
          </div>
        </div>
      </header>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Nuestra Línea del Tiempo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada momento contigo ha sido un regalo. Aquí están los capítulos más especiales de nuestra historia.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-rose-300 to-orange-300 rounded-full"></div>

            {memories.map((memory, index) => (
              <div 
                key={memory.id} 
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="w-full h-full bg-rose-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Memory Card */}
                <div 
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
                  onClick={() => setSelectedMemory(memory)}
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-rose-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{memory.date}</span>
                      </div>
                      <h3 className="text-xl font-serif text-gray-800 mb-2">{memory.title}</h3>
                      <p className="text-gray-600 mb-3">{memory.description}</p>
                      {memory.location && (
                        <div className="flex items-center space-x-1 text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{memory.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Messages Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-100/50 to-rose-100/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Mensajes de Amor
            </h2>
            <p className="text-xl text-gray-600">
              Palabras del corazón que capturan la esencia de nuestro amor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loveMessages.map((message) => (
              <div 
                key={message.id} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-rose-400" />
                </div>
                <blockquote className="text-gray-700 text-lg font-light italic mb-6 leading-relaxed">
                  "{message.message}"
                </blockquote>
                <div className="text-center">
                  <p className="text-rose-500 font-medium mb-1">{message.author}</p>
                  <p className="text-gray-500 text-sm">{message.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Galería de Momentos
            </h2>
            <p className="text-xl text-gray-600">
              Cada foto cuenta una historia, cada sonrisa guarda un secreto
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                onClick={() => openImageModal(index)}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                  image.isVertical ? 'row-span-2' : ''
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full min-h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm font-medium">{image.title}</span>
                  </div>
                  {image.description && (
                    <p className="text-xs mt-1 opacity-90">{image.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-100/50 to-pink-100/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Heart className="w-12 h-12 text-rose-400 mx-auto mb-4" fill="currentColor" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{daysTogether}</h3>
              <p className="text-gray-600">Días Juntos</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Camera className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{memories.length}</h3>
              <p className="text-gray-600">Momentos Especiales</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <MessageCircle className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{loveMessages.length}</h3>
              <p className="text-gray-600">Mensajes de Amor</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Star className="w-12 h-12 text-rose-400 mx-auto mb-4" fill="currentColor" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">∞</h3>
              <p className="text-gray-600">Amor Infinito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-8 h-8 text-rose-400 animate-pulse" fill="currentColor" />
          </div>
          <h3 className="text-2xl font-serif text-white mb-4">
            "El amor verdadero no tiene final"
          </h3>
          <p className="text-gray-300">
            Creado con amor para celebrar nuestro amor • {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Modal for Memory Details */}
      {selectedMemory && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedMemory(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedMemory.image} 
                alt={selectedMemory.title}
                className="w-full h-80 object-cover"
              />
              <button 
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-2 text-rose-500 mb-4">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{selectedMemory.date}</span>
              </div>
              <h3 className="text-3xl font-serif text-gray-800 mb-4">{selectedMemory.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{selectedMemory.description}</p>
              {selectedMemory.location && (
                <div className="flex items-center space-x-2 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedMemory.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={closeImageModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedImageIndex].url.replace('w=400', 'w=1200')} 
                alt={galleryImages[selectedImageIndex].title}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-serif mb-2">
                  {galleryImages[selectedImageIndex].title}
                </h3>
                {galleryImages[selectedImageIndex].description && (
                  <p className="text-white/90 text-sm">
                    {galleryImages[selectedImageIndex].description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">
                      {selectedImageIndex + 1} de {galleryImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;