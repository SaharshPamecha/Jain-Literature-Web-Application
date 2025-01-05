import React, { useRef } from 'react';
    import HTMLFlipBook from 'react-pageflip';

    const LiteratureSection = () => {
      const bookRef = useRef(null);

      return (
        <div className="literature-section container">
          <h2>Jain Literature</h2>
          <div className="book-container">
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
              <div className="book-page">
                <h3>Page 1</h3>
                <p>This is a sample text from a Jain literature book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="book-page">
                <h3>Page 2</h3>
                <p>Another page of Jain literature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </HTMLFlipBook>
          </div>
        </div>
      );
    };

    export default LiteratureSection;
