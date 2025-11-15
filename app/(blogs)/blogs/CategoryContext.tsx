"use client";
import { createContext, useContext, ReactNode } from "react";

type CategoryContextType = {
  slug?: string;
  name?: string;
};

export const CategoryContext = createContext<CategoryContextType>({});

export const CategoryProvider = ({ children, slug, name }: { children: ReactNode; slug?: string; name?: string }) => {
  return <CategoryContext.Provider value={{ slug, name }}>{children}</CategoryContext.Provider>;
};

export const useCategory = () => useContext(CategoryContext);
