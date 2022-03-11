/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, ReactNode, useState } from 'react';

type contextProps = {
	currentPageInternal: number;
	setCurrentPageInternal: (data: number) => void;
	totalPagesInternal: number;
	setTotalPagesInternal: (data: number) => void;
	siblingCountInternal: number;
	setSiblingCountInternal: (data: number) => void;
	siblingMinorInternal: number[];
	setSiblingMinorInternal: (data: number[]) => void;
	siblingMajorInternal: number[];
	setSiblingMajorInternal: (data: number[]) => void;
	centralNumberInternal: number[];
	setCentralNumberInternal: (data: number[]) => void;
	// onChange: (data: number) => void;
};

const authContextDefaultValues: contextProps = {
	currentPageInternal: 1,
	setCurrentPageInternal: () => {
		/* This is intentional */
	},
	totalPagesInternal: 1,
	setTotalPagesInternal: () => {
		/* This is intentional */
	},
	siblingCountInternal: 1,
	setSiblingCountInternal: () => {
		/* This is intentional */
	},
	siblingMinorInternal: [],
	setSiblingMinorInternal: () => {
		/* This is intentional */
	},
	siblingMajorInternal: [],
	setSiblingMajorInternal: () => {
		/* This is intentional */
	},
	centralNumberInternal: [],
	setCentralNumberInternal: () => {
		/* This is intentional */
	},
};

const Context = createContext<contextProps>(authContextDefaultValues);

export function useMyContext() {
	return useContext(Context);
}

type Props = {
	children: ReactNode;
	darkMode: boolean;
	setDarkMode: (data: boolean) => void;
};

export function ContextProvider({ children, darkMode, setDarkMode }: Props) {
	const [currentPageInternal, setCurrentPageInternal] = useState(1);
	const [totalPagesInternal, setTotalPagesInternal] = useState(1);
	const [siblingCountInternal, setSiblingCountInternal] = useState(1);
	const [siblingMinorInternal, setSiblingMinorInternal] = useState<number[]>(
		[]
	);
	const [siblingMajorInternal, setSiblingMajorInternal] = useState<number[]>(
		[]
	);
	const [centralNumberInternal, setCentralNumberInternal] = useState<number[]>(
		[]
	);

	const value = {
		currentPageInternal,
		totalPagesInternal,
		siblingCountInternal,
		setCurrentPageInternal,
		setTotalPagesInternal,
		setSiblingCountInternal,
		siblingMinorInternal,
		setSiblingMinorInternal,
		siblingMajorInternal,
		setSiblingMajorInternal,
		centralNumberInternal,
		setCentralNumberInternal,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
