import { useEffect, useState } from 'react'
import { converter } from './utils/converter'
import { ChromePicker } from 'react-color'

const App = () => {
	const [img, setImg] = useState<string | null>(null)
	const [text, setText] = useState('')
	const [color, setColor] = useState('#71CBCE')

	useEffect(() => {
		if (text === '') setImg(null)
		else setImg(converter(text, color))
	}, [text, color])

	return (
		<section className="w-screen h-screen bg-[#111] flex-center">
			<section className="flex flex-col items-center">
				<textarea
					value={text}
					placeholder="Enter Image Text..."
					onChange={(event) => setText(event.target.value)}
					className="w-[300px] bg-[#222] text-white p-[10px]"
				/>
				<div className="min-w-[100] min-h-[150px]">
					{img && <img src={img} alt="image" />}
				</div>
				<ChromePicker
					styles={{
						default: {
							picker: {
								background: '#222',
								borderRadius: "20px"
							},
						},
					}}
					color={color}
					disableAlpha
					onChange={(color) => {
						setColor(color.hex)
					}}
				/>
			</section>
			<canvas id="text-canvas" style={{ display: 'none' }} />
		</section>
	)
}

export default App
