import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Input,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Sidebar from "../components/Sidebar";

function NewAccount() {
	const InputSet = ({ label, type }: any) => {
		return (
			<FormControl isRequired id={label} key={label}>
				<FormLabel>{label}</FormLabel>
				<Input type={type} />
			</FormControl>
		);
	};

	const personalInputs = [
		{
			label: "First Name",
			type: "name",
		},
		{
			label: "Last Name",
			type: "text",
		},
		{
			label: "Email",
			type: "email",
		},
		{
			label: "Phone Number",
			type: "tel",
		},
		{
			label: "Birth Date",
			type: "date",
		},
		{
			label: "Social Security Number",
			type: "password",
		},
	];

	const addressInputs = [
		{
			label: "Street Address",
			type: "text",
		},
		{
			label: "City",
			type: "text",
		},
		{
			label: "State",
			type: "text",
		},
		{
			label: "Zip Code",
			type: "text",
		},
	];

	return (
		<Flex>
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
				<Breadcrumb
					pb={2}
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="/accounts">Accounts</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="#">Requests</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Text fontSize={"3xl"} fontWeight={"semibold"}>
					Add Account
				</Text>
				<Card>
					<CardBody>
						<Text fontSize={"2xl"} mb={5}>
							Personal Identification
						</Text>
						<Grid
							templateColumns={{
								base: "repeat(1, 1fr)",
								md: "repeat(2, 1fr)",
							}}
							gap={4}
						>
							{personalInputs.map((input, index) => (
								<InputSet key={index} label={input.label} type={input.type} />
							))}
						</Grid>
						<Divider my={5} />
						<Text fontSize={"2xl"} mb={5}>
							Address
						</Text>
						<Grid
							templateColumns={{
								base: "repeat(1, 1fr)",
								md: "repeat(2, 1fr)",
							}}
							gap={4}
						>
							{addressInputs.map((input, index) => (
								<InputSet key={index} label={input.label} type={input.type} />
							))}
						</Grid>
					</CardBody>
					<CardFooter>
						<Flex w={"full"} justify={"flex-end"}>
							<Link href="/accounts">
								<Button mr={10}>Cancel</Button>
							</Link>
							<Link href="/accounts">
								<Button
									bg={"#446B91"}
									color={"#ffff"}
									_hover={{
										bg: "#7BB5E3",
										color: "#000000",
									}}
								>
									Create Account
								</Button>
							</Link>
						</Flex>
					</CardFooter>
				</Card>
			</Box>
		</Flex>
	);
}

export default NewAccount;
