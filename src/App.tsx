/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Book as BookIcon, User, Calendar, Tag, ChevronRight, Menu, X, Landmark, Quote, ExternalLink, Youtube, Globe } from 'lucide-react';
import { books, Book } from './data';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    return books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleGoogleSearch = (book: Book) => {
    const query = encodeURIComponent(`${book.title} ${book.author} filetype:pdf`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const handleYoutubeSearch = (book: Book) => {
    const query = encodeURIComponent(`${book.title} ${book.author} audio kitob`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-heritage-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-heritage-cream/80 backdrop-blur-md border-b border-heritage-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Landmark className="w-8 h-8 text-heritage-ink" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-heritage-ink serif uppercase">Najot Ta'lim</span>
                <span className="text-[10px] uppercase tracking-widest text-heritage-ink/60 font-semibold -mt-1">Kutubxonasi</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium uppercase tracking-wider text-heritage-ink hover:text-heritage-gold transition-colors">Asosiy</a>
              <a href="#" className="text-sm font-medium uppercase tracking-wider text-heritage-ink hover:text-heritage-gold transition-colors">Mualliflar</a>
              <a href="#" className="text-sm font-medium uppercase tracking-wider text-heritage-ink/40 cursor-not-allowed">Kolleksiyalar</a>
              <a href="#" className="text-sm font-medium uppercase tracking-wider text-heritage-ink/40 cursor-not-allowed">Haqida</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-heritage-ink hover:bg-heritage-ink/5 rounded-full transition-colors md:hidden"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-3 py-1 bg-heritage-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6">
                Madaniyat & San'at
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] text-heritage-ink mb-8 tracking-tighter">
                Abdulla <br />
                <span className="text-heritage-gold">Qodiriy</span>
              </h1>
              <p className="text-lg text-heritage-ink/70 max-w-lg mb-10 leading-relaxed">
                Zamonaviy o'zbek romanchiligining asoschisi, milliy uyg'onish davri adabiyotining buyuk namoyandasi ijodiga sayohat qiling.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div 
                  onClick={() => {
                    const catalogEl = document.getElementById('catalog');
                    catalogEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-3 px-6 py-4 bg-heritage-ink text-white rounded-full hover:bg-heritage-ink/90 transition-all cursor-pointer group"
                >
                  <span className="font-medium uppercase text-xs tracking-widest">Katalogga o'tish</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="flex items-center gap-3 px-6 py-4 border border-heritage-ink/20 text-heritage-ink rounded-full hover:bg-heritage-ink/5 transition-all cursor-pointer">
                  <Landmark className="w-4 h-4" />
                  <span className="font-medium uppercase text-xs tracking-widest">Muzey haqida</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] lg:aspect-square bg-heritage-ink rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,89,0.3)_0%,transparent_70%)] opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-heritage-gold mx-auto mb-8 opacity-40" />
                  <p className="text-2xl sm:text-3xl font-serif text-white/90 italic leading-relaxed mb-8">
                    "O'tkan kunlar - tariximizning eng qora kunlaridan birining tasviridir."
                  </p>
                  <p className="text-sm uppercase tracking-[0.3em] text-heritage-gold font-bold">
                    Abdulla Qodiriy
                  </p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 left-8 border-t border-white/10 pt-8 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Hozirgi to'plam</span>
                  <span className="text-xl serif text-white">60 ta asar va maqola</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  01
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section id="catalog" className="bg-white border-y border-heritage-ink/5 py-12 sticky top-20 z-40 shadow-sm transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="w-full md:max-w-md relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heritage-ink/30 group-focus-within:text-heritage-gold transition-colors" />
              <input 
                type="text" 
                placeholder="Kitob yoki bob nomini kiriting..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-heritage-cream/30 border border-heritage-ink/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-heritage-gold/20 focus:border-heritage-gold transition-all shadow-inner"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {['Barchasi', 'Roman', 'Hikoya', 'Maqola', 'Satira', 'Drama'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSearchTerm(cat === 'Barchasi' ? '' : cat)}
                  className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all whitespace-nowrap ${
                    (cat === 'Barchasi' && searchTerm === '') || searchTerm === cat 
                      ? 'bg-heritage-gold text-white shadow-lg shadow-heritage-gold/30' 
                      : 'bg-white border border-heritage-ink/10 text-heritage-ink hover:bg-heritage-ink/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-heritage-ink serif">Kutubxona xazinasi</h2>
              <p className="text-heritage-ink/50 mt-1 uppercase text-[10px] tracking-widest font-bold">Jami {filteredBooks.length} ta natija</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredBooks.map((book, index) => (
                <motion.div
                  layout
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className={`aspect-[3/4] ${book.coverColor} rounded-xl relative overflow-hidden mb-4 shadow-xl transition-all group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/90 text-heritage-ink px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg">
                        Batafsil
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 z-10">
                      <div className="w-8 h-10 border border-white/30 rounded-sm flex items-center justify-center">
                        <BookIcon className="w-4 h-4 text-white/50" />
                      </div>
                    </div>

                    <div className="p-8 h-full flex flex-col justify-end text-white">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-[9px] uppercase tracking-widest text-white/60 mb-1 font-bold">{book.category}</p>
                        <h4 className="text-lg font-bold leading-tight line-clamp-2 serif">{book.title}</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-heritage-ink leading-tight group-hover:text-heritage-gold transition-colors">{book.title}</h3>
                      <p className="text-xs text-heritage-ink/50 mt-1 flex items-center gap-1">
                        <User className="w-3 h-3" /> {book.author}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-heritage-gold bg-heritage-gold/10 px-2 py-0.5 rounded leading-none shrink-0">
                      {book.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredBooks.length === 0 && (
            <div className="py-20 text-center">
              <X className="w-12 h-12 text-heritage-ink/10 mx-auto mb-4" />
              <p className="text-xl text-heritage-ink/40 serif italic">Kechirasiz, bunday asar topilmadi.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-6 text-sm font-bold uppercase tracking-widest text-heritage-gold border-b-2 border-heritage-gold pb-1"
              >
                Qidiruvni tozalash
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-heritage-ink/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-heritage-cream rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <button 
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-heritage-ink/5 hover:bg-heritage-ink/10 rounded-full transition-colors text-heritage-ink"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`h-48 ${selectedBook.coverColor} relative flex items-end p-8`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative z-10">
                  <span className="bg-heritage-gold text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2 inline-block shadow-sm">
                    {selectedBook.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white serif leading-tight">{selectedBook.title}</h2>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-6 mb-8 text-xs font-bold uppercase tracking-widest text-heritage-ink/40 border-b border-heritage-ink/5 pb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-heritage-gold" />
                    <span>{selectedBook.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-heritage-gold" />
                    <span>{selectedBook.year}-yil</span>
                  </div>
                </div>

                <p className="text-heritage-ink/70 leading-relaxed mb-10 text-sm italic serif">
                  "{selectedBook.description}"
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleGoogleSearch(selectedBook)}
                    className="flex items-center justify-center gap-3 bg-white border border-heritage-ink/10 text-heritage-ink py-4 rounded-2xl hover:bg-heritage-ink hover:text-white transition-all group font-bold text-xs uppercase tracking-widest shadow-sm"
                  >
                    <Globe className="w-4 h-4" />
                    Google (PDF)
                  </button>
                  <button 
                    onClick={() => handleYoutubeSearch(selectedBook)}
                    className="flex items-center justify-center gap-3 bg-[#FF0000] text-white py-4 rounded-2xl hover:bg-[#CC0000] transition-all group font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-500/20"
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </button>
                </div>
                
                <p className="mt-8 text-center text-[10px] text-heritage-ink/30 font-bold uppercase tracking-widest">
                  Najot Ta'lim raqamli kutubxonasi &copy; 2026
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-heritage-ink text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Landmark className="w-8 h-8 text-heritage-gold" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white serif uppercase">Najot Ta'lim</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold -mt-1">Kutubxonasi</span>
                </div>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed mb-8">
                O'zbek xalqining boy adabiy merosini asrab-avaylash va kelajak avlodga yetkazish yo'lidagi kamtarona xizmatimiz.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-heritage-ink transition-all cursor-pointer shadow-sm">
                    <span className="text-xs font-bold font-serif">{i}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-heritage-gold mb-8">Havolalar</h4>
              <ul className="space-y-4">
                {['Asosiy', 'Katalog', 'Muzey', 'Blog', 'Bog\'lanish'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-heritage-gold mb-8">Ma'lumot</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-start gap-3">
                  <Landmark className="w-4 h-4 shrink-0 mt-0.5 text-heritage-gold" />
                  <span>Toshkent shahri, Shayxontohur tumani, Najot Ta'lim markazi</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 shrink-0 text-heritage-gold" />
                  <span>Dushanba - Shanba, 09:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-widest text-white/20 font-bold">
            <p>&copy; 2026 Najot Ta'lim Kutubxonasi. Barcha huquqlar himoyalangan.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
              <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-heritage-ink flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-20">
               <div className="flex items-center gap-2">
                <Landmark className="w-8 h-8 text-heritage-gold" />
                <span className="text-xl font-bold tracking-tight text-white serif uppercase">Najot Ta'lim</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {['Asosiy', 'Mualliflar', 'Katalog', 'Haqida'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  href="#" 
                  className="text-4xl font-serif text-white hover:text-heritage-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-4">Bog'lanish</p>
              <p className="text-white font-medium italic serif text-lg">+998 71 200 11 23</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
