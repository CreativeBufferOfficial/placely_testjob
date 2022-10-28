import type { NextPage } from "next";
import withAuth from "../components/HOC/WithAuth";
import MainLayout from "../components/layout/main";
import Dashboard from "../components/templates/Dashboard";

const DashboardPage: NextPage = () => (
    <MainLayout>
        <Dashboard />
    </MainLayout>
);

export default withAuth(DashboardPage);
