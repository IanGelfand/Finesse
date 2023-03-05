import React from "react";
import { Flex, chakra, Icon, Button } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination() {
	const PagButton = (props: any) => {
		return (
			<Button variant={"outline"} mx={1} px={4} py={2} rounded="full">
				{props.children}
			</Button>
		);
	};

	return (
		<Flex alignItems="center" justifyContent="center" m={5}>
			<Flex>
				<PagButton>
					<Icon
						as={IoIosArrowBack}
						color="gray.700"
						_dark={{
							color: "gray.200",
						}}
						boxSize={4}
					/>
				</PagButton>
				{[1, 2, 3, 4, 5].map((page, index) => (
					<Button
						key={index}
						color={page === 1 ? "white" : "#00000"}
						bg={page === 1 ? "#446B91" : "white"}
						mx={1}
						px={4}
						py={2}
						rounded="full"
					>
						{page}
					</Button>
				))}
				<PagButton>
					<Icon
						as={IoIosArrowForward}
						color="gray.700"
						_dark={{
							color: "gray.200",
						}}
						boxSize={4}
					/>
				</PagButton>
			</Flex>
		</Flex>
	);
}

export default Pagination;
