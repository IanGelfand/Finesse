import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";

function Requests() {
	return (
		<Flex h={"full"}>
			<Sidebar />
			<Box
				w={"full"}
				minH={"808px"}
				mx={{
					base: "2",
					md: "8",
				}}
				my={{
					base: "2",
					md: "5",
				}}
			>
				<Text fontSize={"3xl"} mb={5} fontWeight={"semibold"}>
					Requests
				</Text>
			</Box>
		</Flex>
	);
}

export default Requests;
