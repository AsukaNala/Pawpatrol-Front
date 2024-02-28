import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SigninPage from "../pages/SigninPage";
import SelectPage from "../pages/SelectPage";
import PostMissingPets from "../pages/MissingPets/PostMissingPets";
import SearchMissingPets from "../pages/MissingPets/SearchMissingPets";
import PostFoundPets from "../pages/FoundPets/PostFoundPets";
import SearchFoundPets from "../pages/FoundPets/SearchFoundPets";
import Layout from "../layouts";
import MissingPetDetail from "../pages/MissingPets/MissingPetDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/missingpets/post" element={<PostMissingPets />} />
        <Route path="/missingpets/search" element={<SearchMissingPets />} />
        <Route path="/missingpets/:id" element={<MissingPetDetail />} />
        <Route path="/foundpets/post" element={<PostFoundPets />} />
        <Route path="/foundpets/search" element={<SearchFoundPets />} />
        {/* <Route path="/foundpets/:id" element={<FoundPetDetail />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
