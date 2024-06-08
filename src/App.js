import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import About from './components/About/about';
import NotFound from './components/Layout/NotFound/NotFound';
import Request from './components/Request/Request';
import Country from './components/Demo/Country';
import Translate from './components/LanguageTranslator/Translate';

// Germany Routes inports
import Quiz1 from './components/Germany/Quiz1';
import Category1 from './components/Germany/Category1';
import DragDropQuiz1 from './components/Germany/DragDropQuiz1';
import FillBlanks1 from './components/Germany/FillBlanks1';

//Russia Routes imports
import FillBlanks2 from './components/Russia/FillBlanks2';
import DragDropQuiz2 from './components/Russia/DragDropQuiz2';
import Category2 from './components/Russia/Category2';
import Quiz2 from './components/Russia/Quiz2';

//China Routes imports
import FillBlanks3 from './components/China/FillBlanks3';
import DragDropQuiz3 from './components/China/DragDropQuiz3';
import Category3 from './components/China/Category3';
import Quiz3 from './components/China/Quiz3';

//Japan Routes imports
import Quiz4 from './components/Japan/Quiz4';
import Category4 from './components/Japan/Category4';
import DragDropQuiz4 from './components/Japan/DragDropQuiz4';
import FillBlanks4 from './components/Japan/FillBlanks4';

//USA Routes imports
import Quiz5 from './components/USA/Quiz5';
import Category5 from './components/USA/Category5';
import DragDropQuiz5 from './components/USA/DragDropQuiz5';
import FillBlanks5 from './components/USA/FillBlanks5';
import { Button } from '@chakra-ui/react';

function App() {
  const [isDesktopMode, setIsDesktopMode] = useState(true);
  const [showDesktopModeModal, setShowDesktopModeModal] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isDesktop = window.innerWidth >= 1200;

      // Check if the user switches to desktop mode
      if (isDesktop && showDesktopModeModal) {
        setShowDesktopModeModal(false);
        document.body.classList.remove('blurred'); // Remove the blur effect
      }

      setIsDesktopMode(isDesktop);
    };

    checkScreenSize(); // Check on initial render

    window.addEventListener('resize', checkScreenSize);

    // Check on component mount
    if (!isDesktopMode) {
      setShowDesktopModeModal(true);
      document.body.classList.add('blurred'); // Apply the blur effect
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isDesktopMode, showDesktopModeModal]);

  const closeModal = () => {
    setShowDesktopModeModal(false);
    document.body.classList.remove('blurred'); // Remove the blur effect
  };
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  return (
    <Router>
      <Header />
      <div className={`app-container ${isDesktopMode ? '' : 'blurred'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/request" element={<Request />} />
        <Route path="/Country" element={<Country />} />
        <Route path="/translator" element={<Translate />} />
        <Route path="*" element={<NotFound />} />

        {/* Germany routes */}
        <Route path="/quiz/Germany" element={<Category1 />} />
        <Route path="/germany/quiz" element={<Quiz1 />} />
        <Route path="/germany/drag-drop-quiz" element={<DragDropQuiz1 />} />
        <Route path="/germany/fill-blanks" element={<FillBlanks1 />} />

        {/* Russia Routes */}
        <Route path="/quiz/Russia" element={<Category2 />} />
        <Route path="/russia/quiz" element={<Quiz2 />} />
        <Route path="/russia/drag-drop-quiz" element={<DragDropQuiz2 />} />
        <Route path="/russia/fill-blanks" element={<FillBlanks2 />} />

        {/* China Routes */}
        <Route path="/quiz/China" element={<Category3 />} />
        <Route path="/china/quiz" element={<Quiz3 />} />
        <Route path="/china/drag-drop-quiz" element={<DragDropQuiz3 />} />
        <Route path="/china/fill-blanks" element={<FillBlanks3 />} />

        {/* Japan Routes */}
        <Route path="/quiz/Japan" element={<Category4 />} />
        <Route path="/japan/quiz" element={<Quiz4 />} />
        <Route path="/japan/drag-drop-quiz" element={<DragDropQuiz4 />} />
        <Route path="/japan/fill-blanks" element={<FillBlanks4 />} />

        {/* USA Routes */}
        <Route path="/quiz/USA" element={<Category5 />} />
        <Route path="/usa/quiz" element={<Quiz5 />} />
        <Route path="/usa/drag-drop-quiz" element={<DragDropQuiz5 />} />
        <Route path="/usa/fill-blanks" element={<FillBlanks5 />} />
      </Routes>
      </div>
      {showDesktopModeModal && (
        <div className="modal-background">
          <div className="modal-content">
            <p>
              Please switch to desktop mode for the best experience.
              <Button onClick={closeModal}
              size={'sm'}
              colorScheme="red">Close</Button>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </Router>
  );
}

// Include the CSS styles directly
const styles = `
.app-container.blurred {
  filter: blur(5px); /* Adjust the blur amount as needed */
  pointer-events: none; /* Allow clicking on elements beneath the blurred layer */
}

  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999; /* Ensure the modal is on top of other elements */
  }

  .modal-content {
    background: #EDEADE;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }

  .modal-background .modal-content p{
    color: #353935;
  }
  
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;
