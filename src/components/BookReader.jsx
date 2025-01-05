import React, { useState, useRef } from 'react';
    import HTMLFlipBook from 'react-pageflip';
    import { useTranslation } from 'react-i18next';
    import jsPDF from 'jspdf';

    const BookReader = () => {
      const { t } = useTranslation();
      const [fontSize, setFontSize] = useState(16);
      const bookRef = useRef(null);

      const handleDownload = () => {
        const doc = new jsPDF();
        doc.text(t('sampleText'), 10, 10);
        doc.save('book.pdf');
      };

      const handleFontSizeChange = (increment) => {
        setFontSize(prevSize => Math.max(10, prevSize + increment));
      };

      return (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <button onClick={() => handleFontSizeChange(-1)}>-</button>
            <span style={{ margin: '0 10px' }}>{t('fontSize')}: {fontSize}</span>
            <button onClick={() => handleFontSizeChange(1)}>+</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <HTMLFlipBook
              width={300}
              height={500}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              ref={bookRef}
            >
              <div className="book-page" style={{ backgroundColor: '#f0f0f0', fontSize: `${fontSize}px`, padding: '20px', textAlign: 'center' }}>
                {t('page')} 1
                <br />
                {t('sampleText')}
              </div>
              <div className="book-page" style={{ backgroundColor: '#f0f0f0', fontSize: `${fontSize}px`, padding: '20px', textAlign: 'center' }}>
                {t('page')} 2
                <br />
                {t('sampleText')}
              </div>
            </HTMLFlipBook>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button onClick={handleDownload}>{t('download')}</button>
          </div>
        </div>
      );
    };

    export default BookReader;
