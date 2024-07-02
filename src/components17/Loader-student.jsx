import { useState } from "react";

// import { TailSpin } from "react-loader-spinner";
import { Watch } from "react-loader-spinner";
// import { Bars } from "react-loader-spinner";

import { useEffect } from "react";

import "./Style.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Loading = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoader(true);
    async function getData() {
      const res = await fetch("https://dummyapi.online/api/users");
      const finalRes = await res.json();

      setData(finalRes);
      setLoader(false);
    }
    setTimeout(() => {
      toast.success("Successfully Fetch Data");
      getData();
    }, 2000);
    // getData();
  }, []);

  return (
    <div>
      <div className="">
        <div className=" hero">
          <div className="">
            <h2>Loading Screen</h2>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />

            {/* <Bars /> */}

            {loader ? (
              <Watch />
            ) : (
              data.map((e, i) => {
                return (
                  <div className="row">
                    {/* <div className="col-md-3"><h6 key={i}>{e.name}</h6> </div> */}
                    <div className="col-md-2">
                      <h6>{e.name}</h6>{" "}
                    </div>
                    <div className="col-md-2">
                      <h6>{e.email}</h6>{" "}
                    </div>
                    <div className="col-md-2">
                      <h6>{e.address.street}</h6>{" "}
                    </div>
                    <div className="col-md-2">
                      <h6>{e.address.zipcode}</h6>{" "}
                    </div>
                    <div className="col-md-2">
                      <h6>{e.address.city}</h6>{" "}
                    </div>
                    <div className="col-md-2">
                      <h6>{e.address.street}</h6>{" "}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
