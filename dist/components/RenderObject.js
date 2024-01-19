import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Renders an object as a Json string with an optional title.
 * @param {Object} objectToRender - The object to be rendered.
 * @param {string} [title] - The optional title for the rendered object.
 * @returns {JSX.Element} - The rendered object.
 */
const RenderObject = ({ objectToRender, title }) => {
    return (_jsxs("div", { className: "border border-gray-200 rounded", children: [title && _jsx("h2", { className: "text-xl font-bold", children: title }), _jsx("pre", { children: JSON.stringify(objectToRender, null, 2) })] }));
};
export { RenderObject };
