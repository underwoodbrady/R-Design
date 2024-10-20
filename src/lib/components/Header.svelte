<script lang="ts">
	import MenuIcon from 'virtual:icons/material-symbols/menu-rounded';
	import Button from './Button.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	$: currentPage = $page.url.pathname;

	let scrollY: number;
	let headerDiv: HTMLElement;
	let headerDivWhite: boolean;

	onMount(() => {
		const updateScroll = () => {
			scrollY = window.scrollY;
			if (scrollY > 92 && !headerDivWhite) {
				headerDiv.style.backgroundColor = '#fcfefd';
				headerDiv.style.borderBottomWidth = '1px';
				headerDivWhite = true;
			} else if (scrollY < 92 && headerDivWhite) {
				headerDiv.style.backgroundColor = 'transparent';
				headerDiv.style.borderBottomWidth = '0px';
				headerDivWhite = false;
			}
		};

		updateScroll();

		window.addEventListener('scroll', updateScroll);

		return () => {
			window.removeEventListener('scroll', updateScroll);
		};
	});
</script>

<header
	class="fixed left-0 top-0 w-full z-20 px-xl h-[92px] transition-colors duration-250 border-b-primary-5"
	bind:this={headerDiv}
>
	<nav class="flex-center justify-between w-full h-full">
		<a href="/">
			<img src="/LogoSVG.svg" alt="Company Logo" class="w-32 mb-sm" />
		</a>
		<ul class="hidden md:flex-center space-x-xl font-medium">
			<li
				class="text-primary-12 hover:text-primary-11 transition-colors duration-100 {currentPage ==
				'/'
					? ' border-b-2 border-primary-11'
					: ''}"
			>
				<a href="/">Home</a>
			</li>
			<li
				class="text-primary-12 hover:text-primary-11 transition-colors duration-100 {currentPage ==
				'/portfolio'
					? ' border-b-2 border-primary-11'
					: ''}"
			>
				<a href="/portfolio">Portfolio</a>
			</li>
			<li
				class="text-primary-12 hover:text-primary-11 transition-colors duration-100 {currentPage ==
				'/services'
					? ' border-b-2 border-primary-11'
					: ''}"
			>
				<a href="/services">Services</a>
			</li>
			<li
				class="text-primary-12 hover:text-primary-11 transition-colors duration-100 {currentPage ==
				'/blog'
					? ' border-b-2 border-primary-11'
					: ''}"
			>
				<a href="/blog">Blog</a>
			</li>
		</ul>
		<div class="hidden md:flex-center">
			<Button>Hire Us</Button>
		</div>
		<nav class="block lg:hidden">
			<MenuIcon class="text-black-11 w-6 h-6" />
		</nav>
	</nav>
</header>
