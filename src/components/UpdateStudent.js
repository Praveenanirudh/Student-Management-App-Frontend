import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
    course: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const updateStudent = (e) => {
    e.preventDefault();
    StudentService.updateStudent(student, id)
      .then((response) => {
        navigate("/studentList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex max-w-2xl mx-auto my-5 shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1> Update Student Application</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email Id
          </label>
          <input
            type="text"
            name="emailId"
            value={student.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Course
          </label>
          <select
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="course"
            value={student.course}
            onChange={(e) => handleChange(e)}
          >
            <option value="Course">Select Course</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Electronics Engineering">
              Electronics Engineering
            </option>
          </select>
        </div>
        <div className="items-center justify-center h-14 w-full  my-4 space-x-6 pt-4 ">
          <button
            onClick={updateStudent}
            className="rounded text-white font-regular bg-green-400 hover:bg-green-700 py-2 px-2"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/studentList")}
            className="rounded text-white font-regular bg-red-400 hover:bg-red-700 py-2 px-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudent;
