import React, { useState, useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';

const Loading = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null); // Change to null initially

  useEffect(() => {
    setLoader(true);
    const getData = async () => {
      try {
        const res = await fetch("http://65.1.54.123:7000/api/marks/student-marks?registration_number=MIT2022E00739");
        const finalRes = await res.json();
        
        // Set the response directly to data
        setData(finalRes);
        toast.success("Successfully Fetched Data");
      } catch (error) {
        toast.error("Failed to Fetch Data");
        setData(null); // Set to null on error
      } finally {
        setLoader(false);
      }
    };

    const timer = setTimeout(() => {
      getData();
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="hero">
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
      {loader ? ( <Watch /> ) : (data ? (
          <>
            <div className="row">
              <div className="col-md-2">
                <h6>Name: {data.name}</h6>
              </div>
              <div className="col-md-2">
                <h6>Email: {data.email}</h6>
              </div>
              <div className="col-md-2">
                <h6>Registration Number: {data.registration_number}</h6>
              </div>
            </div>
            {data.flattenedData.map((subject, i) => (
              <div key={i} className="row">
                <div className="col-md-3">
                  <h6>Subject: {subject.subject_name}</h6>
                </div>
                {subject.assignments.length > 0 ? (
                  subject.assignments.map((assignment, j) => (
                    <div key={j} className="row">
                      <div className="col-md-2">
                        <h6>Assignment: {assignment.assignment}</h6>
                      </div>
                      <div className="col-md-2">
                        <h6>Attempts: {assignment.atmpt}</h6>
                      </div>
                      <div className="col-md-2">
                        <h6>Marks: {assignment.mk}/{assignment.tm}</h6>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-md-3">
                    <h6>No assignments available</h6>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <div>No data available</div>
        )
      )}
    </div>
  );
};

export default Loading;
