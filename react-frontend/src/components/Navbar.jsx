import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import SidePanel from './SidePanel';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.69-8.69a2.25 2.25 0 00-3.18 0l-8.69 8.69a.75.75 0 001.06 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

const InventoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.375A3.75 3.75 0 0010.5 2.625H5.625zM10.5 9A.75.75 0 009.75 9.75v1.5a.75.75 0 001.5 0v-1.5A.75.75 0 0010.5 9z" clipRule="evenodd" />
    <path d="M13.875 3.375a.375.375 0 00.375.375h1.875a.375.375 0 00.375-.375V3.375a.375.375 0 00-.375-.375h-1.875a.375.375 0 00-.375.375zM13.5 7.125a.375.375 0 01.375-.375h1.875a.375.375 0 01.375.375v2.25a.375.375 0 01-.375.375h-1.875a.375.375 0 01-.375-.375V7.125z" />
  </svg>
);

const AboutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-1.423-2.593-1.423-3.483 0l-2.924 4.679a.75.75 0 00.625 1.122h5.848a.75.75 0 00.625-1.122l-2.924-4.679z" clipRule="evenodd" />
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand-link"><h1 className="brand">Kram Auto.</h1></Link>
          <ul className="nav-links">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsSidePanelOpen(true); }}>
                <HomeIcon />
                <span className="nav-link-text">Home</span>
              </a>
            </li>
            <li>
              <a href="/#inventory">
                <InventoryIcon />
                <span className="nav-link-text">Inventory</span>
              </a>
            </li>
            <li>
              <Link to="/about">
                <AboutIcon />
                <span className="nav-link-text">About</span>
              </Link>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                <ContactIcon />
                <span className="nav-link-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
    </>
  )
}
