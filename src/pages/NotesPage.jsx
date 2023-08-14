import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "../components/Notespage/NoteCard/NoteCard";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import { BsPlusLg } from "react-icons/bs";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function NotesPage() {

  
  const dispatch = useDispatch();
  const { auth, token} = useSelector((state) => state.userReducer)
  if (auth) {
    toast.success('LoggedIn Successfully')
    
  }
  const {data } = useSelector((state) => state.noteReducer);
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // const initialRef = useRef(null);
  // const finalRef = useRef(null);
  const[day,setDay]=useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote = () => {
    dispatch(createNotes({ day, title, body }));
    setIsOpen(false);
    // Clear input fields after creating a note
    setDay("");
    setTitle("");
    setBody("");
  };
  return (
    <div className="min-h-screen bg-bkg text-content">
      <header className="py-4 bg-white shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800">Your Daily Diary</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {notes?.map((el) => (
            <NoteCard {...el} key={el.id} />
          ))}
        </div>
      </main>
      <>
        <button
          className="fixed bottom-8 right-8 p-4 bg-gray-700 text-white rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <BsPlusLg className="text-3xl" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Preserve a New Memoir</h2>
              <button
                className="absolute top-4 right-4 text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <input
                className="mb-4 p-2 border rounded border-gray-300 w-full"
                value={day}
                placeholder="Date and Day"
                onChange={(e)=>setDay(e.target.value)}
              />
              <input
                className="mb-4 p-2 border rounded border-gray-300 w-full"
                value={title}
                placeholder="Please enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="mb-4 p-2 border rounded border-gray-300 w-full h-32 resize-none"
                value={body}
                placeholder="Please enter description"
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={createNote}
                >
                  Create
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </>
      
      
      
    </div>
  );
}
