import React, { useState, useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';

const Studentapidata = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoader(true);
    const getData = async () => {
      try {
        const res = await fetch("http://65.1.54.123:7000/api/marks/student-marks?registration_number=MIT2022E00739");
        const finalRes = await res.json();
        setData(finalRes);
        toast.success("Successfully Fetched Data");
      } catch (error) {
        toast.error("Failed to Fetch Data");
        setData(null);
      } finally {
        setLoader(false);
      }
    };

    const timer = setTimeout(() => {
      getData();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero">
    
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

      {loader ? (
        <Watch />
      ) : (
        data ? (
          <>
            <div className="student-info">
              <h6>Name: {data.name}</h6>
              <h6>Email: {data.email}</h6>
              <h6>Registration Number: {data.registration_number}</h6>
              <h6>Contact Number: {data.contact_number}</h6>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Assignment</th>
                  <th>Attempts</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {data.flattenedData.map((subject, i) => (
                  <React.Fragment key={i}>
                    {subject.assignments.length > 0 ? (
                      subject.assignments.map((assignment, j) => (
                        <tr key={j}>
                          {j === 0 && (
                            <td rowSpan={subject.assignments.length}>
                              {subject.subject_name}
                            </td>
                          )}
                          <td>{assignment.assignment}</td>
                          <td>{assignment.atmpt}</td>
                          <td>{assignment.mk}/{assignment.tm}</td>
                        </tr>
                      ))
                    ) : (
                      <tr key={i}>
                        <td>{subject.subject_name}</td>
                        <td colSpan="3">No assignments available</td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div>No data available</div>
        )
      )}
    </div>
  );
};

export default Studentapidata;
