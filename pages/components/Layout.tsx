import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<Navbar>
				{children}
				<Footer />
			</Navbar>
		</main>
	);
}

export default Layout;
