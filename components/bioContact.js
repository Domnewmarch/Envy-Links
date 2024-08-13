import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';

export default function BioContact() {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: ''
  });

  useEffect(() => {
    const fetchSocialLinks = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setSocialLinks(data.socialLinks || {});
        }
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <ul className="my-4 flex space-x-4">
      {socialLinks.facebook && (
        <li>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
      )}
      {socialLinks.instagram && (
        <li>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
      )}
      {socialLinks.linkedin && (
        <li>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
        </li>
      )}
      {socialLinks.twitter && (
        <li>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </li>
      )}
    </ul>
  );
}
