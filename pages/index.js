import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ThemeToggle from '../components/darkButton';
import { auth } from '../firebase';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setIsAuthenticated(true); // User is logged in
    }
  }, []);

  const handleGoToProfile = () => {
    const user = auth.currentUser;
    if (user) {
      router.push(`/${user.uid}`); // Redirect to the user's public page
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <ThemeToggle />
      <h1 className="text-4xl font-bold mb-4">Welcome to LinkShare!</h1>
      <p className="text-xl mb-8">Share your links with the world, or explore other users' profiles.</p>

      {isAuthenticated ? (
        <button onClick={handleGoToProfile} className="mb-4 px-6 py-2 bg-blue-500 text-white rounded">
          Go to My Profile
        </button>
      ) : (
        <>
          <Link href="/login">
            <button className="mb-4 px-6 py-2 bg-green-500 text-white rounded">Login</button>
          </Link>
          <Link href="/signup">
            <button className="mb-4 px-6 py-2 bg-blue-500 text-white rounded">Sign Up</button>
          </Link>
        </>
      )}

      <Link href="/explore">
        <button className="mt-8 px-6 py-2 bg-gray-500 text-white rounded">Explore Public Profiles</button>
      </Link>
    </div>
  );
}
