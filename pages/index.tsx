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
} from "@chakra-ui/react";
import DashboardWidget from "./components/DashboardWidget";

function Home() {
	const [widgets, setWidgets] = useState([1, 2, 3, 4]);
	return (
		<Box
			h={"full"}
			px={{
				base: 0,
				md: 10,
			}}
		>
			<Flex
				pt={{
					base: 2,
					md: 5,
				}}
				px={5}
				direction={{
					base: "column",
					md: "row",
				}}
				align={"center"}
				justify={"space-between"}
			>
				<Text fontSize={"4xl"} fontWeight={"semibold"}>
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
			<Grid templateColumns="repeat(2, 1fr)" gap={6}>
				{widgets.map((widget, index) => (
					<GridItem key={index}>
						<DashboardWidget
							deleteWidget={() => {
								setWidgets(widgets.filter((_, i) => i !== index));
							}}
						/>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
}

export default Home;
