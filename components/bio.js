import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import BioContact from './bioContact';

export default function Bio() {
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setIsLoading] = useState(true); // To show loading state
  const router = useRouter();
  const { userId } = router.query; // Get userId from the URL

  useEffect(() => {
    const fetchCompanyData = async () => {
      if (userId) {
        // Ensure userId is available
        try {
          const docRef = doc(db, 'users', userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setCompanyName(data.companyName || 'Company Name'); // Set company name
          } else {
            console.error('No such document!');
            setCompanyName('Company Name'); // Default value if no data found
          }
        } catch (error) {
          console.error('Error fetching company data: ', error);
        }
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, [userId]); // Dependency array includes userId

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading state while fetching data
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="w-fit text-3xl">{companyName || 'Company Name'}</h1>
      <BioContact />
    </div>
  );
}
