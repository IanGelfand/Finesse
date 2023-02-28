import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Grid,
	GridItem,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import DashboardWidget from "./components/DashboardWidget";

function Home() {
	const [widgets, setWidgets] = useState([1, 2, 3, 4]);
	return (
		<Box
			h={"full"}
			w={"full"}
			px={{
				base: 2,
				md: "15rem",
			}}
		>
			<Flex
				pt={{
					base: 2,
					md: "2rem",
				}}
				direction={{
					base: "column",
					md: "row",
				}}
				align={"center"}
				justify={"space-between"}
			>
				<Text
					w={"100%"}
					textAlign={"left"}
					fontSize={"4xl"}
					fontWeight={"semibold"}
				>
					Dashboard
				</Text>
				<ButtonGroup gap={4}>
					<Button
						bg={"#ffff"}
						variant={"outline"}
						onClick={() => {
							setWidgets([1, 2, 3, 4]);
						}}
					>
						<Text fontSize={"sm"}>Reset to default layout</Text>
					</Button>
					<Button
						_hover={{
							bg: "#7BB5E3",
							color: "#000000",
						}}
						color={"#ffff"}
						bg={"#446B91"}
						leftIcon={<AddIcon />}
						onClick={() => {
							setWidgets([...widgets, 1]);
						}}
					>
						<Text fontSize={"sm"}>Add Widget</Text>
					</Button>
				</ButtonGroup>
			</Flex>
			<Wrap mx={"-10"} my={5} justify={"center"} spacing={5}>
				{widgets.map((widget, index) => (
					<WrapItem w={"full"} maxW={"45%"} key={index}>
						<DashboardWidget
							deleteWidget={() => {
								setWidgets(widgets.filter((_, i) => i !== index));
							}}
						/>
					</WrapItem>
				))}
			</Wrap>
		</Box>
	);
}

export default Home;
