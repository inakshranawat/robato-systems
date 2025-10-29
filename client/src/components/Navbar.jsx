import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/useContext";
import DemoBtn from "./DemoBtn";
import { motion, AnimatePresence } from "framer-motion";
import { machinoxLogo } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { setDemoOpen } = useAppContext();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full bg-white shadow-sm border-b border-gray-200 z-50"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] cursor-pointer"
            src={machinoxLogo}
            alt="logo"
          />

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden xl:flex gap-6 2xl:gap-10 items-center font-medium text-gray-800 text-sm 2xl:text-base">
            <Link to="/" className="hover:text-purple-700 transition">
              IIoT
            </Link>

            {/* SOLUTIONS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="hover:text-purple-700 transition flex items-center gap-1">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className={`fixed left-0 right-0 top-[73px] bg-white border-t border-gray-200 shadow-lg z-40 transition-all duration-300 ease-in-out ${
                  solutionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 py-10 px-10">
                  {/* INDUSTRIES */}
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">
                      INDUSTRIES
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/aerospace-defense"
                          className="hover:text-purple-700 transition"
                        >
                          Aerospace & Defense
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/automotive"
                          className="hover:text-purple-700 transition"
                        >
                          Automotive
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/contract-manufacturers"
                          className="hover:text-purple-700 transition"
                        >
                          Contract Manufacturers
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/heavy-machinery"
                          className="hover:text-purple-700 transition"
                        >
                          Heavy Machinery
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/medical-devices"
                          className="hover:text-purple-700 transition"
                        >
                          Medical Devices
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/oil-gas"
                          className="hover:text-purple-700 transition"
                        >
                          Oil & Gas
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* APPLICATIONS */}
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">
                      APPLICATIONS
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/production-monitoring"
                          className="hover:text-purple-700 transition"
                        >
                          Production Monitoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/condition-monitoring"
                          className="hover:text-purple-700 transition"
                        >
                          Condition Monitoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/predictive-maintenance"
                          className="hover:text-purple-700 transition"
                        >
                          Predictive Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/process-optimization"
                          className="hover:text-purple-700 transition"
                        >
                          Process Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setSolutionsOpen(false)}
                          to="/machine-builders"
                          className="hover:text-purple-700 transition"
                        >
                          For Machine Builders and Distributors
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="hover:text-purple-700 transition flex items-center gap-1">
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className={`fixed left-0 right-0 top-[73px] bg-white border-t border-gray-200 shadow-lg z-40 transition-all duration-300 ease-in-out ${
                  productsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="max-w-5xl mx-auto grid grid-cols-2 gap-20 py-10 px-10">
                  {/* ELECTRONIC MESSAGE DISPLAY */}
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">
                      ELECTRONIC MESSAGE DISPLAY
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li>
                        <Link
                          onClick={() => setProductsOpen(false)}
                          to="/production-counter-display"
                          className="hover:text-purple-700 transition"
                        >
                          Production Counter Display
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setProductsOpen(false)}
                          to="/andon-board-display"
                          className="hover:text-purple-700 transition"
                        >
                          Andon Board Display
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setProductsOpen(false)}
                          to="/industrial-parameter-display"
                          className="hover:text-purple-700 transition"
                        >
                          Industrial Parameter Display
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* ANDON TOWER LIGHT */}
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-700 text-sm mb-4 border-b-2 border-purple-600 pb-2 inline-block">
                      ANDON TOWER LIGHT
                    </h3>
                    <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                      <li>
                        <Link
                          onClick={() => setProductsOpen(false)}
                          to="/andon-signal-tower-light"
                          className="hover:text-purple-700 transition"
                        >
                          Andon Signal Tower Light
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setProductsOpen(false)}
                          to="/wireless-andon-tower-light"
                          className="hover:text-purple-700 transition"
                        >
                          Wireless Andon Tower Light
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setProductsOpen(false)}
                          to="/cloud-andon-tower-light"
                          className="hover:text-purple-700 transition"
                        >
                          Cloud Andon Tower Light
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about-us" className="hover:text-purple-700 transition">
              Company
            </Link>
            <Link to="/blogs" className="hover:text-purple-700 transition">
              Blogs
            </Link>
            <Link to="/contact-us" className="hover:text-purple-700 transition">
              Contact Us
            </Link>
          </div>

          {/* Desktop Right Side Buttons - Hidden on mobile/tablet */}
          <div className="hidden xl:flex gap-3 2xl:gap-5 items-center">
            <div
              onClick={() => setDemoOpen(true)}
              className="cursor-pointer border border-purple-700 text-purple-700 px-4 2xl:px-5 py-2 rounded hover:bg-purple-50 transition font-medium text-xs 2xl:text-sm whitespace-nowrap"
            >
              BOOK FREE TRIAL
            </div>

            <DemoBtn />

            <button
              onClick={() =>  (window.location.href = "tel:+61 478 251 187")}
              className="bg-purple-700 cursor-pointer text-white px-4 2xl:px-6 py-2 rounded hover:bg-purple-800 transition font-medium text-xs 2xl:text-sm whitespace-nowrap"
            >
              CALL NOW
            </button>
          </div>

          {/* Mobile/Tablet: CTA Buttons + Hamburger */}
          <div className="flex xl:hidden  items-center gap-3">
            <button
              onClick={() => setDemoOpen(true)}
              className="hidden sm:block border border-purple-700 text-purple-700 px-3 py-1.5 rounded hover:bg-purple-50 transition font-medium text-xs whitespace-nowrap"
            >
              BOOK DEMO
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute  top-0 right-0 h-full w-[85%] sm:w-[400px] bg-white shadow-2xl z-[999999] xl:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Mobile Menu Items */}
              <nav className="mt-12 space-y-1">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition font-medium"
                >
                  IIoT
                </Link>

                {/* Mobile Solutions Accordion */}
                <div>
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-purple-50 rounded-lg transition font-medium"
                  >
                    Solutions
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        mobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileSolutionsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 space-y-2">
                          <div className="text-xs font-semibold text-purple-700 mb-2 px-4">
                            INDUSTRIES
                          </div>
                          <Link
                            to="/aerospace-defense"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Aerospace & Defense
                          </Link>
                          <Link
                            to="/automotive"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Automotive
                          </Link>
                          <Link
                            to="/contract-manufacturers"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Contract Manufacturers
                          </Link>
                          <Link
                            to="/heavy-machinery"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Heavy Machinery
                          </Link>
                          <Link
                            to="/medical-devices"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Medical Devices
                          </Link>
                          <Link
                            to="/oil-gas"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Oil & Gas
                          </Link>

                          <div className="text-xs font-semibold text-purple-700 mt-4 mb-2 px-4">
                            APPLICATIONS
                          </div>
                          <Link
                            to="/production-monitoring"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Production Monitoring
                          </Link>
                          <Link
                            to="/condition-monitoring"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Condition Monitoring
                          </Link>
                          <Link
                            to="/predictive-maintenance"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Predictive Maintenance
                          </Link>
                          <Link
                            to="/process-optimization"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Process Optimization
                          </Link>
                          <Link
                            to="/machine-builders"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            For Machine Builders and Distributors
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Products Accordion */}
                <div>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-purple-50 rounded-lg transition font-medium"
                  >
                    Products
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 space-y-2">
                          <div className="text-xs font-semibold text-purple-700 mb-2 px-4">
                            ELECTRONIC MESSAGE DISPLAY
                          </div>
                          <Link
                            to="/production-counter-display"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Production Counter Display
                          </Link>
                          <Link
                            to="/andon-board-display"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Andon Board Display
                          </Link>
                          <Link
                            to="/industrial-parameter-display"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Industrial Parameter Display
                          </Link>

                          <div className="text-xs font-semibold text-purple-700 mt-4 mb-2 px-4">
                            ANDON TOWER LIGHT
                          </div>
                          <Link
                            to="/andon-signal-tower-light"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Andon Signal Tower Light
                          </Link>
                          <Link
                            to="/wireless-andon-tower-light"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Wireless Andon Tower Light
                          </Link>
                          <Link
                            to="/cloud-andon-tower-light"
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded"
                          >
                            Cloud Andon Tower Light
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/about-us"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition font-medium"
                >
                  Company
                </Link>
                <Link
                  to="/blogs"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition font-medium"
                >
                  Blogs
                </Link>
                <Link
                  to="/contact-us"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition font-medium"
                >
                  Contact Us
                </Link>
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="mt-6 space-y-3 px-4">
                <button
                  onClick={() => {
                    setDemoOpen(true);
                    closeMobileMenu();
                  }}
                  className="w-full border border-purple-700 text-purple-700 px-5 py-3 rounded-lg hover:bg-purple-50 transition font-medium text-sm"
                >
                  BOOK FREE TRAIL
                </button>
                <button
                  onClick={() => {
                     (window.location.href = "tel:+61 478 251 187");
                    closeMobileMenu();
                  }}
                  className="w-full bg-purple-700 text-white px-5 py-3 rounded-lg hover:bg-purple-800 transition font-medium text-sm"
                >
                  CALL NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;