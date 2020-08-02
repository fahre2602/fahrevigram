import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

import { motion } from 'framer-motion';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title/>
      </motion.div>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setSelectedCaption={setSelectedCaption} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} selectedCaption={selectedCaption} setSelectedCaption={setSelectedCaption} />
      )}
    </div>
  );
}

export default App;
