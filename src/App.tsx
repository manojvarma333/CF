import React, { useState, useEffect } from 'react';
import { Heart, Camera, Clock, Sparkles, ArrowRight, X } from 'lucide-react';

const compliments = [
  "You are the most beautiful person inside and out.",
  "Even on my worst day, thinking of you makes me smile.",
  "I love you not just for who you are, but for how you make me feel.",
  "Thank you for being my safe place.",
  "Your laugh is my favorite sound in the world.",
  "You make ordinary moments feel extraordinary.",
  "I fall in love with you more every single day.",
  "You are my greatest adventure and my comfort zone.",
  "Your kindness inspires me to be a better person.",
  "You are the answer to prayers I didn't know I was praying.",
];

const memories = [
  {
    id: 1,
    image: "/images/memory1.jpg",
    caption: "Our first coffee date - I was so nervous!",
    date: "March 15, 2023"
  },
  {
    id: 2,
    image: "/images/momory2.jpg",
    caption: "That beautiful sunset we watched together",
    date: "June 22, 2023"
  },
  {
    id: 3,
    image: "/images/momory3.jpg",
    caption: "Our weekend getaway - pure happiness",
    date: "August 10, 2023"
  }
];

const timelineEvents = [
  {
   
    title: "The Day We Met",
    description: "FIRST TIME WHEN I SAW YOU I DECIDED THAT YOU ARE MY DESTINY .",
    icon: Heart
  },
  {
   
    title: "First 'I Love You'",
    description: "The words just slipped out, but they felt so right. ",
    icon: Heart
  },
  {
    
    title: "Our First Date",
    description: "THE DAY I REMEMBER AS A SPECIAL DAY IN MY LIFE .",
    icon: Sparkles
  },
  {
    
    title: "Our First Kiss",
    description: "ITS STILL IN MY MIND .",
    icon: Sparkles
  },
  {
    title: "A MAJOR GAP",
    description: "ALL MY MISTAKES LED TO A 1 YEAR GAP. FIRST OF ALL SORRY FOR WHAT I DID. I STRONGLY BELIEVE THAT WE WILL SET BACK AGAIN TO NORMAL LIFE AND LET US CONTINUE OUR JOURNEY TOGETHER FOR THE REST OF OUR LIFE",
    icon: Sparkles
  },
   

  
];

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showCompliment, setShowCompliment] = useState(false);
  const [currentCompliment, setCurrentCompliment] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const generateCompliment = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCurrentCompliment(randomCompliment);
    setShowCompliment(true);
    setTimeout(() => setShowCompliment(false), 4000);
  };

  const scrollToSection = (section) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'letter', label: 'Love Letter' },
              { id: 'memories', label: 'Our Memories' },
              { id: 'timeline', label: 'Our Journey' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-rose-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-pink-100/50"></div>
        <div className={`text-center z-10 max-w-4xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
              For You
            </h1>
            <Heart className="inline-block w-12 h-12 text-rose-400 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            This is my small effort to make you smile today and forever. 
            Every pixel, every word, every moment captured here is filled with love for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('letter')}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Read My Letter <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={generateCompliment}
              className="bg-white hover:bg-gray-50 text-rose-500 border-2 border-rose-500 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Click Me When You Need a Smile
            </button>
          </div>
        </div>

        {/* Floating hearts animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-rose-200 opacity-20 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
            />
          ))}
        </div>
      </section>

      {/* Love Letter Section */}
      <section id="letter" className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
              My Heart, Written Just for You
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl first-letter:text-4xl first-letter:font-bold first-letter:text-rose-500 first-letter:float-left first-letter:mr-2">
                My dearest love, as I write these words, my heart is overflowing with emotions that I struggle to put into sentences. This website isn't just code and design—it's every beat of my heart, every thought that crosses my mind, and every dream I have for us.
              </p>
              
              <p>
                You are the most beautiful part of my life, and even when I mess up, I never stop loving you. This website is a little piece of my heart, telling you that you matter to me more than anything else in this world. When words feel inadequate, when gestures seem small, I hope this shows you the depth of my feelings.
              </p>

              <p>
                I know I'm not perfect. I know there are moments when I don't say the right things, when I don't understand your feelings the way I should, or when my actions don't match the love I have in my heart. But please know that every single day, I'm trying to be better—for you, for us, for the beautiful future we're building together.
              </p>

           

              <p>
                I promise to love you not just on the easy days, but especially on the hard ones. I promise to listen when you speak, to hold you when you cry, and to celebrate every victory, no matter how small. I promise to grow with you, to learn from you, and to never stop trying to deserve the incredible love you give me.
              </p>

              <p>
                Thank you for choosing me, for staying, for believing in us even when things get complicated. Thank you for being my safe place, my adventure, my home. You are my greatest blessing, and I will spend every day showing you just how grateful I am to call you mine.
              </p>

              <p className="text-xl font-medium text-rose-600 text-center">
                With all my love, today and always,<br/>
                <span style={{ fontFamily: 'Dancing Script, cursive' }}>Your devoted partner ❤️</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section id="memories" className="py-20 px-4 bg-gradient-to-br from-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Our Beautiful Memories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(memory)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <img
                    src={memory.image}
                    alt="Memory"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Our Journey Together
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-300 to-purple-300"></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
                    <div className="flex items-center gap-2 mb-2 text-rose-500">
                      <event.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliment Modal */}
      {showCompliment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-auto text-center shadow-2xl transform animate-pulse">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4 animate-pulse" />
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">{currentCompliment}</p>
            <button
              onClick={() => setShowCompliment(false)}
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              ❤️ Thank you
            </button>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="text-xl font-medium mb-2">{selectedImage.caption}</h3>
              <p className="text-gray-300">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-500 to-purple-500 text-white py-12 text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 animate-pulse" />
        <p className="text-lg mb-2">Made with infinite love, just for you</p>
        <p className="text-sm opacity-90">Every line of code carries my heart ❤️</p>
      </footer>
    </div>
  );
}

export default App;