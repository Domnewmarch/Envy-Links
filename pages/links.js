import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NewNav from '../components/dashboard/new-nav';
import NewLinkBlock from '../components/dashboard/newLinkBlock';
import { auth } from '../firebase';

export default function Links() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const user = auth.currentUser;
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        router.push('/login'); // Redirect to login if user is not authenticated
      }
    };

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner, or redirecting logic
  }

  return (
    <div className="bg-neutral-100 h-screen">
      <NewNav />
      <NewLinkBlock />
    </div>
  );
}
