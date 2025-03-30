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
			<ServerSideRender
				block="elegant/post-categories"
				attributes={attributes}
			/>
			<InspectorControls>
				<PanelBody
					title={__("Heading", metadata.textdomain)}
					initialOpen={false}
				>
					<RichText
						value={attributes.heading}
						onChange={(value) => setAttributes({ heading: value })}
						placeholder={__("Type heading here...", metadata.textdomain)}
					/>
					<Divider />
					<NumberControl
						label={__("Size", metadata.textdomain)}
						__next40pxDefaultSize
						isShiftStepEnabled={true}
						onChange={(value) =>
							setAttributes({ headingSize: parseInt(value) })
						}
						min={1}
						max={100}
						shiftStep={1}
						value={parseInt(attributes.headingSize)}
					/>
					<PanelColorSettings
						__experimentalIsRenderedInSidebar
						title={__("Color", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.headingColor,
								onChange: (value) => setAttributes({ headingColor: value }),
								label: __("Color", metadata.textdomain),
							},
						]}
					/>
					<AlignmentToolbar
						value={attributes.headingAlignment}
						onChange={(nextAlign) => {
							setAttributes({ headingAlignment: nextAlign });
						}}
					/>
					<RangeControl
						label={__("gap", metadata.textdomain)}
						min={0}
						max={100}
						value={attributes.gap}
						onChange={(value) => setAttributes({ gap: value })}
					/>
				</PanelBody>
				<PanelBody
					title={__("Categories", metadata.textdomain)}
					initialOpen={false}
				>
					<NumberControl
						label={__("Category count", metadata.textdomain)}
						__next40pxDefaultSize
						isShiftStepEnabled={true}
						onChange={(value) =>
							setAttributes({ categoryCount: parseInt(value) })
						}
						min={1}
						max={100}
						shiftStep={1}
						value={parseInt(attributes.categoryCount)}
					/>
					<PanelColorSettings
						__experimentalIsRenderedInSidebar
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.categoryColor,
								onChange: (value) => setAttributes({ categoryColor: value }),
								label: __("Normal", metadata.textdomain),
							},
							{
								value: attributes.categoryHoverColor,
								onChange: (value) =>
									setAttributes({ categoryHoverColor: value }),
								label: __("Hover", metadata.textdomain),
							},
						]}
					/>
					<FontSizePicker
						value={attributes.categoryFontSize}
						onChange={(value) => setAttributes({ categoryFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={attributes.fontSize}
						onChange={(value) => setAttributes({ fontWeight: value })}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
					<RangeControl
						label={__("gap", metadata.textdomain)}
						min={0}
						max={100}
						value={attributes.categoryGap}
						onChange={(value) => setAttributes({ categoryGap: value })}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
