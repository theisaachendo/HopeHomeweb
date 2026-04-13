import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { About } from '@/pages/About'
import { HopeGivesBack } from '@/pages/about/HopeGivesBack'
import { InspectorProfile } from '@/pages/about/InspectorProfile'
import { MeetTheTeam } from '@/pages/about/MeetTheTeam'
import { Reviews } from '@/pages/about/Reviews'
import { ServiceAreas } from '@/pages/about/ServiceAreas'
import { ServiceAreaDetail } from '@/pages/about/ServiceAreaDetail'
import { Careers } from '@/pages/Careers'
import { Contact } from '@/pages/Contact'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Resources } from '@/pages/Resources'
import { ServiceDetail } from '@/pages/ServiceDetail'
import { Services } from '@/pages/Services'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="about/hope-gives-back" element={<HopeGivesBack />} />
          <Route path="about/meet-the-team/:slug" element={<InspectorProfile />} />
          <Route path="about/meet-the-team" element={<MeetTheTeam />} />
          <Route path="about/reviews" element={<Reviews />} />
          <Route path="about/service-areas" element={<ServiceAreas />} />
          <Route path="about/service-areas/:slug" element={<ServiceAreaDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
          <Route path="careers" element={<Careers />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
