"use client";

import { ArrowRightCircleIcon, SearchIcon, XCircleIcon } from "lucide-react"
import { useState, useRef } from "react"

export const Search = () => {
	const [value, setValue] = useState("")
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div className="relative w-full group">
			<SearchIcon
				size={20}
				className="absolute top-1/2 transform -translate-y-1/2 left-2.5 text-muted-foreground group-hover:text-primary/70 group-focus-within:text-primary group-focus-within:group-hover:text-primary transition"
			/>

			<input
				ref={inputRef}
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="What are you looking for?"
				className="w-full py-2 pl-8 pr-4 transition border rounded-full group-hover:border-primary/70 group-focus-within:border-primary group-focus-within:group-hover:border-primary focus:outline-none"
			/>

			<div className="absolute top-1/2 transform -translate-y-1/2 right-2.5 flex items-center gap-x-2">
				{value && (
					<button
						type="button"
						className="transition opacity-0 pointer-events-none text-primary group-hover:text-primary/70 group-focus-within:pointer-events-auto group-focus-within:cursor-pointer group-focus-within:opacity-100 group-focus-within:group-hover:text-primary"
						onClick={() => {
							// Clear the input field
							setValue("")
							inputRef.current?.focus()
						}}
					>
						<XCircleIcon size={20} />
					</button>
				)}

				<button
					type="button"
					className="transition opacity-0 pointer-events-none text-primary group-hover:text-primary/70 group-focus-within:pointer-events-auto group-focus-within:cursor-pointer group-focus-within:opacity-100 group-focus-within:group-hover:text-primary"
				>
					<ArrowRightCircleIcon size={20} />
				</button>
			</div>
		</div>
	)
}