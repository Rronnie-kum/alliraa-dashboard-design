
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Kurti from "./pages/Kurti";
import LikedProducts from "./pages/LikedProducts";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";
import SummerEssentials from "./pages/SummerEssentials";
import CasualComfort from "./pages/CasualComfort";
import EveningElegance from "./pages/EveningElegance";
import UrbanStreet from "./pages/UrbanStreet";
import BohoChic from "./pages/BohoChic";
import HealthyLifestyle from "./pages/HealthyLifestyle";
import NewArrivals from "./pages/NewArrivals";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/kurti" element={<Kurti />} />
              <Route path="/liked-products" element={<LikedProducts />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/summer-essentials" element={<SummerEssentials />} />
              <Route path="/casual-comfort" element={<CasualComfort />} />
              <Route path="/evening-elegance" element={<EveningElegance />} />
              <Route path="/urban-street" element={<UrbanStreet />} />
              <Route path="/boho-chic" element={<BohoChic />} />
              <Route path="/healthy-lifestyle" element={<HealthyLifestyle />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WishlistProvider>
    </QueryClientProvider>
  );
};

export default App;
