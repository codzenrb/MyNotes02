// import React from 'react';
// import { FaFileAlt } from "react-icons/fa";
// import { FaRegEdit } from "react-icons/fa";
// import { motion } from "motion/react";
// import { IoIosCloseCircle } from "react-icons/io";

// const Card = ({ reference, cardDet, cardidx, removeCard }) => {
//   return (
//     <motion.div
//       drag
//       dragConstraints={reference}
//       whileDrag={{ scale: 1.3 }}
//       dragElastic={1}
//       dragMomentum={0.5}
//       className="relative card h-[300px] w-[240px] bg-zinc-600/50 z-3 rounded-[35px] p-7 overflow-hidden"
//     >
//       <div className="icon flex justify-between items-center text-white">
//         <FaFileAlt />
//         <IoIosCloseCircle
//           className="text-xl cursor-pointer hover:text-red-500 transition"
//           onClick={() => removeCard(cardidx)} // Remove card on click
//         />
//       </div>

//       <div className="title pt-4 text-lg font-semibold text-zinc-400 line-clamp-1">
//         {cardDet.title}
//       </div>

//       <div className="description text-[15px] leading-[1.2] py-2 text-zinc-500 font-semibold max-h-[135px] w-full overflow-hidden text-ellipsis">
//         {cardDet.description}
//       </div>

//       <div className="footer absolute bottom-0 left-0 text-[12px] px-7 py-4 flex items-center justify-end w-full text-zinc-600 bg-green-300">
//         <FaRegEdit className="text-[15px]" />
//       </div>
//     </motion.div>
//   );
// };

// export default Card;


//cursor code
import React, { useState } from 'react';
import { FaFileAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { motion } from "motion/react";
import { IoIosCloseCircle } from "react-icons/io";

const Card = ({ reference, cardDet, cardidx, removeCard, updateCard }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: cardDet.title,
    description: cardDet.description
  });

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    removeCard(cardidx);
    setShowConfirm(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editFormData.title.trim() || !editFormData.description.trim()) {
      alert('Please fill in both title and description!');
      return;
    }
    updateCard(cardidx, {
      title: editFormData.title.trim(),
      description: editFormData.description.trim()
    });
    setShowEditForm(false);
  };

  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.3 }}
        dragElastic={1}
        dragMomentum={0.5}
        className="relative card sm:h-[300px] sm:w-[240px] h-[240px] w-[152px] bg-zinc-600/50 z-3 rounded-[35px] p-4 overflow-hidden"
      >
        <div className="icon flex justify-between items-center text-white">
          <FaFileAlt />
          <IoIosCloseCircle
            className="text-xl cursor-pointer hover:text-red-500 transition"
            onClick={handleDelete}
          />
        </div>

        <div className="title pt-4 text-lg font-semibold text-zinc-400 line-clamp-1">
          {cardDet.title}
        </div>

        <div className="description text-[15px] leading-[1.2] py-2 text-zinc-500 font-semibold max-h-[135px] w-full overflow-hidden text-ellipsis">
          {cardDet.description}
        </div>

        <div className="footer absolute bottom-0 left-0 text-[12px] px-7 py-4 flex items-center justify-end w-full text-zinc-600 bg-green-300">
          <FaRegEdit 
            className="text-[15px] cursor-pointer hover:scale-125 transition-transform" 
            onClick={() => setShowEditForm(true)}
          />
        </div>
      </motion.div>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm z-50">
          <div className="bg-zinc-800 p-6 rounded-lg shadow-xl text-white">
            <h3 className="text-lg font-semibold mb-4">Delete Note</h3>
            <p className="mb-6">Are you sure you want to delete this note?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-zinc-600 rounded-lg hover:bg-zinc-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Form Modal */}
      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-500/20 bg-opacity-20 backdrop-blur-md z-50">
          <div className="bg-zinc-500/20 text-white p-6 shadow-lg w-screen  h-screen relative">
            <h2 className="text-xl font-semibold mb-4  pt-6">Edit Note</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-3">
                
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 text-7xl text-zinc-200 font-semibold outline-none"
                  placeholder="Enter Title"
                />
              </div>
              <div className="mb-3">
                
                <textarea
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  className="w-full h-[65vh] resize-none  px-3 py-2 outline-none text-white font-semibold text-4xl"
                  placeholder="note"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditFormData({ title: cardDet.title, description: cardDet.description });
                    setShowEditForm(false);
                  }}
                  className="px-4 py-2 bg-zinc-300 text-zinc-800 font-semibold rounded-lg hover:bg-red-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 bg-zinc-300 text-zinc-800 font-semibold rounded-lg hover:bg-green-300 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Card; 