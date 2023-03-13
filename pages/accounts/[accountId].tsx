import React, { useEffect, useState } from "react";
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
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Spinner,
	Stack,
	Text,
	Tab,
	TabList,
	Tabs,
	useMediaQuery,
	TabPanels,
	TabPanel,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { AddIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { IoFilterOutline } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";

function SingleAccount() {
	const [isMobile] = useMediaQuery("(max-width: 768px)");
	const router = useRouter();
	const { accountId } = router.query;
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
	const dummyData: any = [
		{
			id: "1",
			date: "2023-03-02",
			type: "withdrawal",
			amount: 5000.0,
			currency: "USD",
			method: "bank transfer",
		},
		{
			id: "2",
			date: "2023-03-05",
			type: "withdrawal",
			amount: 10000.0,
			currency: "USD",
			method: "credit card",
		},
		{
			id: "3",
			date: "2023-03-01",
			type: "deposit",
			amount: 15000.0,
			currency: "USD",
			method: "bank transfer",
		},
		{
			id: "4",
			date: "2023-03-06",
			type: "deposit",
			amount: 5000.0,
			currency: "USD",
			method: "credit card",
		},
		{
			id: "5",
			date: "2023-03-04",
			type: "trade",
			stockSymbol: "AAPL",
			quantity: 100,
			orderType: "limit",
			orderSize: 100,
			orderDuration: "GTC",
			executionPrice: 150.25,
			commissionFee: 10.5,
			exchangeFee: 2.0,
			regulatoryFee: 1.5,
			amount: null,
			currency: null,
			method: null,
		},
		{
			id: "6",
			date: "2023-03-04",
			type: "trade",
			stockSymbol: "GOOGL",
			quantity: 50,
			orderType: "market",
			orderSize: 50,
			orderDuration: "GTC",
			executionPrice: 2000.0,
			commissionFee: 5.5,
			exchangeFee: 2.0,
			regulatoryFee: 1.0,
			amount: null,
			currency: null,
			method: null,
		},
		{
			id: "7",
			date: "2023-03-05",
			type: "trade",
			stockSymbol: "TSLA",
			quantity: 75,
			orderType: "limit",
			orderSize: 75,
			orderDuration: "day",
			executionPrice: 800.5,
			commissionFee: 15.5,
			exchangeFee: 3.0,
			regulatoryFee: 1.5,
			amount: null,
			currency: null,
			method: null,
		},
	];

	useEffect(() => {
		setTimeout(() => {
			setData(dummyData);
			setCheckedItems(new Array(data.length).fill(false));
			setLoading(false);
		}, 2000);
	}, [data.length, dummyData]);

	const filteredData = data.filter((row) => {
		return Object.values(row)
			.join(" ")
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
	});

	return (
		<Flex>
			<Sidebar />
			<Box
				overflow={"auto"}
				w={"full"}
				minH={"808px"}
				px={{
					base: "2",
					md: "0",
				}}
				mx={{
					base: "0",
					md: "8",
				}}
				my={{
					base: "2",
					md: "5",
				}}
			>
				<Breadcrumb
					mb={3}
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">
							{isMobile ? "..." : "Accounts"}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="/accounts">
							{isMobile ? "..." : "Manage"}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="#">{accountId}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Card>
					<CardHeader>
						<Tabs>
							<TabList>
								<Tab>Transactions</Tab>
								<Tab>Queries</Tab>
							</TabList>

							<TabPanels>
								<TabPanel p={0}>
									<Flex
										my={2}
										w={"full"}
										direction={{
											base: "column",
											md: "row",
										}}
										justify={"space-between"}
										align={{
											base: "flex-start",
											md: "center",
										}}
									>
										<Text fontWeight={"semibold"} fontSize={"3xl"}>
											Transactions
										</Text>
										<Text fontSize={"2xl"}>Account: {accountId}</Text>
									</Flex>
									<Flex
										mb={4}
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
											>
												<Text fontSize={"sm"}>Add Account</Text>
											</Button>
										</ButtonGroup>
									</Flex>
									<Box mx={"-5"}>
										{loading ? (
											<Center h={"571px"}>
												<Spinner size={"lg"} color={"#446B91"} />
											</Center>
										) : (
											<DataTable
												data={filteredData}
												columns={[
													{
														header: "ID",
														key: "id",
													},
													{
														header: "Date",
														key: "date",
													},
													{
														header: "Type",
														key: "type",
													},
													{
														header: "Amount",
														key: "amount",
													},
													{
														header: "Currency",
														key: "currency",
													},
													{
														header: "Method",
														key: "method",
													},
													{
														header: "Stock Symbol",
														key: "stockSymbol",
													},
													{
														header: "Quantity",
														key: "quantity",
													},
													{
														header: "Order Type",
														key: "orderType",
													},
													{
														header: "Order Size",
														key: "orderSize",
													},
													{
														header: "Order Duration",
														key: "orderDuration",
													},
													{
														header: "Execution Price",
														key: "executionPrice",
													},
													{
														header: "Commission Fee",
														key: "commissionFee",
													},
													{
														header: "Exchange Fee",
														key: "exchangeFee",
													},
													{
														header: "Regulatory Fee",
														key: "regulatoryFee",
													},
												]}
												allChecked={allChecked}
												isIndeterminate={isIndeterminate}
												checkedItems={checkedItems}
												setCheckedItems={setCheckedItems}
											/>
										)}
										<Pagination />
									</Box>
								</TabPanel>
								<TabPanel>
									<Flex
										w={"full"}
										direction={{
											base: "column",
											md: "row",
										}}
										justify={"space-between"}
										align={{
											base: "flex-start",
											md: "center",
										}}
										mt={5}
									>
										<Text fontWeight={"semibold"} fontSize={"3xl"}>
											Queries
										</Text>
										<Text fontSize={"2xl"}>Account: {accountId}</Text>
									</Flex>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</CardHeader>
				</Card>
			</Box>
		</Flex>
	);
}

export default SingleAccount;
