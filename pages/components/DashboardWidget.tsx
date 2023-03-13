import React from "react";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	SkeletonText,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

function DashboardWidget({ deleteWidget }: { deleteWidget: () => void }) {
	return (
		<Card w={"full"}>
			<CardHeader bg={"#E3E3E3"} h={35} p={0}>
				<Flex justify={"flex-end"} align={"center"} h={"100%"} mr={2}>
					<Menu>
						<MenuButton
							as={Button}
							rounded={"full"}
							variant={"link"}
							cursor={"pointer"}
							minW={0}
						>
							<BsThreeDotsVertical size={20} style={{ cursor: "pointer" }} />
						</MenuButton>
						<MenuList>
							<MenuItem>Change size</MenuItem>
							<MenuItem onClick={deleteWidget} bg={"#FF0000"} color={"#ffff"}>
								Remove widget
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</CardHeader>
			<CardBody minH={"330px"}>
				<SkeletonText
					noOfLines={Math.floor(Math.random() * 8) + 1}
					spacing="4"
					skeletonHeight="2"
				/>
			</CardBody>
		</Card>
	);
}

export default DashboardWidget;
