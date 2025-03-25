"use client";

import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
	return (
		<GridLoader
			color="#f03d7e"
			loading={true}
			speedMultiplier={1.7}
		/>
	)
}

export default Loader;