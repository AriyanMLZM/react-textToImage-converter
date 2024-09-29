import { useEffect, useState } from 'react'
import { converter } from './utils/converter'

const App = () => {
	const [img, setImg] = useState<string>()
	const [text, setText] = useState('')

	useEffect(() => {
		setImg(converter(text))
	}, [text])

	return (
		<section>
			<textarea
				value={text}
				placeholder="Enter Image Text..."
				onChange={(event) => setText(event.target.value)}
			/>
			<div className="text-[30px]">{text}</div>
			<canvas id="text-canvas" style={{ display: 'none' }} />
			<img src={img} alt="image" />
		</section>
	)
}

export default App
