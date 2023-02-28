import React from "react";
import { Flex, chakra, Icon } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination() {
	const PagButton = (props: any) => {
		return (
			<chakra.button
				mx={1}
				px={4}
				py={2}
				rounded="md"
				color="gray.700"
				opacity={props.disabled && 0.6}
				cursor={props.disabled && "not-allowed"}
			>
				{props.children}
			</chakra.button>
		);
	};

	return (
		<Flex alignItems="center" justifyContent="center">
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
				<PagButton>1</PagButton>
				<PagButton active>2</PagButton>
				<PagButton>3</PagButton>
				<PagButton>4</PagButton>
				<PagButton>5</PagButton>
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
