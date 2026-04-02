import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="card" style={{ width: "200px" }}>
      <label>
        Role:
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </label>
    </div>
  );
};

export default RoleSwitcher;
