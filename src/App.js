import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";



// '++id, accountBalance, accountNumber, createdAt, education, email, guarantor, id, lastActiveDate, orgName, phoneNumber, profile, socials, userName'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/"> */}
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="/">
              <Route index element={<Dashboard />} />
              {/* <Route path=":userId" element={<User />} /> */}
              {/* <Route
                path="newuser"
                element={<NewUser/>}
              /> */}
            </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;