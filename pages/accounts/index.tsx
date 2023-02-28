import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	ButtonGroup,
	Card,
	CardHeader,
	Center,
	Checkbox,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Spinner,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { AddIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import { FiRefreshCcw } from "react-icons/fi";
import Link from "next/link";
import { faker } from "@faker-js/faker";
import Pagination from "../components/pagination";

function Accounts() {
	const [data, setData] = useState<
		{ id: string; username: string; email: string; phone: string }[]
	>([]);
	const [checkedItems, setCheckedItems] = useState(
		new Array(data.length).fill(false)
	);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(true);

	const allChecked = checkedItems.every(Boolean);
	const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

	useEffect(() => {
		setTimeout(() => {
			setData(
				Array.from({ length: 10 }, () => ({
					id: faker.database.mongodbObjectId(),
					username: faker.internet.userName(),
					email: faker.internet.email(),
					phone: faker.phone.number(),
				}))
			);
			setCheckedItems(new Array(data.length).fill(false));
			setLoading(false);
		}, 3000);
	}, [data.length]);

	const filteredData = data.filter((row) => {
		return Object.values(row)
			.join(" ")
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
	});

	return (
		<Flex>
			<Sidebar />
			<Box w={"full"} minH={"808px"}>
				<Breadcrumb
					p={5}
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Accounts</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="#">Client Accounts</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="#">Manage</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Card
					maxW={"full"}
					m={{
						base: "2",
						md: "5",
					}}
				>
					<CardHeader>
						<Flex
							align={"center"}
							justify={"space-between"}
							direction={{
								base: "column",
								md: "row",
							}}
						>
							<Text fontSize={"3xl"} fontWeight={"semibold"}>
								Client Accounts
							</Text>
							<ButtonGroup gap={2}>
								<Button
									onClick={() => {
										setLoading(true);
										setTimeout(() => {
											setLoading(false);
										}, 2000);
									}}
									size={"sm"}
									bg={"#ffff"}
									variant={"outline"}
								>
									<FiRefreshCcw />
								</Button>
								<Button
									isDisabled={!checkedItems.filter((item) => item).length}
									size={"sm"}
									bg={"#ffff"}
									variant={"outline"}
								>
									<Text fontSize={"sm"}>Delete</Text>
								</Button>
								<Button
									size={"sm"}
									_hover={{
										bg: "#7BB5E3",
										color: "#000000",
									}}
									color={"#ffff"}
									bg={"#446B91"}
									leftIcon={<AddIcon />}
									onClick={() => {
										//add account
									}}
								>
									<Text fontSize={"sm"}>Add Account</Text>
								</Button>
							</ButtonGroup>
						</Flex>
						<Flex>
							<InputGroup mt={2}>
								<InputLeftElement pointerEvents="none">
									<SearchIcon color="gray.300" />
								</InputLeftElement>
								<Input
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									w={{
										base: "full",
										md: "50%",
									}}
									placeholder="Search"
								/>
							</InputGroup>
							<Pagination />
						</Flex>
					</CardHeader>
					{loading ? (
						<Center h={"571px"}>
							<Spinner size={"lg"} color={"#446B91"} />
						</Center>
					) : (
						<TableContainer minH={"571px"} maxW="full">
							<Table overflowX={"auto"}>
								<Thead>
									<Tr>
										<Th>
											<Checkbox
												isChecked={allChecked}
												isIndeterminate={isIndeterminate}
												onChange={(e) => {
													setCheckedItems(
														new Array(data.length).fill(e.target.checked)
													);
												}}
											/>
										</Th>
										<Th>Account ID</Th>
										<Th>Username</Th>
										<Th>Email</Th>
										<Th>Phone Number</Th>
									</Tr>
								</Thead>
								<Tbody>
									{filteredData.length === 0 && !loading && (
										<Tr>
											<Td></Td>
											<Td></Td>
											<Td>
												<Flex
													justify={"center"}
													align={"center"}
													h={"full"}
													w={"full"}
												>
													<Text fontSize={"xl"} fontWeight={"semibold"}>
														No accounts found
													</Text>
												</Flex>
											</Td>
										</Tr>
									)}
									{filteredData.map((dataItem, index) => (
										<Tr key={index}>
											<Td>
												<Checkbox
													isChecked={checkedItems[index]}
													onChange={(e) => {
														const newCheckedItems = checkedItems.map(
															(item, i) =>
																i === index ? e.target.checked : item
														);

														setCheckedItems(newCheckedItems);
													}}
												/>
											</Td>

											<Td>
												<Link
													style={{
														color: "#0081FF",
														textDecoration: "underline",
													}}
													href={`/accounts/${dataItem.id}`}
												>
													{dataItem.id}
												</Link>
											</Td>
											<Td>{dataItem.username}</Td>
											<Td>{dataItem.email}</Td>
											<Td>{dataItem.phone}</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</TableContainer>
					)}
				</Card>
			</Box>
		</Flex>
	);
}

export default Accounts;
