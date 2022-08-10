import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";

function AddStudent() {
  const showAlert = (e) => {
    <div
      class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
      role="alert"
    >
      <div class="flex">
        <div class="py-1">
          <svg
            class="fill-current h-6 w-6 text-teal-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p class="font-bold">Our privacy policy has changed</p>
          <p class="text-sm">
            Make sure you know how these changes affect you.
          </p>
        </div>
      </div>
    </div>;
  };

  const navigate = useNavigate();
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    course: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const saveStudent = (e) => {
    e.preventDefault();
    StudentService.saveStudent(student)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto my-5 shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Student Application</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            required
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
            required
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
            required
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
            onClick={(e) => {
              saveStudent(e);

              showAlert(e);
            }}
            className="rounded text-white font-regular bg-green-400 hover:bg-green-700 py-2 px-2"
          >
            Save
          </button>

          <button
            onClick={() => navigate("/studentList")}
            className="rounded text-white font-regular bg-gray-400 hover:bg-gray-700 py-2 px-2 left"
          >
            Go To List
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
