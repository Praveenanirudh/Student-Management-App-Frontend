import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";

function ListStudent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await StudentService.getStudent();
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
  const editStudent = (e, id) => {
    e.preventDefault();
    navigate2(`/editStudent/${id}`);
  };
  const deleteStudent = (e, id) => {
    e.preventDefault();
    StudentService.deleteStudent(id).then((res) => {
      if (student) {
        setStudent((prevElement) => {
          return prevElement.filter((student) => student.id !== id);
        });
      }
    });
  };
  return (
    <div>
      <div className="h-12">
        <button
          onClick={() => navigate("/addStudent")}
          className="rounded bg-slate-600 text-white px-6 py-2 mx-8 my-4 font-semibold"
        >
          Add Student
        </button>
      </div>
      <div className="flex shadow border-b my-8 mx-8">
        <table className="min-w-full   ">
          <thead className=" bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email Id
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Course
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {student.map((student) => (
                <tr key={student.id}>
                  <td className="text-left  px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {student.firstName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {student.lastName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {student.emailId}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {student.course}
                    </div>
                  </td>

                  <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                    <a
                      onClick={(e, id) => editStudent(e, student.id)}
                      className="rounded text-white font-regular py-2  bg-green-600 hover:bg-green-800 px-4 hover:cursor-pointer"
                    >
                      Edit
                    </a>
                    <a
                      onClick={(e, id) => deleteStudent(e, student.id)}
                      className="rounded text-white font-regular bg-red-400 hover:bg-red-700  ml-5 py-2 px-2  hover:cursor-pointer"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
