import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useDisclosure,
	useColorModeValue,
	Stack,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineBell } from "react-icons/ai";
import logo from "/public/finesse-logo.png";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";

const Links = [
	{
		label: "Dashboard",
		href: "/",
	},
	{
		label: "Accounts",
		href: "/accounts",
	},
	{
		label: "Clearing",
		href: "/clearing",
	},

	{
		label: "Reference Data",
		href: "/reference-data",
	},
	{
		label: "Reports",
		href: "/reports",
	},
	{
		label: "Administration",
		href: "/administration",
	},
];

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const router = useRouter();
	const currentPath = router.pathname;
	return (
		<Link
			px={2}
			py={1}
			rounded={"md"}
			_hover={{
				textDecoration: "none",
				bg: useColorModeValue("gray.200", "gray.700"),
			}}
			bg={
				//if current page is the same as the link, then highlight it
				href === currentPath
					? useColorModeValue("gray.200", "gray.700")
					: undefined
			}
			href={href}
		>
			{children}
		</Link>
	);
};

export default function Navbar({ children }: { children: ReactNode }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box h={"full"}>
			<Box px={4}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack alignItems={"center"}>
						<Image src={logo} alt="Finesse Logo" width={35} />
						<Text fontSize={"xl"} fontWeight={"semibold"}>
							Finesse
						</Text>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
						>
							{Links.map((link, index) => (
								<NavLink key={index} href={link.href}>
									{link.label}
								</NavLink>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={"center"}>
						<Box mr={4}>
							<AiOutlineBell size={20} />
						</Box>
						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								minW={0}
							>
								<Avatar size={"sm"} src={faker.image.avatar()} />
							</MenuButton>
							<MenuList>
								<MenuItem>Settings</MenuItem>
								<MenuItem borderRadius={5} bg={"#446B91"} color={"#ffff"}>
									Log out
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{Links.map((link, index) => (
								<NavLink key={index} href={link.href}>
									{link.label}
								</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>

			<Box h={"full"} bg={useColorModeValue("gray.100", "gray.900")}>
				{children}
			</Box>
		</Box>
	);
}
