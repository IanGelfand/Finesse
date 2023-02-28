import React from "react";
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
} from "@chakra-ui/react";
import states from "../../Utils/states.json";

function NewAccountModal({ isOpen, onClose }: any) {
	const [currentTab, setCurrentTab] = React.useState(0);
	console.log(currentTab);
	return (
		<>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader p={0}>
						<Tabs isFitted variant={"enclosed"} tabIndex={currentTab}>
							<TabList tabIndex={currentTab}>
								<Tab>Personal</Tab>
								<Tab>Address</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<Text>Personal Identification</Text>
									<Flex>
										<FormControl isRequired>
											<FormLabel>First Name</FormLabel>
											<Input type="name" />
										</FormControl>
										<FormControl isRequired>
											<FormLabel>Last Name</FormLabel>
											<Input type="text" />
										</FormControl>
									</Flex>
									<Flex>
										<FormControl isRequired>
											<FormLabel>Email</FormLabel>
											<Input type="email" />
										</FormControl>
										<FormControl isRequired>
											<FormLabel>Phone Number</FormLabel>
											<Input type="tel" />
										</FormControl>
									</Flex>
									<Flex>
										<FormControl isRequired>
											<FormLabel>Birth Date</FormLabel>
											<Input type="date" />
										</FormControl>
										<FormControl isRequired>
											<FormLabel>Social Security Number</FormLabel>
											<Input type="password" />
										</FormControl>
									</Flex>
								</TabPanel>
								<TabPanel>
									<Text>Address</Text>

									<Flex>
										<FormControl isRequired>
											<FormLabel>Street Address</FormLabel>
											<Input type="text" />
										</FormControl>
									</Flex>
									<Flex>
										<FormControl>
											<FormLabel>Apt Number</FormLabel>
											<Input type="text" />
										</FormControl>
										<Spacer />
										<FormControl isRequired>
											<FormLabel>State</FormLabel>
											<Select placeholder="Select State">
												{states.map((state: any) => (
													<option
														key={state.abbreviation}
														value={state.abbreviation}
													>
														{state.name}
													</option>
												))}
											</Select>
										</FormControl>
										<Spacer />
										<FormControl isRequired>
											<FormLabel>Zip Code</FormLabel>
											<Input type="text" />
										</FormControl>
									</Flex>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalHeader>

					<ModalFooter>
						<Flex w={"full"} justify={"space-between"}>
							<Button mr={3} onClick={onClose}>
								Close
							</Button>
							<Button
								bg={"#446B91"}
								color={"#ffff"}
								onClick={() => {
									if (currentTab === 0) {
										setCurrentTab(1);
									} else {
										setCurrentTab(0);
									}
								}}
							>
								{currentTab === 0 ? "Next Step" : "Finish"}
							</Button>
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default NewAccountModal;
