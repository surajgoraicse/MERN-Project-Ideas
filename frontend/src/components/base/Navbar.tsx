"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

function cn(...inputs: any[]): string {
	return inputs
		.flat(Infinity)
		.filter(Boolean)
		.map((i: any) => {
			if (typeof i === "string") return i;
			if (Array.isArray(i)) return i.filter(Boolean).join(" ");
			if (typeof i === "object")
				return Object.entries(i)
					.filter(([_, v]) => v)
					.map(([k]) => k)
					.join(" ");
			return String(i);
		})
		.filter(Boolean)
		.join(" ");
}

export default function Navbar(): JSX.Element {
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);

	return (
		<header className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 ">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Brand */}
					<div className="flex items-center gap-3">
						<Link
							href="/"
							className="inline-flex items-center gap-2"
						>
							<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-semibold">
								A
							</span>
							<span className="font-medium text-gray-900 dark:text-gray-100">
								Acme
							</span>
						</Link>
						<span className="hidden text-sm text-gray-500 dark:text-gray-400 md:inline">
							minimal UI · modern
						</span>
					</div>

					{/* Desktop navigation */}
					<nav className="hidden md:flex md:items-center md:gap-6">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 dark:bg-transparent">
										Product
									</NavigationMenuTrigger>
									<NavigationMenuContent className="w-[320px] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
										<ol className="grid gap-3 p-4">
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/features"
														className="block rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
													>
														<div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
															Features
														</div>
														<p className="text-xs text-gray-500 dark:text-gray-400">
															Everything you need
															to build faster.
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/integrations"
														className="block rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
													>
														<div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
															Integrations
														</div>
														<p className="text-xs text-gray-500 dark:text-gray-400">
															Connect with the
															tools you already
															use.
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										</ol>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuTrigger className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 dark:bg-transparent">
										Resources
									</NavigationMenuTrigger>
									<NavigationMenuContent className="w-[320px] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
										<ol className="grid gap-3 p-4">
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/docs"
														className="block rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
													>
														<div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
															Docs
														</div>
														<p className="text-xs text-gray-500 dark:text-gray-400">
															Guide and API
															reference.
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
											<li>
												<NavigationMenuLink asChild>
													<Link
														href="/blog"
														className="block rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
													>
														<div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
															Blog
														</div>
														<p className="text-xs text-gray-500 dark:text-gray-400">
															Engineering stories
															and updates.
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										</ol>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link
											href="/pricing"
											className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline"
										>
											Pricing
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<Link href="/signup">
							<Button variant={"ghost"} className="ml-2" aria-label="Sign up">
								Get started
							</Button>
						</Link>
						<div>
							<AnimatedThemeToggler />
						</div>
					</nav>

					{/* Mobile */}
					<div className="flex items-center gap-2 md:hidden">
						<Link href="/signup" className="hidden sm:inline">
							<Button variant={"ghost"} size="sm">Get started</Button>
						</Link>

						<button
							type="button"
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileOpen}
							onClick={() => setMobileOpen((v) => !v)}
							className={cn(
								"-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
								mobileOpen
									? "bg-gray-100 dark:bg-gray-800"
									: "hover:bg-gray-50 dark:hover:bg-gray-800"
							)}
						>
							{mobileOpen ? (
								<X className="h-5 w-5 text-gray-900 dark:text-gray-100" />
							) : (
								<Menu className="h-5 w-5 text-gray-900 dark:text-gray-100" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={cn(
					"md:hidden transition-max-h duration-300 overflow-hidden bg-white dark:bg-gray-900 border-t z-50 border-gray-200 absolute  dark:border-gray-800",
					mobileOpen ? "max-h-[420px]" : "max-h-0"
				)}
			>
				<div className="px-4 pt-4 pb-6">
					<div className="space-y-3">
						<Link
							href="/features"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
							onClick={() => setMobileOpen(false)}
						>
							Features
						</Link>
						<Link
							href="/integrations"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
							onClick={() => setMobileOpen(false)}
						>
							Integrations
						</Link>
						<Link
							href="/docs"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
							onClick={() => setMobileOpen(false)}
						>
							Docs
						</Link>
						<Link
							href="/blog"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
							onClick={() => setMobileOpen(false)}
						>
							Blog
						</Link>
						<Link
							href="/pricing"
							className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
							onClick={() => setMobileOpen(false)}
						>
							Pricing
						</Link>

						<div className="pt-2 ">
							<Link href="/signup">
								<Button className="w-full">Get started</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

/*
  CHANGES FOR DARK MODE
  - Added dark mode classes for backgrounds, borders, text, and hover states.
  - Mobile panel and dropdown menus now respect dark mode with dark:bg-gray-900 and dark:hover styles.
  - Icons (Menu/X) inherit dark:text-gray-100.
*/
