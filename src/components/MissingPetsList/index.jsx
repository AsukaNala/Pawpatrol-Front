import { useEffect } from "react";
import { getMissingPets, useMissingPet } from "../../context/MissingPetContext";

const MissingPetsList = () => {
  const {
    state: { missingPets, loading, error },
    dispatch,
  } = useMissingPet();

  useEffect(() => {
    async function fetchData() {
      await getMissingPets(dispatch);
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {missingPets.map((missingPet) => (
          <li key={missingPet.id}>{missingPet.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default MissingPetsList;
