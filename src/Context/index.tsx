/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-vars */
import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect,
	useRef,
} from 'react';

type contextProps = {
	currentPage: number;
	totalPages: number;
	siblingCount: number;
	//onChange: (data: number) => void;

};

const authContextDefaultValues: contextProps = {
	currentPage: 1,
	totalPages: 1,
	siblingCount: 1,
	// onChange: () => {
	// 	/* This is intentional */
	// },
};

const Context = createContext<contextProps>(authContextDefaultValues);

export function useAuth() {
	return useContext(Context);
}

type Props = {
	children: ReactNode;
	darkMode: boolean;
	setDarkMode: (data: boolean) => void;
};

export function ContextProvider({ children, darkMode, setDarkMode }: Props) {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [siblingCount, setSiblingCount] = useState(1);



	const value = {
		currentPage,
		totalPages,
		siblingCount
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
