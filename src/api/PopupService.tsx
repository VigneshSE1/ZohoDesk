import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useMemo,
} from "react";

export interface PopupContextType {
	openPopup: (content: ReactNode) => void;
	closePopup: () => void;
}

export const PopupContext = createContext<PopupContextType>(
	{} as PopupContextType
);

export function usePopup(): PopupContextType {
	const context = useContext(PopupContext);
	return context;
}

interface PopupServiceProps {
	children: ReactNode;
}

export function PopupService({ children }: PopupServiceProps) {
	const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

	const contextValue = useMemo(
		() => ({
			openPopup: (content: ReactNode) => {
				setPopupContent(content);
			},
			closePopup: () => {
				setPopupContent(null);
			},
		}),
		[]
	);

	return (
		<PopupContext.Provider value={contextValue}>
			{children}
			{popupContent && <div className="popup-overlay">{popupContent}</div>}
		</PopupContext.Provider>
	);
}
