import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EditBio from '../components/dashboard/edit-bio';
import NewNav from '../components/dashboard/new-nav';
import { auth, db } from '../firebase';

export default function Links() {
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [router]);
  return (
    <div className=" bg-neutral-100 h-screen">
      <NewNav />
      <EditBio />
    </div>
  );
}
