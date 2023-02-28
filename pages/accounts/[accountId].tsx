import React from "react";
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function SingleAccount() {
	const router = useRouter();
	const { accountId } = router.query;

	return (
		<Flex h={"full"}>
			<Sidebar />
			<Box m={5} mx={14} w={"full"}>
				<Breadcrumb
					mb={5}
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Accounts</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="/accounts">Client Accounts</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Manage</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="#">{accountId}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Box>
		</Flex>
	);
}

export default SingleAccount;
