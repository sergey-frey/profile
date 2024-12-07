<script lang="ts">
	import clsx from "clsx";
	import type { HTMLAttributes } from "svelte/elements";
	import CodeKeyword from "../shared/ui/code-keyword.svelte";
	import CodeLink from "../shared/ui/code-link.svelte";

	interface Props extends HTMLAttributes<HTMLElement> {}

	const { class: className, ...props }: Props = $props();
</script>

<footer class={clsx("footer", className)} {...props}>
	<div class="container">
		<div class="footer__content">
			<section class="footer__links">
				<h3 class="footer__links__title">More contacts</h3>

				<ul class="footer__links__list">
					<li>
						<CodeKeyword>
							<CodeLink href="mailto:sergey.frey.work@gmail.com">
								sergey.frey.work@gmail.com
							</CodeLink>
						</CodeKeyword>
					</li>
				</ul>
			</section>

			<p class="footer__legal">
				powered by
				<CodeKeyword>
					<CodeLink href="https://github.com/sergey-frey" target="_blank">
						sergey frey
					</CodeLink>
				</CodeKeyword>
			</p>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		padding: 2rem;

		color: var(--text-color);

		border-top-style: dashed;
		border-top-color: var(--comment-color);

		&__content {
			display: flex;
			flex-wrap: wrap;
			column-gap: 2rem;
			justify-content: space-between;
		}

		&__links {
			&__title {
				font-size: var(--h3-font-size);
			}

			&__list {
				list-style: none;
				padding-top: 0.5rem;
			}
		}

		&__legal {
			margin-top: 2rem;
		}
	}
</style>
