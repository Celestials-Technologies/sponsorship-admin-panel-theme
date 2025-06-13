import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "@/shared/ui/NotFoundPage"
import { Signup } from "@/pages/signup";
import { Login } from "@/pages/login";
import { ForgetPassword } from "@/pages/forget-password";
import { MainLayout } from "./layout/main-layout";
import { LoginDetail } from "@/pages/login-detail/ui/LoginDetail";
import { DashboardHome } from "@/pages/dashboard-home/ui/DashboardHome";
import { StartUpPlan } from "@/pages/startup-plan/ui/startup-plan";
import { ProPlan } from "@/pages/pro-plan";
import { FeaturedSponsorshipOpportunities } from "@/pages/featured-sponsorship-opportunities";
import { FeaturedContentEntrepreneurs } from "@/pages/featured-content-entrepreneurs";
import { PartnerApps } from "@/pages/partner-apps";
import { YoutubeChannel } from "@/pages/youtube-channel";
import { PlansAndPricing } from "@/pages/plans-and-pricing";
import { Account } from "@/pages/account";
import { CancleOffer } from "@/pages/cancle-offer";
import { Team } from "@/pages/team";
import { FAQ } from "@/pages/faq";
import { ContactUs } from "@/pages/contact-us";
import { Affiliate } from "@/pages/affiliate";
import { ApiPage } from "@/pages/api";
import { Reseller } from "@/pages/reseller";
import { PaymentDetail } from "@/pages/payment-detail";

function App() {
  const routesDefination = createRoutesFromElements(
    <Route path='/' errorElement={<NotFoundPage />} element={<MainLayout />} >
      <Route index element={<DashboardHome />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='forget-Password' element={<ForgetPassword />} />
      <Route path='login-detail' element={<LoginDetail />} />
      <Route path='startup-plan' element={<StartUpPlan />} />
      <Route path='pro-plan' element={<ProPlan />} />
      <Route path='opportunities' element={<FeaturedSponsorshipOpportunities />} />
      <Route path='Entrepreneurs' element={<FeaturedContentEntrepreneurs />} />
      <Route path='partner-apps' element={<PartnerApps />} />
      <Route path='youtube-channel' element={<YoutubeChannel />} />
      <Route path='plans-and-pricing' element={<PlansAndPricing />} />
      <Route path='account' element={<Account />} />
      <Route path='cancle-offer' element={<CancleOffer />} />
      <Route path='team' element={<Team />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='affiliate' element={<Affiliate />} />
      <Route path='api' element={<ApiPage />} />
      <Route path='reseller' element={<Reseller />} />
      <Route path='payment-detail' element={<PaymentDetail />} />
    </Route>
  )
  const routes = createBrowserRouter(routesDefination)

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
