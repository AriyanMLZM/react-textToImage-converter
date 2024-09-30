import { useEffect, useState } from 'react'
import { converter } from './utils/converter'

const App = () => {
	const [img, setImg] = useState<string | null>(null)
	const [text, setText] = useState('')

	useEffect(() => {
		if (text === '') setImg(null)
		else setImg(converter(text))
	}, [text])

	return (
		<section className="w-screen h-screen bg-[#111] flex-center">
			<section className='flex flex-col items-center'>
				<textarea
					value={text}
					placeholder="Enter Image Text..."
					onChange={(event) => setText(event.target.value)}
					className="w-[300px] bg-[#222] text-white"
				/>
				<div className="min-w-[100] min-h-[150px]">
					{img && <img src={img} alt="image" />}
				</div>
			</section>
			<canvas id="text-canvas" style={{ display: 'none' }} />
		</section>
	)
}

export default App
