import BloodChart from "@/components/UIElements/BloodChart";
import TestingRequest from "./TestingRequest";
import "react-toastify/dist/ReactToastify.css";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import Loading from "../UIElements/Loading";
import Inventrory from "./Inventrory";
import About from "./About";
import HospitalRequest from "./HospitalRequest";
import { useRequestManagement } from "./requestCustomHook";

export default function Dashboard() {
  const {
    loading,
    amount,
    rejectRequest,
    acceptRequest,
    approvedRequests,
    pendingRequests,
  } = useRequestManagement();

  return (
    <ResponsiveLayout>
      {loading && <Loading /> }
      <div className="flex gap-4 min-h-screen py-8 px-8 bg-[#F7F8FA]">
        <div className="flex flex-col flex-[5] gap-4">
          <Inventrory amount={amount} />
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <About />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1">
                <BloodChart />
              </div>
              <TestingRequest approvedRequests={approvedRequests} />
            </div>
          </div>
        </div>
        <HospitalRequest
          amount={amount}
          pendingRequests={pendingRequests}
          acceptRequest={acceptRequest}
          rejectRequest={rejectRequest}
        />
      </div>
    </ResponsiveLayout>
  );
}
