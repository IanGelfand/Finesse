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
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Spinner,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { AddIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import { FiRefreshCcw } from "react-icons/fi";
import { faker } from "@faker-js/faker";
import Pagination from "../components/Pagination";
import { IoFilterOutline } from "react-icons/io5";
import NewAccountModal from "../components/NewAccountModal";
import DataTable from "../components/DataTable";

function Accounts() {
	const toast = useToast();
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
	const { isOpen, onOpen, onClose } = useDisclosure();

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
		}, 2000);
	}, [data.length]);

	const filteredData = data.filter((row) => {
		return Object.values(row)
			.join(" ")
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
	});

	return (
		<>
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
							<BreadcrumbLink href="#">Accounts</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink href="#">Manage</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
					<Card borderRadius={15}>
						<CardHeader>
							<Text fontSize={"3xl"} mb={5} fontWeight={"semibold"}>
								Accounts
							</Text>
							<Flex
								justify={"space-between"}
								direction={{
									base: "column",
									md: "row",
								}}
							>
								<Stack
									direction={{
										base: "column",
										lg: "row",
									}}
									w={{
										base: "full",
										lg: "50%",
									}}
								>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<SearchIcon color="gray.300" />
										</InputLeftElement>
										<Input
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
											placeholder="Search"
										/>
									</InputGroup>
									<Select placeholder="Value 1">
										<option>10</option>
										<option>20</option>
										<option>30</option>
									</Select>
									<Select placeholder="Value 1">
										<option>10</option>
										<option>20</option>
										<option>30</option>
									</Select>
									<Button bg={"#ffff"} variant={"outline"}>
										<IoFilterOutline size={50} />
									</Button>
								</Stack>
								<ButtonGroup
									m={{
										base: "2",
										md: "0",
									}}
									justifyContent={"center"}
									gap={2}
								>
									<Button
										p={4}
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
										p={4}
										isDisabled={!checkedItems.filter((item) => item).length}
										size={"sm"}
										bg={"#ffff"}
										variant={"outline"}
									>
										<Text fontSize={"sm"}>Delete</Text>
									</Button>
									<Button
										p={4}
										size={"sm"}
										_hover={{
											bg: "#7BB5E3",
											color: "#000000",
										}}
										color={"#ffff"}
										bg={"#446B91"}
										leftIcon={<AddIcon />}
										onClick={onOpen}
									>
										<Text fontSize={"sm"}>Add Account</Text>
									</Button>
								</ButtonGroup>
							</Flex>
						</CardHeader>
						{loading ? (
							<Center h={"571px"}>
								<Spinner size={"lg"} color={"#446B91"} />
							</Center>
						) : (
							<DataTable
								data={filteredData}
								columns={[
									{
										key: "id",
										header: "ID",
									},
									{
										key: "username",
										header: "Username",
									},
									{
										key: "email",
										header: "Email",
									},
									{
										key: "phone",
										header: "Phone",
									},
								]}
								checkedItems={checkedItems}
								setCheckedItems={setCheckedItems}
								allChecked={allChecked}
								isIndeterminate={isIndeterminate}
							/>
						)}
						<Pagination />
					</Card>
				</Box>
			</Flex>

			<NewAccountModal isOpen={isOpen} onClose={onClose} />
		</>
	);
}

export default Accounts;
