import { Main } from "./Main";
import { Members } from "./Components/MemberComponent/Members";
import { Transaction } from "./Components/TransactionComponents/Transaction";
import { Tr1 } from "./Components/TransactionComponents/Tr1";
import { Tr2 } from "./Components/TransactionComponents/Tr2";
import Books from "./Components/bookComponents/Books";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./StateManagement/store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Books />} />
            <Route path="/member" element={<Members />}></Route>
            <Route path="/transaction" element={<Transaction />}>
              <Route index element={<Tr1 />}></Route>
              <Route path="/transaction/debt" element={<Tr2 />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
      ,
    </div>
  );
}

export default App;
