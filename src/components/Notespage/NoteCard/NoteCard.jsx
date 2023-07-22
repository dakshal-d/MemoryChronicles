import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import { useRef, useState } from "react";

export default function NoteCard({ day,title, body, user, _id }) {
  const dispatch = useDispatch();
  // const [notes, setNotes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [tempDay, setDay] = useState(day);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote = () => {
    dispatch(updateNotes(_id, {day:tempDay, title: tempTitle, body: tempBody }));
    setModalOpen(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-800">{day}</p>
        <p className="text-gray-800">{body}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setModalOpen(true)}
          >
            Show/Update
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-white p-4 rounded-lg z-10">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Update Note</h3>
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-800"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
                <input
                  className="w-full border border-gray-300 rounded p-2 mb-4"
                  value={tempDay}
                  placeholder="Please enter the Day and Date"
                  onChange={(e) => setDay(e.target.value)}
                />
                <input
                  className="w-full border border-gray-300 rounded p-2 mb-4"
                  value={tempTitle}
                  placeholder="Please enter title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="w-full h-32 border border-gray-300 rounded p-2"
                  value={tempBody}
                  placeholder="Please enter description"
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
                    onClick={updateNote}
                  >
                    Update
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => {
            dispatch(deleteNotes(_id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
