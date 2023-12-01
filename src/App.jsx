import { Route, Routes } from 'react-router'
import './App.css'
import AuthProvider from './provider/AuthProvider'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import Blog from './pages/Blog/Blog'
import BlogArticle from './pages/Blog/BlogArticle'
import UserSettingsForm from './pages/settings/UserSettingsForm'
import ProtectedRoute from './routes/ProtectedRoute'
import Todos from './pages/Todo/Todos'
import RegisterForm from './pages/RegisterForm'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/todos" element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogArticle />} />
          <Route path="/settings" element={
            <ProtectedRoute>
              <UserSettingsForm />
            </ProtectedRoute>
          } />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
