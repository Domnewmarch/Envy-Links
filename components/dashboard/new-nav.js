/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from 'firebase/auth';
import { Fragment, useEffect, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: 'Links', href: '/links' },
  { name: 'Profile', href: '/appearance' }
];

// Determine the base URL based on the environment
const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://domnewmarch-links.vercel.app';

export default function NewNav() {
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        onAuthStateChanged(auth, user => {
          if (user) {
            setUserUid(user.uid);
          } else {
            setUserUid(null);
          }
        });
      })
      .catch(error => {
        console.error('Error setting persistence: ', error);
      });
  }, []);

  const profileUrl = userUid ? `${baseUrl}/${userUid}` : baseUrl;
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="w-11/12 mx-auto border-b">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="block lg:hidden h-8 w-auto" src="/img/envy-logo.png" alt="Workflow" />
                  <img className="hidden lg:block h-8 w-auto" src="/img/envy-logo.png" alt="Workflow" />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                      </Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="/img/headshot-1.png" alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Dom Newmarch</div>
                  <div className="text-sm font-medium text-gray-400">dom@parall.ax</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Disclosure.Button as="a" href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
          <div className="w-11/12 m-auto py-4 flex items-center justify-between border-b">
            <div className="flex items-center">
              <div className="">
                <a className="underline envy-blue overflow-auto" href={profileUrl}>
                  View your link page
                </a>
              </div>
            </div>
          </div>
          <div className="w-11/12 m-auto py-4 flex items-center justify-between border-b">
            <div className="flex space-x-4">
              {navigation.map(link => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-500 hover:font-semibold hover:underline">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
