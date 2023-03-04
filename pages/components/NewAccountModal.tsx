import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Text,
	InputGroup,
	FormControl,
	FormLabel,
	Input,
	Flex,
	Select,
	Spacer,
	Grid,
} from "@chakra-ui/react";
// import states from "../../Utils/states.json";

function NewAccountModal({ isOpen, onClose }: any) {
	const [activeIndex, setActiveIndex] = useState(0);

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
		<>
			<Modal size={"3xl"} isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader p={0}>
						<Tabs isFitted index={activeIndex} onChange={setActiveIndex}>
							<TabList>
								<Tab>Personal</Tab>
								<Tab>Address</Tab>
							</TabList>

							<TabPanels p={5}>
								<TabPanel>
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
											<InputSet
												key={index}
												label={input.label}
												type={input.type}
											/>
										))}
									</Grid>
								</TabPanel>
								<TabPanel>
									<Text>Address</Text>

									<Grid
										templateColumns={{
											base: "repeat(1, 1fr)",
											md: "repeat(2, 1fr)",
										}}
										gap={4}
									>
										{addressInputs.map((input, index) => (
											<InputSet
												key={index}
												label={input.label}
												type={input.type}
											/>
										))}
									</Grid>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalHeader>

					<ModalFooter>
						<Flex w={"full"} justify={"space-between"}>
							<Button onClick={onClose}>Cancel</Button>

							<Button
								bg={"#446B91"}
								color={"#ffff"}
								_hover={{
									bg: "#7BB5E3",
									color: "#000000",
								}}
								onClick={() => {
									if (activeIndex === 0) {
										setActiveIndex(1);
									} else {
										onClose();
									}
								}}
							>
								{activeIndex === 0 ? "Next" : "Add Account"}
							</Button>
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default NewAccountModal;
