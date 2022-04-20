import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "react-simple-snackbar";

import { MenuIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";


const Setting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  return (
    <div>
    {/* Static sidebar for desktop */}
    <Sidebar />

    {/* Static sidebar for desktop */}

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
              Settings
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
            
            
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Setting
