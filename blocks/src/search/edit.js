/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import metadata from "./block.json";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar,
	FontSizePicker,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalDivider as Divider,
	__experimentalNumberControl as NumberControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<ServerSideRender block="elegant/search" attributes={attributes} />
			<InspectorControls>
				<PanelBody
					title={__("Search", metadata.textdomain)}
					initialOpen={false}
				>
					<RichText
						placeholder={__("Type placeholder text here", metadata.textdomain)}
						value={attributes.placeholderText}
						onChange={(value) => setAttributes({ placeholderText: value })}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Text colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.textColor,
								onChange: (colorValue) =>
									setAttributes({ textColor: colorValue }),
								label: __("Search text color", metadata.textdomain),
							},
							{
								value: attributes.placeHolderColor,
								onChange: (colorValue) =>
									setAttributes({ placeHolderColor: colorValue }),
								label: __("Search text color", metadata.textdomain),
							},
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Icon color", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.iconColorNormal,
								onChange: (colorValue) =>
									setAttributes({ iconColorNormal: colorValue }),
								label: __("Normal", metadata.textdomain),
							},
							{
								value: attributes.iconColorHover,
								onChange: (colorValue) =>
									setAttributes({ iconColorHover: colorValue }),
								label: __("Hover", metadata.textdomain),
							},
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Border color", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.borderColor,
								onChange: (colorValue) =>
									setAttributes({ borderColor: colorValue }),
								label: __("Color", metadata.textdomain),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
