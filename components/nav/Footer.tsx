import s from './Footer.module.scss'
import cn from 'classnames'
import type { MenuItem } from '/lib/menu'
import KFLogo from '/public/images/kf-logo.svg'
import { PROJECT_NAME } from '/lib/constant'
import { useRouter } from 'next/router'

export type FooterProps = {
	menu: MenuItem[]
	footer: GeneralRecord
}

export default function Footer({ footer: { instagram, about } }: FooterProps) {

	const isHome = useRouter().pathname === '/'

	return (
		<footer className={cn(s.footer, isHome && s.home)} id="footer">
			<section>
				<div>
					Följ oss på <a href={instagram}>Instagram</a>
				</div>
				<a href="https://www.konstframjandet.se/" target="new"><KFLogo className={s.kf} /></a>
			</section>
		</footer>
	)
}