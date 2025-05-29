import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Dashboard from "./pages/Dashboard";
import NovaSolicitacaoForm from "./components/NovaSolicitacaoForm";

function App() {
    return (
        <Router>
            <Routes>
                {/* página inicial */}
                <Route path="/" element={<Home />} />

                {/* cadastro de solicitante (mantém o /form) */}
                <Route path="/form" element={<Forms />} />

                {/* dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* 👉 nova rota para o formulário de solicitação */}
                <Route path="/nova-solicitacao" element={<NovaSolicitacaoForm />} />
            </Routes>
        </Router>
    );
}

export default App;
