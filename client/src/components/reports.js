import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "react-simple-snackbar";

import { MenuIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";
import { BarChart } from "./charts/Barchart";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const initialState = {
    itemcode: 0,
    price: 0,
    description: "",
    name: "",
    country: "United States",
  };
  const [product, setProduct] = useState(initialState);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const addProduct = () => {
    if (
      product.name.length > 0 &&
      product.description.length > 0 &&
      parseInt(product.itemcode) > 0 &&
      parseInt(product.price) > 0
    ) {
      axios
        .post("http://localhost:9091/product/create", product)
        .then((data) => {
          openSnackbar("Product Created");
          setProduct(initialState);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      openSnackbar("Sorry Fields Can't Be Empty !!");
    }
  };

  return (
    <>
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
                  Reports
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <BarChart/>
                
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