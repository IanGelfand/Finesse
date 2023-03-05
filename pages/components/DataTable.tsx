import {
	Checkbox,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import Link from "next/link";

function DataTable({
	data,
	columns,
	checkedItems,
	setCheckedItems,
	allChecked,
	isIndeterminate,
}: any) {
	const handleCheckAll = (event: any) => {
		const { checked } = event.target;
		setCheckedItems(new Array(data.length).fill(checked));
	};

	const handleCheckRow = (index: number, checked: any) => {
		const newCheckedItems = checkedItems.map((item: any, i: number) =>
			i === index ? checked : item
		);
		setCheckedItems(newCheckedItems);
	};

	return (
		<TableContainer>
			<Table>
				<Thead bg={"gray.50"}>
					<Tr>
						{columns?.map((column: any, index: number) => (
							<Th key={index}>
								{column.key === "id" ? (
									<Flex align={"center"}>
										<Checkbox
											isChecked={allChecked}
											isIndeterminate={isIndeterminate}
											onChange={handleCheckAll}
										/>
										<Text ml={2}>{column.header}</Text>
									</Flex>
								) : (
									<Text>{column.header}</Text>
								)}
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{data?.map((rowData: any, rowIndex: number) => (
						<Tr key={rowIndex}>
							{columns?.map((column: any, columnIndex: number) => (
								<Td key={columnIndex}>
									{column.key === "id" ? (
										<Flex align={"center"}>
											<Checkbox
												isChecked={checkedItems[rowIndex]}
												onChange={(event) =>
													handleCheckRow(rowIndex, event.target.checked)
												}
											/>
											<Link
												style={{
													color: "#0081FF",
													textDecoration: "underline",
												}}
												href={`/accounts/${rowData.id}`}
											>
												<Text ml={2} cursor={"pointer"}>
													{rowData[column.key]}
												</Text>
											</Link>
										</Flex>
									) : (
										<Text>{rowData[column.key]}</Text>
									)}
								</Td>
							))}
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default DataTable;
