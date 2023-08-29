import { BrowserRouter, Route, Routes } from "react-router-dom"

import RootLayout from "@/layouts/RootLayout"
import NotFound from "@/pages/NotFound"
import Root from "@/pages/root"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
        >
          <Route
            index
            element={<Root />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
