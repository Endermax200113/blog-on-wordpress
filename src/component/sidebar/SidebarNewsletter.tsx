import React from 'react'
import InputText from './../UI/input/InputText'
import './../../assets/sass/App.sass'
import Title from '../UI/text/Title'
import { TypeInputText } from '../../util/inputtext'
import NormalButton from '../UI/button/NormalButton'
import { ReactComponent as SvgMessageSend } from './../../assets/svg/message-send.svg'

const SidebarNewsletter: React.FC = () => {
	return (
		<form className='newsletter'>
			<Title 
				text="Подписка на рассылку" 
				clazz={c => {return [c['title'], 'title--center']}}
			/>

			<InputText 
				type={TypeInputText.EMAIL} 
				hint='Email@gmail.com' 
				clazz={c => {return [c['input-text'], 'input-text--margin-30']}}
			/>

			<NormalButton 
				text="Подписаться" 
				svg={SvgMessageSend}
				clazz={c => {return [c['button'], 'button-normal--margin-20']}}
			/>
		</form>
	)
}

export default SidebarNewsletter