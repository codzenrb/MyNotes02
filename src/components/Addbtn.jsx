import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

const Addbtn = ({ onAddCard, isEmpty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in both title and description!');
      return;
    }
    onAddCard({
      title: formData.title.trim(),
      description: formData.description.trim()
    });
    setFormData({ title: '', description: '' });
    setIsOpen(false);
  };

  return (
    <>
    {isEmpty ? (
      // Empty state - centered large button below "Notes." text
      <div 
        onClick={() => setIsOpen(true)} 
        className="fixed top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        <div className="w-32 h-32 rounded-full bg-green-300 flex items-center justify-center text-8xl text-zinc-600 hover:scale-95 transition-transform">
          <CiCirclePlus/>
        </div>
        <span className="text-white text-xl font-semibold">Add Your First Note</span>
      </div>
    ) : (
      // Regular state - small button in corner
      <div onClick={() => setIsOpen(true)} className="overflow-x-visible fixed sm:top-8 right-4 bottom-6  w-14 h-14 overflow-y-clip group text-center z-4">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-green-300 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-zinc-600 text-5xl">
          <CiCirclePlus/>
        </div>
        <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
          Add Note
        </div>
      </div>
    )}
       
    {/* Modal */}
    {isOpen && (
      <div className="form_bg fixed inset-0 flex items-center justify-center bg-zinc-500/20 bg-opacity-20 backdrop-blur-md z-50">
        <div className="bg-zinc-500/20 text-white p-6 shadow-lg w-screen  h-screen relative">
          <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold mb-4 pt-6">Add a Note</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 text-7xl text-zinc-200 font-semibold outline-none"
                placeholder="Title"
              />
            </div>
            <div className="mb-3">
              
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full h-[65vh] resize-none  px-3 py-2 outline-none text-white font-semibold text-4xl"
                placeholder="Write a Note"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({ title: '', description: '' });
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-zinc-300 text-zinc-800 font-semibold rounded-lg hover:bg-red-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-zinc-300 text-zinc-800 font-semibold rounded-lg hover:bg-green-300 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
}

export default Addbtn;



// import React, { useState } from 'react';
// import { CiCirclePlus } from "react-icons/ci";

// const Addbtn = ({ onAddCard, isEmpty }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.title.trim() || !formData.description.trim()) {
//       alert('Please fill in both title and description!');
//       return;
//     }
//     onAddCard({
//       title: formData.title.trim(),
//       description: formData.description.trim()
//     });
//     setFormData({ title: '', description: '' });
//     setIsOpen(false);
//   };

//   return (
//     <>
//     {isEmpty ? (
//       // Empty state - centered large button below "Notes." text
//       <div 
//         onClick={() => setIsOpen(true)} 
//         className="fixed top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 cursor-pointer"
//       >
//         <div className="w-32 h-32 rounded-full bg-green-300 flex items-center justify-center text-8xl text-zinc-600 hover:scale-95 transition-transform">
//           <CiCirclePlus/>
//         </div>
//         <span className="text-white text-xl font-semibold">Add Your First Note</span>
//       </div>
//     ) : (
//       // Regular state - small button in corner
//       <div onClick={() => setIsOpen(true)} className="overflow-x-visible fixed top-8 right-4 w-14 h-14 overflow-y-clip group text-center z-4">
//         <div className="flex justify-center items-center w-14 h-14 rounded-full bg-green-300 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-zinc-600 text-5xl">
//           <CiCirclePlus/>
//         </div>
//         <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
//           Add Note
//         </div>
//       </div>
//     )}
       
//     {/* Modal */}
//     {isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-zinc-500/20 bg-opacity-20 backdrop-blur-md z-50">
//         <div className="bg-zinc-900 text-white p-6 rounded-xl shadow-lg w-96 relative max-h-[90vh] flex flex-col">
//           <h2 className="text-xl font-semibold mb-4">Add a Note</h2>
//           <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
//             <div className="mb-3">
//               <label className="block text-sm mb-1">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
//                 placeholder="Enter Title"
//               />
//             </div>
//             <div className="flex-grow flex flex-col mb-3">
//               <label className="block text-sm mb-1">Description</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="flex-grow w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none min-h-[300px]"
//                 placeholder="Write a Note"
//                 style={{ resize: 'none' }}
//               />
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setFormData({ title: '', description: '' });
//                   setIsOpen(false);
//                 }}
//                 className="px-4 py-2 bg-zinc-300 text-zinc-800 font-semibold rounded-lg hover:bg-red-300 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="ml-2 px-4 py-2 bg-zinc-300 text-zinc-800 font-semibold rounded-lg hover:bg-green-300 transition"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )}
//     </>
//   );
// }

// export default Addbtn;