import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { auth, db, storage } from '../../firebase';

export default function EditBio() {
  const [logo, setLogo] = useState(null);
  const [logoUrl, setLogoUrl] = useState('');
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  });
  const [contactDetails, setContactDetails] = useState('');
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSocialLinks(
            data.socialLinks || {
              facebook: '',
              twitter: '',
              instagram: '',
              linkedin: ''
            }
          );
          setContactDetails(data.contactDetails || '');
          setLogoUrl(data.logoUrl || '');
          setCompanyName(data.companyName || '');
        }
      }
    };

    fetchUserData();
  }, []);

  // Handle file selection for logo upload
  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  // Handle social media link changes
  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks(prevLinks => ({
      ...prevLinks,
      [platform]: value
    }));
  };

  // Save user profile information to Firestore
  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        let updatedLogoUrl = logoUrl;

        // Upload the logo to Firebase Storage if a new file was selected
        if (logo) {
          const logoRef = ref(storage, `logos/${user.uid}/${logo.name}`);
          await uploadBytes(logoRef, logo);
          updatedLogoUrl = await getDownloadURL(logoRef);
        }

        // Save the data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          socialLinks,
          contactDetails,
          logoUrl: updatedLogoUrl,
          companyName // Add companyName to the Firestore document
        });

        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      }
    } else {
      alert('Please log in to update your profile.');
    }
  };

  return (
    <div className="bg-white w-11/12 flex m-auto rounded-xl my-4 p-2">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          {logoUrl && <img src={logoUrl} alt="Profile Logo" className="w-full h-auto" />}
          <input type="file" onChange={handleFileChange} className="mt-2 block" />
        </div>
        <div className="col-span-3 flex flex-col space-y-4">
          <input type="text" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Facebook" value={socialLinks.facebook} onChange={e => handleSocialLinkChange('facebook', e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Twitter" value={socialLinks.twitter} onChange={e => handleSocialLinkChange('twitter', e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Instagram" value={socialLinks.instagram} onChange={e => handleSocialLinkChange('instagram', e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="LinkedIn" value={socialLinks.linkedin} onChange={e => handleSocialLinkChange('linkedin', e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Contact Details" value={contactDetails} onChange={e => setContactDetails(e.target.value)} className="border p-2 rounded" />
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
