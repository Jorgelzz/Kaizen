import { Link } from "react-router";

const users = () => {
  return (
    <div>
      <h1>Admin Users</h1>
      <Link to="/dashboard">Go to dashboard</Link>
    </div>
  );
};

export default users;
