import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import NewLink from './newLink';

export default function NewLinkBlock() {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // To show loading state

  useEffect(() => {
    const fetchLinks = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'links'));
          const fetchedLinks = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setLinks(fetchedLinks);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching links: ', error);
        }
      }
    };

    fetchLinks();
  }, []);

  const addLink = async link => {
    const user = auth.currentUser;
    if (user) {
      try {
        const docRef = await addDoc(collection(db, 'users', user.uid, 'links'), link);
        console.log('Document written with ID: ', docRef.id);
        setLinks([...links, { id: docRef.id, ...link }]); // Update local state with the new link
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  const editLink = async (id, updatedLink) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const linkDoc = doc(db, 'users', user.uid, 'links', id);
        await updateDoc(linkDoc, updatedLink);
        setLinks(links.map(link => (link.id === id ? { id, ...updatedLink } : link)));
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    }
  };

  const deleteLink = async id => {
    const user = auth.currentUser;
    if (user) {
      try {
        await deleteDoc(doc(db, 'users', user.uid, 'links', id));
        setLinks(links.filter(link => link.id !== id));
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  };

  if (isLoading) {
    return <div>Loading links...</div>; // Render a loading state while fetching data
  }

  return (
    <>
      <div className="my-2">
        <h6 className="text-center text-base font-semibold text-gray-500 uppercase">Add your links </h6>
        <div className="bg-neutral-100 pb-4">
          <div className="flex items-center m-auto justify-center">
            {/* Add NewLink component */}
            <NewLink onSave={addLink} />
          </div>
        </div>
        <div className="bg-white w-11/12 max-w-md mx-auto rounded-xl shadow-md my-4">
          <h6 className="text-center text-base font-semibold text-gray-500 uppercase">Your Links</h6>
          <ul>
            {links.map(link => (
              <li key={link.id} className="flex flex-col justify-between items-start py-2 px-4 border-b">
                <input type="text" className="w-full mb-2 px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" value={link.title} onChange={e => editLink(link.id, { ...link, title: e.target.value })} placeholder="Link Title" />

                <input type="text" className="w-full px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" value={link.url} onChange={e => editLink(link.id, { ...link, url: e.target.value })} placeholder="Link URL" />

                <button className="text-red-500 mt-2" onClick={() => deleteLink(link.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
