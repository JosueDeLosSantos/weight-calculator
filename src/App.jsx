import { useState, useEffect } from "react"
import "./App.css"
import gitHubIcon from "./assets/icons8-github.svg"

function App() {
	const [width, setWidth] = useState("") // inches
	const [height, setHeight] = useState("") // inches
	const [grammage, setGrammage] = useState("350")
	const [pages, setPages] = useState("")
	const [weight, setWeight] = useState("")

	useEffect(() => {
		if (width && height && grammage && pages) {
			// 1 in^2 = 0.00064516 m^2
			//convert from in^2 to m^2
			const area = parseFloat(width * height * 0.00064516)
			//weight of the printing material in grams
			const w = parseFloat(area * grammage * pages)
			//to convert from g to lb, we need to divide by 453.59237
			//since 1 lb = 453.59237g
			setWeight(parseInt(w / 453.59237) + " Lib")
		}
	})

	function handleInputs(e) {
		if (e.target.name === "width") {
			console.log(e)
			setWidth(e.target.value)
		}
		if (e.target.name === "height") {
			setHeight(e.target.value)
		}
		if (e.target.name === "grammage") {
			setGrammage(e.target.value)
		}
		if (e.target.name === "pages") {
			setPages(e.target.value)
		}
	}

	return (
		<form className="Calculator">
			<div className="screen">
				<div onChange={handleInputs} className="weight">
					{weight}
				</div>
			</div>
			<div className="width">
				<label htmlFor="width">Anchura</label>
				<input
					placeholder="Anchura en pulgadas"
					onChange={handleInputs}
					value={width}
					type="number"
					name="width"
				/>
			</div>
			<div className="height">
				<label htmlFor="height">Altura</label>
				<input
					placeholder="Altura en pulgadas"
					value={height}
					onChange={handleInputs}
					type="number"
					name="height"
				/>
			</div>
			<div className="grammage">
				<label htmlFor="grammage">
					<span>Gramage</span>
					<span className="GSM">(GSM)</span>
				</label>
				<input value={grammage} onChange={handleInputs} type="number" name="grammage" />
			</div>
			<div className="pages">
				<label htmlFor="pages">Cantidad de hojas</label>
				<input
					inputMode="numeric"
					value={pages}
					onChange={handleInputs}
					type="number"
					name="pages"
				/>
			</div>
			<div className="designer">
				<a href="https://github.com/JosueDeLosSantos/weight-calculator">
					<img className="gitHubIcon" src={gitHubIcon} alt="source code" />
				</a>

				<div className="designerName">
					<a href="https://github.com/JosueDeLosSantos/weight-calculator">
						by Josue De Los Santos
					</a>
				</div>
			</div>
		</form>
	)
}

export default App
