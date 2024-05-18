import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Vibe~Mart"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9" style={{position:'fixed',right:'0',top:'35vh'}}>
            <div className="card w-75 p-3" id="userdb1">
              <h3>Hi.. <span className="dbsp">{auth?.user?.name},</span></h3>
              <h3>Email ~ <span className="dbsp">{auth?.user?.email}</span></h3>
              <h3>Current Address ~ <span className="dbsp">{auth?.user?.address}</span></h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
