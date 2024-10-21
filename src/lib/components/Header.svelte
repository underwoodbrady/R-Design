<script lang="ts">
	import MenuIcon from 'virtual:icons/material-symbols/menu-rounded';
	import Button from './Button.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	$: currentPage = $page.url.pathname;

	export let onSideMenuButtonPressed: () => void = () => {};

	let scrollY: number;
	let headerDiv: HTMLElement;
	let headerDivWhite: boolean;
	let isWideScreen: boolean = false;

	function checkScreenWidth() {
		isWideScreen = window.innerWidth >= 1064;
	}

	function updateScroll() {
		if (!isWideScreen) return;

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
	}

	function resetHeaderStyle() {
		headerDiv.style.backgroundColor = 'transparent';
		headerDiv.style.borderBottomWidth = '0px';
		headerDivWhite = false;
	}

	onMount(() => {
		if (!browser) return;

		checkScreenWidth();
		updateScroll();

		window.addEventListener('scroll', updateScroll);
		window.addEventListener('resize', () => {
			checkScreenWidth();
			if (!isWideScreen) {
				resetHeaderStyle();
			} else {
				updateScroll();
			}
		});

		return () => {
			window.removeEventListener('scroll', updateScroll);
			window.removeEventListener('resize', checkScreenWidth);
		};
	});
</script>

<header
	class="fixed left-0 top-0 w-full z-30 px-xl h-[92px] transition-colors duration-250 border-b-primary-5 max-lg:bg-primary-1"
	bind:this={headerDiv}
>
	<nav class="flex-center justify-between w-full h-full max-w-screen-xl mx-auto">
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
				'/gallery'
					? ' border-b-2 border-primary-11'
					: ''}"
			>
				<a href="/gallery">Gallery</a>
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
			<Button
				onClick={() => {
					goto('/').then(() => {
						document.getElementById('bookconsultation')?.scrollIntoView();
					});
				}}>Hire Us</Button
			>
		</div>
		<nav class="block md:hidden">
			<button on:click={onSideMenuButtonPressed}>
				<MenuIcon class="text-black-11 w-6 h-6" />
			</button>
		</nav>
	</nav>
</header>
