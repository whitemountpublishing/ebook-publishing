'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Import Fiction Images
import Fiction01 from '../assets/fiction/fiction-01.webp';
import Fiction02 from '../assets/fiction/fiction-02.webp';
import Fiction03 from '../assets/fiction/fiction-03.webp';
import Fiction04 from '../assets/fiction/fiction-04.webp';
import Fiction05 from '../assets/fiction/fiction-05.webp';
import Fiction06 from '../assets/fiction/fiction-06.webp';
import Fiction07 from '../assets/fiction/fiction-07.webp';
import Fiction08 from '../assets/fiction/fiction-08.webp';
import Fiction09 from '../assets/fiction/fiction-09.webp';
import Fiction10 from '../assets/fiction/fiction-10.webp';
import Fiction11 from '../assets/fiction/fiction-11.webp';
import Fiction12 from '../assets/fiction/fiction-12.webp';

// Import Novels Images
import Novels01 from '../assets/novels/novels-01.webp';
import Novels02 from '../assets/novels/novels-02.webp';
import Novels03 from '../assets/novels/novels-03.webp';
import Novels04 from '../assets/novels/novels-04.webp';
import Novels05 from '../assets/novels/novels-05.webp';
import Novels06 from '../assets/novels/novels-06.webp';
import Novels07 from '../assets/novels/novels-07.webp';
import Novels08 from '../assets/novels/novels-08.webp';
import Novels09 from '../assets/novels/novels-09.webp';
import Novels10 from '../assets/novels/novels-10.webp';
import Novels11 from '../assets/novels/novels-11.webp';
import Novels12 from '../assets/novels/novels-12.webp';

// Import Adventure Images
import Adventure01 from '../assets/adventure/adventure-01.webp';
import Adventure02 from '../assets/adventure/adventure-02.webp';
import Adventure03 from '../assets/adventure/adventure-03.webp';
import Adventure04 from '../assets/adventure/adventure-04.webp';
import Adventure05 from '../assets/adventure/adventure-05.webp';
import Adventure06 from '../assets/adventure/adventure-06.webp';
import Adventure07 from '../assets/adventure/adventure-07.webp';
import Adventure08 from '../assets/adventure/adventure-08.webp';
import Adventure09 from '../assets/adventure/adventure-09.webp';
import Adventure10 from '../assets/adventure/adventure-10.webp';
import Adventure11 from '../assets/adventure/adventure-11.webp';
import Adventure12 from '../assets/adventure/adventure-12.webp';

// Import Children's Book Images
import Children01 from '../assets/children/children-01.webp';
import Children02 from '../assets/children/children-02.webp';
import Children03 from '../assets/children/children-03.webp';
import Children04 from '../assets/children/children-04.webp';
import Children05 from '../assets/children/children-05.webp';
import Children06 from '../assets/children/children-06.webp';
import Children07 from '../assets/children/children-07.webp';
import Children08 from '../assets/children/children-08.webp';
import Children09 from '../assets/children/children-09.webp';
import Children10 from '../assets/children/children-10.webp';
import Children11 from '../assets/children/children-11.webp';
import Children12 from '../assets/children/children-12.webp';

// Import Christian Images
import Christian01 from '../assets/christian/christian-01.webp';
import Christian02 from '../assets/christian/christian-02.webp';
import Christian03 from '../assets/christian/christian-03.webp';
import Christian04 from '../assets/christian/christian-04.webp';
import Christian05 from '../assets/christian/christian-05.webp';
import Christian06 from '../assets/christian/christian-06.webp';
import Christian07 from '../assets/christian/christian-07.webp';
import Christian08 from '../assets/christian/christian-08.webp';
import Christian09 from '../assets/christian/christian-09.webp';
import Christian10 from '../assets/christian/christian-10.webp';
import Christian11 from '../assets/christian/christian-11.webp';
import Christian12 from '../assets/christian/christian-12.webp';

// Import Non-Fiction Images
import NonFiction01 from '../assets/non-fiction/non-fiction-01.webp';
import NonFiction02 from '../assets/non-fiction/non-fiction-02.webp';
import NonFiction03 from '../assets/non-fiction/non-fiction-03.webp';
import NonFiction04 from '../assets/non-fiction/non-fiction-04.webp';
import NonFiction05 from '../assets/non-fiction/non-fiction-05.webp';
import NonFiction06 from '../assets/non-fiction/non-fiction-06.webp';
import NonFiction07 from '../assets/non-fiction/non-fiction-07.webp';
import NonFiction08 from '../assets/non-fiction/non-fiction-08.webp';
import NonFiction09 from '../assets/non-fiction/non-fiction-09.webp';
import NonFiction10 from '../assets/non-fiction/non-fiction-10.webp';
import NonFiction11 from '../assets/non-fiction/non-fiction-11.webp';
import NonFiction12 from '../assets/non-fiction/non-fiction-12.webp';

// Import Autobiography Images
import Autobiography01 from '../assets/autobiography/autobiography-01.webp';
import Autobiography02 from '../assets/autobiography/autobiography-02.webp';
import Autobiography03 from '../assets/autobiography/autobiography-03.webp';
import Autobiography04 from '../assets/autobiography/autobiography-04.webp';
import Autobiography05 from '../assets/autobiography/autobiography-05.webp';
import Autobiography06 from '../assets/autobiography/autobiography-06.webp';
import Autobiography07 from '../assets/autobiography/autobiography-07.webp';
import Autobiography08 from '../assets/autobiography/autobiography-08.webp';
import Autobiography09 from '../assets/autobiography/autobiography-09.webp';
import Autobiography10 from '../assets/autobiography/autobiography-10.webp';
import Autobiography11 from '../assets/autobiography/autobiography-11.webp';
import Autobiography12 from '../assets/autobiography/autobiography-12.webp';

const categories = ['Fiction', 'Novels', 'Adventure', "Children's Book", 'Christian', 'Non-Fiction', 'Autobiography'];

const galleryData = {
  Fiction: [
    Fiction01,
    Fiction02,
    Fiction03,
    Fiction04,
    Fiction05,
    Fiction06,
    Fiction07,
    Fiction08,
    Fiction09,
    Fiction10,
    Fiction11,
    Fiction12,
  ],
  Novels: [
    Novels01,
    Novels02,
    Novels03,
    Novels04,
    Novels05,
    Novels06,
    Novels07,
    Novels08,
    Novels09,
    Novels10,
    Novels11,
    Novels12,
  ],
  Adventure: [
    Adventure01,
    Adventure02,
    Adventure03,
    Adventure04,
    Adventure05,
    Adventure06,
    Adventure07,
    Adventure08,
    Adventure09,
    Adventure10,
    Adventure11,
    Adventure12,
  ],
  "Children's Book": [
    Children01,
    Children02,
    Children03,
    Children04,
    Children05,
    Children06,
    Children07,
    Children08,
    Children09,
    Children10,
    Children11,
    Children12,
  ],
  Christian: [
    Christian01,
    Christian02,
    Christian03,
    Christian04,
    Christian05,
    Christian06,
    Christian07,
    Christian08,
    Christian09,
    Christian10,
    Christian11,
    Christian12,
  ],
  'Non-Fiction': [
    NonFiction01,
    NonFiction02,
    NonFiction03,
    NonFiction04,
    NonFiction05,
    NonFiction06,
    NonFiction07,
    NonFiction08,
    NonFiction09,
    NonFiction10,
    NonFiction11,
    NonFiction12,
  ],
  Autobiography: [
    Autobiography01,
    Autobiography02,
    Autobiography03,
    Autobiography04,
    Autobiography05,
    Autobiography06,
    Autobiography07,
    Autobiography08,
    Autobiography09,
    Autobiography10,
    Autobiography11,
    Autobiography12,
  ],
};

export default function BookGallery() {
  const [activeCategory, setActiveCategory] = useState('Fiction');

  return (
    <section className='section' style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className='container'>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: 'var(--primary)',
              marginBottom: '1rem',
            }}
          >
            Our Recent Work
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Explore our portfolio of published books across various genres.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                backgroundColor: activeCategory === cat ? 'var(--primary)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                boxShadow: activeCategory === cat ? '0 5px 15px rgba(0,0,0,0.2)' : '0 2px 5px rgba(0,0,0,0.05)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          <AnimatePresence mode='popLayout'>
            {galleryData[activeCategory as keyof typeof galleryData].map((img, idx) => (
              <motion.div
                key={`${activeCategory}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  aspectRatio: '2/3',
                  position: 'relative',
                }}
              >
                <Image
                  src={img}
                  alt={`${activeCategory} Book ${idx + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes='(max-width: 768px) 50vw, 33vw'
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
