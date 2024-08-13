import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Avatar from '../components/avatar';
import Bio from '../components/bio';
import ThemeToggle from '../components/darkButton';
import DesktopImage from '../components/desktopImage';
import Footer from '../components/footer';
import LinkBlock from '../components/linkBlock';
import { auth, db } from '../firebase';

export default function UserHome() {
  const [links, setLinks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userExists, setUserExists] = useState(true); // Track if user exists
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      const user = auth.currentUser;
      const userDocRef = doc(db, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        setUserExists(false);
        setIsLoading(false);
        return;
      }

      if (user && user.uid === userId) {
        setIsAuthenticated(true); // Logged-in user is viewing their own page
      } else {
        setIsAuthenticated(false); // Public view of someone else's page
      }

      const q = query(collection(db, 'users', userId, 'links'));
      const querySnapshot = await getDocs(q);
      const links = querySnapshot.docs.map(doc => doc.data());
      setLinks(links);
      setIsLoading(false);
    };

    fetchData();
  }, [userId]);

  const handleEditLinks = () => {
    router.push('/links');
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push(`/${userId}`);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userExists) {
    return <div className="text-center mt-12">User does not exist, please scan the QR code again!</div>;
  }

  return (
    <div className="relative flex">
      <div className="mt-12 mb-8 w-screen 2xl:w-6/12">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center px-4">
          <Avatar userId={userId} />
          <Bio />
          {isAuthenticated && (
            <div className="flex justify-between m-auto w-full gap-3">
              <button onClick={handleEditLinks} className="mb-4 w-full px-4 py-2 bg-blue-500 text-white rounded">
                Edit Links
              </button>
              <button onClick={handleLogout} className="mb-4  w-full px-4 py-2 bg-blue-500 text-white rounded">
                Logout
              </button>
            </div>
          )}
          {links.map((link, i) => (
            <LinkBlock key={i} links={link} />
          ))}
          <Footer />
        </div>
      </div>
      <DesktopImage />
    </div>
  );
}
