import DoctorFilterBar from "./DoctorFilterBar";
import NurseFilterBar from "./NurseFilterBar";
import PharmacyFilterBar from "./PharmacyFilterBar";

function FilterBar({ role, setEndPoint }) {
  return (
    <div>
      {(role == "doctor" && <DoctorFilterBar setEndPoint={setEndPoint} />) ||
        (role == "nurse" && <NurseFilterBar setEndPoint={setEndPoint} />) ||
        (role == "pharmacy" && <PharmacyFilterBar setEndPoint={setEndPoint} />)}
    </div>
  );
}

export default FilterBar;
