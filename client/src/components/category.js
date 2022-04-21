import React from "react";
import '../css/Category.css';
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
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: false },
  { name: "User Management", href: "/user", icon: UsersIcon, current: false },
  { name: "Brand", href: "/brand", icon: FolderIcon, current: false },
  { name: "Category", href: "/store", icon: CalendarIcon, current: true },
  { name: "Product", href: "/product", icon: InboxIcon, current: false },
  { name: "Order", href: "/order", icon: ChartBarIcon, current: false },
  { name: "Report", href: "/report", icon: HomeIcon, current: false },
  { name: "Groups", href: "/company", icon: UsersIcon, current: false },
  { name: "Settings", href: "/setting", icon: FolderIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const auth = getAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
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
                  Category
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="">
                    {
                 <div className="category-main">
                 <button type="button" class="btn btn-primary group-button btn-raised">
                   <i class="fas fa-plus-square" style={{ marginRight: 5 }} />
                   Add Category
                 </button>
                 <form action="" class="navbar-form navbar-right search-form">
                   <div class="input-group">
                     <input type="Search" placeholder="Search..." class="form-control" />
                   </div>
                 </form>
                 <select class="browser-default custom-select select-position">
                   <option selected>10</option>
                   <option value="1">15</option>
                   <option value="2">20</option>
                   <option value="3">50</option>
                 </select>
         
                 <table
                   id="dtBasicExample"
                   class="table table-striped table-bordered table-add-group"
                   cellspacing="0"
                   width="100%"
                 >
                   <thead class="thead-dark">
                     <tr>
                       <th class="th-sm">Category</th>
                       <th class="th-sm">Status</th>
                       <th class="th-sm">Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>HIM</td>
                       <td>Active</td>
                       <td>
                         <button
                           type="button"
                           class="btn btn-primary btn-xs btn-edit-del center-block"
                         >
                           <i class="fas fa-edit" />
                         </button>
                         <button
                           type="button"
                           class="btn btn-danger btn-xs btn-edit-del"
                         >
                           <i class="fas fa-trash-alt" />
                         </button>
                       </td>
                     </tr>
                     <tr>
                       <td>HER</td>
                       <td>Active</td>
                       <td>
                         <button
                           type="button"
                           class="btn btn-primary btn-xs btn-edit-del"
                         >
                           <i class="fas fa-edit" />
                         </button>
                         <button
                           type="button"
                           class="btn btn-danger btn-xs btn-edit-del"
                         >
                           <i class="fas fa-trash-alt" />
                         </button>
                       </td>
                     </tr>
                     <tr>
                       <td>HIM/HER</td>
                       <td>Active</td>
                       <td>
                         <button
                           type="button"
                           class="btn btn-primary btn-xs btn-edit-del"
                         >
                           <i class="fas fa-edit" />
                         </button>
                         <button
                           type="button"
                           class="btn btn-danger btn-xs btn-edit-del"
                         >
                           <i class="fas fa-trash-alt" />
                         </button>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>  }
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
