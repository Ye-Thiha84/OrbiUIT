import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

import AdminPage from "./pages/AdminPage.tsx";
import AdminDashboard from "./components/admin/AdminDashboard.tsx";
import AdminPost from "./components/admin/AdminPost.tsx";
import AdminMember from "./components/admin/AdminMemberManagement.tsx";
import AdminProfile from "./components/admin/AdminProfile.tsx";

import MemberPage from "./pages/MemberPage.tsx";
import MemberDashboard from "./components/member/MemberDashboard.tsx";
import MemberMajor from "./components/member/MemberMajor.tsx";
import MemberProfile from "./components/member/MemberProfile.tsx";
import MemberSocialMedia from "./components/member/MemberSocialMedia.tsx";

import PrivateRoute from "./components/routing/PrivateRoute.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="orbi-uit-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />

            {/* admin */}
            <Route path="/admin" element={<AdminPage />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="post" element={<AdminPost />} />
              <Route path="member-management" element={<AdminMember />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>

            {/* member */}
            <Route path="/member" element={<MemberPage />}>
              <Route index element={<MemberDashboard />} />
              <Route path="dashboard" element={<MemberDashboard />} />
              <Route path="social-media" element={<MemberSocialMedia />} />
              <Route path="major" element={<MemberMajor />} />
              <Route path="profile" element={<MemberProfile />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
