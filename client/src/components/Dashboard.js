import "../css/dashboard.css";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { getAuth, signOut } from "firebase/auth";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "User Management", href: "/user", icon: UsersIcon, current: false },
  { name: "Brand", href: "/brand", icon: FolderIcon, current: false },
  { name: "Store", href: "/store", icon: CalendarIcon, current: false },
  { name: "Product", href: "/product", icon: InboxIcon, current: false },
  { name: "Order", href: "/order", icon: ChartBarIcon, current: false },
  { name: "Report", href: "/report", icon: HomeIcon, current: false },
  { name: "Company", href: "/company", icon: UsersIcon, current: false },
  { name: "Settings", href: "/settings", icon: FolderIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const auth = getAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      // const auth = getAuth();
                      await signOut(auth).then(() => {
                        // console.log(User)
                        localStorage.removeItem("User");
                        window.location.replace("/");
                      });
                    }}
                    className="flex-shrink-0 group block"
                  >
                    <div className="flex items-center">
                      <p>Log Out</p>
                    </div>
                  </button>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  // const auth = getAuth();
                  await signOut(auth).then(() => {
                    // console.log(User)
                    localStorage.removeItem("User");
                    window.location.replace("/");
                  });
                }}
                className="flex-shrink-0 group block"
              >
                <div className="flex items-center">
                  <p>Log Out</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="">
                    <div className="dash-main card">
                      <table className="table ">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="dashDiv card green">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Products
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="dashDiv card blue">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Users
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="dashDiv card yellow">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Groups
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="dashDiv card orange">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Brands
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="dashDiv card green">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Categories
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="dashDiv card blue">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Stores
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="dashDiv card yellow">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Attributes
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="dashDiv card orange">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Orders
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="dashDiv card green">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Companies
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="dashDiv card blue">
                                <p>
                                  <h7 className="colorwhite card-header">
                                    Total Reports
                                  </h7>
                                </p>
                                <p>
                                  <h2 className="colorwhite">2</h2>
                                </p>
                                <p>
                                  <i className="fas fa-chart-bar colorwhite iconsize" />
                                </p>
                              </div>
                            </td>
                            <td />
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
