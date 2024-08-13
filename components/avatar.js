import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';

export default function Avatar({ userId }) {
  const [logoUrl, setLogoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true); // To show loading state

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const docRef = doc(db, 'users', userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setLogoUrl(data.logoUrl || '/img/default-avatar.png'); // Fallback to a default image if no logo URL
          }
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching user data: ', error);
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="bg-white w-11/12 max-w-md mx-auto rounded-xl shadow-md my-4 p-4">
      {isLoading ? (
        <div>Loading avatar...</div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="mb-6 h-40 w-40 overflow-hidden rounded-full">
            <img className="aspect-square h-auto w-full object-contain" src={logoUrl} alt="User Avatar" />
          </div>
        </div>
      )}
    </div>
  );
}
