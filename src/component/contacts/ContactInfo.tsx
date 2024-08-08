import React from 'react'
import Title from '../UI/text/Title'
import TextLink from '../UI/text/TextLink'
import { ReactComponent as SvgPhone } from './../../assets/svg/contacts/phone.svg'
import { ReactComponent as SvgPlace } from './../../assets/svg/contacts/place.svg'
import { SvgAndPosition, SvgPosition } from '../../util/svg'

const ContactInfo: React.FC = () => {
	type GeoPosition = {
		longitude: number
		latitude: number
		zoom?: number
	}
	
	const geo: GeoPosition = {
		longitude: 59.961665,
		latitude: 30.306436,
		zoom: 18
	}

	const svgPhone: SvgAndPosition = {
		svg: SvgPhone,
		position: SvgPosition.LEFT
	}

	const svgPlace: SvgAndPosition = {
		svg: SvgPlace,
		position: SvgPosition.LEFT
	}

	return (
		<address className="contact-info">
			<Title text="Контактная информация" />

			<div className='contact-info__info'>
				<TextLink
					link="tel:+798788787"
					clazz={c => {return [c['text-link'], "contact-info__data"]}}
					svg={svgPhone}
				>
					+7 (987) 887-87
				</TextLink>
				
				<TextLink
					link={`https://yandex.ru/maps/?ll=${geo.latitude}%2C${geo.longitude}&z=${geo.zoom}`}
					clazz={c => {return [c['text-link'], 'contact-info__data']}}
					svg={svgPlace}
					target='_blank'
				>
					г. Санкт-Петербург, ул. Ленина, 9
				</TextLink>
			</div>
		</address>
	)
}

export default ContactInfo