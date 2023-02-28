import React, { ReactNode } from "react";
import {
	IconButton,
	Box,
	CloseButton,
	Flex,
	Icon,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	BoxProps,
	FlexProps,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings,
	FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
	name: string;
	items: Array<{ name: string; href?: string }>;
}
const LinkItems: Array<LinkItemProps> = [
	{
		name: "Accounts",
		items: [{ name: "Accounts", href: "/accounts" }, { name: "Owners" }],
	},
	{
		name: "Finesse Accounts",
		items: [
			{ name: "Proprietary" },
			{ name: "DTCC" },
			{ name: "Baking" },
			{ name: "General Ledger" },
		],
	},
];

export default function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH={"100%"} bg={useColorModeValue("gray.100", "gray.900")}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			{/* <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} /> */}
		</Box>
	);
}

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			pt={12}
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			h="full"
			{...rest}
		>
			<Text fontWeight="bold" mb={2} mx={4} fontSize="xl" letterSpacing="wide">
				Accounts
			</Text>
			{/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} /> */}
			{LinkItems.map((link) => (
				<NavItem key={link.name} name={link.name}>
					{link.items}
				</NavItem>
			))}
		</Box>
	);
};

const NavItem = ({ name, children, ...rest }: any) => {
	return (
		<Accordion allowToggle defaultIndex={0}>
			<AccordionItem
				style={{
					borderStyle: "none",
				}}
			>
				<h2>
					<AccordionButton>
						<AccordionIcon />
						<Box as="span" flex="1" textAlign="left">
							{name}
						</Box>
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					<Flex direction="column">
						{children.map((child: any, index: number) => (
							<Link
								key={index}
								cursor={"pointer"}
								ml="6"
								_hover={{
									color: "#7BB5E3",
								}}
								href={child.href}
							>
								{child.name}
							</Link>
						))}
					</Flex>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

interface MobileProps extends FlexProps {
	onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent="flex-start"
			{...rest}
		>
			<IconButton
				variant="outline"
				onClick={onOpen}
				aria-label="open menu"
				icon={<FiMenu />}
			/>
		</Flex>
	);
};
