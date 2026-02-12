import { createBrowserRouter } from "react-router";
import MainLayout from "@/app/components/MainLayout";
import DeveloperLayout from "@/app/components/DeveloperLayout";
import DashboardHome from "@/app/pages/DashboardHome";
import DeveloperOverview from "@/app/pages/DeveloperOverview";
import ApiTestingDashboard from "@/app/pages/ApiTestingDashboard";
import ApiListPage from "@/app/pages/ApiListPage";
import ApiDetailPage from "@/app/pages/ApiDetailPage";
import WebhookTestingPage from "@/app/pages/WebhookTestingPage";
import ApiLogsPage from "@/app/pages/ApiLogsPage";
import ApiTransactionLog from "@/app/pages/ApiTransactionLog";
import VerificationDashboard from "@/app/pages/VerificationDashboard";
import VerificationApiList from "@/app/pages/VerificationApiList";
import VerificationTestingPage from "@/app/pages/VerificationTestingPage";
import DigilockerPage from "@/app/pages/DigilockerPage";
import OcrResultsPage from "@/app/pages/OcrResultsPage";
import VerificationLogsPage from "@/app/pages/VerificationLogsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: DashboardHome }
    ],
  },
  {
    path: "/",
    Component: DeveloperLayout,
    children: [
      { path: "developer", Component: DeveloperOverview },
      { path: "developer/transaction-logs", Component: ApiTransactionLog },
      { path: "api-testing", Component: ApiTestingDashboard },
      { path: "api-testing/:category", Component: ApiListPage },
      { path: "api-testing/:category/:apiId", Component: ApiDetailPage },
      { path: "api-testing/webhooks/test", Component: WebhookTestingPage },
      { path: "api-testing/logs", Component: ApiLogsPage },
      { path: "verification-apis", Component: VerificationDashboard },
      { path: "verification-apis/:category", Component: VerificationApiList },
      { path: "verification-apis/:category/:apiId", Component: VerificationTestingPage },
      { path: "verification-apis/digilocker/flow", Component: DigilockerPage },
      { path: "verification-apis/ocr/:resultId", Component: OcrResultsPage },
      { path: "verification-apis/logs", Component: VerificationLogsPage },
    ],
  },
]);