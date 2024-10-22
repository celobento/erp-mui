"use client";
import Header from "@/app/layout/header/Header";
import Sidebar from "@/app/layout/sidebar/Sidebar";
import theme from "@/theme";
import { Box, Container, styled } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

//export const metadata: Metadata = {
//  title: "Página dos usuários",
//  description: "Generated by create next app",
//};

export default function RootLayout(props: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MainWrapper className="mainwrapper">
              {/* ------------------------------------------- */}
              {/* Sidebar */}
              {/* ------------------------------------------- */}
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
              />
              {/* ------------------------------------------- */}
              {/* Main Wrapper */}
              {/* ------------------------------------------- */}
              <PageWrapper className="page-wrapper">
                {/* ------------------------------------------- */}
                {/* Header */}
                {/* ------------------------------------------- */}
                <Header
                  toggleMobileSidebar={() => setMobileSidebarOpen(true)}
                />
                {/* ------------------------------------------- */}
                {/* PageContent */}
                {/* ------------------------------------------- */}
                <Container
                  sx={{
                    paddingTop: "20px",
                    maxWidth: "1200px",
                  }}
                >
                  {/* ------------------------------------------- */}
                  {/* Page Route */}
                  {/* ------------------------------------------- */}
                  <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
                    {props.children}
                  </Box>
                  {/* ------------------------------------------- */}
                  {/* End Page */}
                  {/* ------------------------------------------- */}
                </Container>
              </PageWrapper>
            </MainWrapper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
