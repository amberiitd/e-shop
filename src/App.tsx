import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { useMode, ColorModeContext } from "./contexts/theme";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import ShopPage from "./pages/shop";

function App() {
	const { theme, toggleColorMode } = useMode();
	return (
		<ColorModeContext.Provider value={{ toggleColorMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<Routes>
						{/* <Route path="/login" element={<LoginPage />} /> */}
						<Route path="shop" element={<ShopPage />} />
						<Route path="*" element={<Navigate to="/shop" />} />
					</Routes>
				</BrowserRouter>
				<ToastContainer theme={theme.palette.mode} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
