import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const LandingPage = () => {
      return (
        <motion.div
          className="landing-page container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to Jain Literature
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore the rich heritage of Jain literature with our interactive platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/literature">
              <button>Explore Literature</button>
            </Link>
          </motion.div>
        </motion.div>
      );
    };

    export default LandingPage;
