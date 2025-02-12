"use client";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = () => {
	return (
		<ClimbingBoxLoader
			loading={true}
			speedMultiplier={1.7}
		/>
	)
}

export default Loader;