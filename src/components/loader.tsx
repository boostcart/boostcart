"use client";

import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
	return (
		<GridLoader
			loading={true}
			speedMultiplier={1.7}
		/>
	)
}

export default Loader;