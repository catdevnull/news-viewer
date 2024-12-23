import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import LoadedArticlesPage from "./pages/LoadedArticlesPage";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Sidebar />
        <main className="pl-0 md:pl-16 pt-16">
          <ErrorBoundary fallback={<div>algo salio mal</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/loaded-articles" element={<LoadedArticlesPage />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;
