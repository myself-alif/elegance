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
			<ServerSideRender block="elegant/post-tags" attributes={attributes} />
			<InspectorControls>
				<PanelBody
					title={__("Heading", metadata.textdomain)}
					initialOpen={false}
				>
					<RichText
						placeholder={__("Type heading here", metadata.textdomain)}
						value={attributes.heading}
						onChange={(value) => setAttributes({ heading: value })}
					/>
					<PanelColorSettings
						enableAlpha={true}
						colorSettings={[
							{
								value: attributes.headingColor,
								onChange: (colorValue) =>
									setAttributes({ headingColor: colorValue }),
								label: __("Color"),
							},
						]}
					/>
					<FontSizePicker
						value={attributes.headingSize}
						onChange={(value) => setAttributes({ headingSize: value })}
					/>
					<Divider />
					<AlignmentToolbar
						value={attributes.headingAlignment}
						onChange={(value) => setAttributes({ headingAlignment: value })}
					/>
					<RangeControl
						label={__("gap", metadata.textdomain)}
						min={0}
						max={100}
						value={attributes.gap}
						onChange={(value) => setAttributes({ gap: value })}
					/>
				</PanelBody>
				<PanelBody title={__("Tags", metadata.textdomain)} initialOpen={false}>
					<Divider />
					<NumberControl
						value={parseInt(attributes.tagCount)}
						onChange={(value) => setAttributes({ tagCount: parseInt(value) })}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Link colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.tagNormalColor,
								onChange: (colorValue) =>
									setAttributes({ tagNormalColor: colorValue }),
								label: __("Normal color"),
							},
							{
								value: attributes.tagHoverColor,
								onChange: (colorValue) =>
									setAttributes({ tagHoverColor: colorValue }),
								label: __("Hover color"),
							},
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Link background colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.linkBgColor,
								onChange: (colorValue) =>
									setAttributes({ linkBgColor: colorValue }),
								label: __("Normal color"),
							},
							{
								value: attributes.linkBgHoverColor,
								onChange: (colorValue) =>
									setAttributes({ linkBgHoverColor: colorValue }),
								label: __("Hover color"),
							},
						]}
					/>
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={attributes.tagFontWeight}
						onChange={(value) => setAttributes({ tagFontWeight: value })}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Border color", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.borderColor,
								onChange: (colorValue) =>
									setAttributes({ borderColor: colorValue }),
								label: __("Color"),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
