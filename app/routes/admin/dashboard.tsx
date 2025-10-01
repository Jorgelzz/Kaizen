import { Link } from "react-router";

const dashboard = () => {
  return (
    <div>
      <h1>Dashboard Admin</h1>
      <Link to="/users">Go to users list</Link>
    </div>
  );
};

export default dashboard;
