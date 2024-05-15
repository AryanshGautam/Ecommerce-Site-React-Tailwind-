import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Link } from "react-router-dom";
import './Navbar.css'



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ cartitems }) {

  const [value, setValue] = useState('');
  

  useEffect(()=> {
    let localUsername = localStorage.getItem("username");
    if(localUsername!=''){
        setValue(localUsername);
    }
  }, []);


  const mlog= value ? `Welcome, ${value}` : 'Login';
  
  const navigation = [
    { name: `${mlog}`, href: "/signpage", current: false },
    { name: "Home", href: "/", current: true },
    { name: "Men", href: "/Men", current: false },
    { name: "Women", href: "/Women", current: false },
    { name: "Kids", href: "/Kids", current: false },
    { name: "Cart", href: "/Cart", current: false },
  ];

  const handleLogout = () => {
    
    localStorage.clear(); // local storage cleared
    sessionStorage.clear(); // session storage cleared
    window.location.reload();
};



  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">


                  <Link
                      key="signpage"
                      to="/signpage"
                      className={classNames(
                        false
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={false ? "page" : undefined}
                    >
                      {value ? `Welcome, ${value}` : 'Login'}
                    </Link>
                    
                    <Link
                      key="Home"
                      to="/"
                      className={classNames(
                        true
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={true ? "page" : undefined}
                    >
                      Home
                    </Link>
                    <Link
                      key="Men"
                      to="/Men"
                      className={classNames(
                        false
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={true ? "page" : undefined}
                    >
                      Men
                    </Link>
                    <Link
                      key="Women"
                      to="/Women"
                      className={classNames(
                        false
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={true ? "page" : undefined}
                    >
                      Women
                    </Link>
                    <Link
                      key="Kids"
                      to="/Kids"
                      className={classNames(
                        false
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={false ? "page" : undefined}
                    >
                      Kids
                    </Link>
                    <Link
                      key="Cart"
                      to="/Cart"
                      cartitems={cartitems}
                      className={classNames(
                        false
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={false ? "page" : undefined}
                    >
                      Cart
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 bg-transparent">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-transparent hover:bg-transparent text-sm focus:outline-none focus:ring-none focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-7 w-7 mt-5 rounded-full"
                        src="/images/user.jpeg"
                        alt=""
                      />
                    </Menu.Button>
                    <Menu.Button>
                      {/* <GoogleOAuthProvider target="blank" clientId="273416793896-fp1pci19es88rrsj4mokgfd27io00thv.apps.googleusercontent.com">
                      <GoogleLogin
                          onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                          }}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                          />
                      </GoogleOAuthProvider> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                       <Menu.Item>
                        {({ active }) => (
                          <Link
                          to="Profile"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )} onClick={handleLogout}
                        >
                          Logout
                        </Link>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}