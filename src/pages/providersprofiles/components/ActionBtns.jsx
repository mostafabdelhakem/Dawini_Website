import { useNavigate, useParams } from "react-router-dom";

const BackBtn = ({ patientId, role }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate(`/login/patienthome/${patientId}/findprovider/${role}`)
      }
      className="gradient-text border rounded-lg px-10 py-2 font-bold"
    >
      &lt; GO BACK
    </button>
  );
};

const BookingBtn = ({ patientId, role, providerId }) => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate(
      `/login/patienthome/${patientId}/findprovider/${role}/providerprofile/${providerId}/bookingpage`
    );
  };

  return (
    <button
      onClick={() => routeChange()}
      className="gradient-background text-white border rounded-lg px-10 py-3 font-bold"
    >
      BOOK NOW &gt;
    </button>
  );
};

const ActionBtns = () => {
  const { patientid, role, providerid } = useParams();

  return (
    <div className="w-full p-4 flex justify-between">
      <BackBtn patientId={patientid} role={role} />
      <BookingBtn patientId={patientid} role={role} providerId={providerid} />
    </div>
  );
};

export default ActionBtns;
