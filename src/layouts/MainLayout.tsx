import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-50 text-brand-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
