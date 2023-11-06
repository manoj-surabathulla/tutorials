// import React from 'react'

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1>Dashboard</h1>
      <div className="flex my-4">
        <Link className="mr-8" to="/birthday">
          Birthday
        </Link>
        <Link className="mr-8" to="/tours">
          Tours
        </Link>
        <Link className="mr-8" to="/menu">
          Menu
        </Link>
        <Link className="mr-8" to="/grocery">
          Grocery
        </Link>
        <Link className="mr-8" to="/cart">
          Cart
        </Link>
        <Link className="mr-8" to="/to-do">
          ToDo
        </Link>
        <Link className="mr-8" to="/dropdown">
          Dropdown
        </Link>
        <Link className="mr-8" to="/management">
          Management
        </Link>
        <Link className="mr-8" to="/expense-tracker">
          Expense Tracker
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
