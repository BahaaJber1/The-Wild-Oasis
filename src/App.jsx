import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // for dev tool kit.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
const queryclient = new QueryClient({
	// create a new object  from he QueryClient provided by react-query and pass an object for options
	defaultOption: {
		queries: {
			staleTime: 0, // how long time it takes to the data to become stale
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryclient}>
			{/* we just provided the queryProvider with the client we made using QueryClient */}
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to="dashboard" />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="bookings" element={<Bookings />} />
						<Route path="bookings/:bookingId" element={<Booking />} />
						<Route path="checkin/:bookingId" element={<Checkin />} />
						<Route path="cabins" element={<Cabins />} />
						<Route path="users" element={<Users />} />
						<Route path="settings" element={<Settings />} />
						<Route path="account" element={<Account />} />
					</Route>
					<Route path="login" element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>

			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "var(--color-grey-0)",
						color: "var(--color-grey-700)",
					},
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;

// import styled from "styled-components"; // import that function to start styling
// import GlobalStyles from "./styles/GlobalStyles"; // global function for styles

// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";

// // for already existing component and we want to style it we call it StyledName
// // like StyledApp for example
// const StyledApp = styled.main`
// 	padding: 20px;
// `;

// function App() {
// 	return (
// 		<>
// 			{/* doesn't accept any children "self-closing" and need to be a sibling of all the other components */}
// 			<GlobalStyles />
// 			<StyledApp>
// 				<Row type="vertical">
// 					<Row type="horizontal">
// 						<Heading as="h1">The Wild Oasis</Heading>
// 						<div>
// 							<Heading as="h2">Check in and out</Heading>
// 							<Button
// 								variations="primary"
// 								size="medium"
// 								onClick={() => alert("Check in")}
// 							>
// 								Check in
// 							</Button>
// 							<Button
// 								variations="secondary"
// 								size="small"
// 								onClick={() => alert("Check out")}
// 							>
// 								Check out
// 							</Button>
// 						</div>
// 					</Row>

// 					<Row type="vertical">
// 						<Heading as="h3">Form</Heading>
// 						<form>
// 							<Input type="numder" placeholder="Number of guests" />
// 							<Input type="numder" placeholder="Number of guests" />
// 						</form>
// 					</Row>
// 				</Row>
// 			</StyledApp>
// 		</>
// 	);
// }

// export default App;
