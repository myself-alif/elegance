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
			<ServerSideRender block="elegant/recent-posts" attributes={attributes} />
			<InspectorControls>
				<PanelBody
					title={__("Heading", metadata.textdomain)}
					initialOpen={false}
				>
					<RichText
						value={attributes.heading}
						onChange={(content) => setAttributes({ heading: content })}
						placeholder={__("Type heading here...", metadata.textdomain)}
					/>
					<Divider />
					<FontSizePicker
						value={attributes.headingFontSize}
						onChange={(size) => {
							setAttributes({ headingFontSize: size });
						}}
					/>
					<Divider />
					<PanelColorSettings
						__experimentalIsRenderedInSidebar
						title={__("Color", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.headingColor,
								onChange: (color) => setAttributes({ headingColor: color }),
								label: __("Color", metadata.textdomain),
							},
						]}
					/>
					<Divider />
					<AlignmentToolbar
						allowedControls={["left", "center", "right"]}
						value={attributes.headingAlignment}
						onChange={(value) => setAttributes({ headingAlignment: value })}
					/>
					<RangeControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={__("Gap", metadata.textdomain)}
						value={attributes.gap}
						onChange={(value) => setAttributes({ gap: value })}
						min={0}
						max={100}
					/>
				</PanelBody>
				<PanelBody
					title={__("Posts settings", metadata.textdomain)}
					initialOpen={false}
				>
					<NumberControl
						label={__("Post count", metadata.textdomain)}
						__next40pxDefaultSize
						isShiftStepEnabled={true}
						onChange={(value) => setAttributes({ postCount: parseInt(value) })}
						shiftStep={1}
						value={parseInt(attributes.postCount)}
						min={1}
						max={100}
					/>
				</PanelBody>
				<PanelBody
					title={__("Title colors", metadata.textdomain)}
					initialOpen={false}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.linkColor,
								onChange: (colorValue) =>
									setAttributes({ linkColor: colorValue }),
								label: __("Normal color"),
							},
							{
								value: attributes.linkColorHover,
								onChange: (colorValue) =>
									setAttributes({ linkColorHover: colorValue }),
								label: __("Hover color"),
							},
						]}
					/>
					<FontSizePicker
						value={attributes.titleFontSize}
						onChange={(size) => {
							setAttributes({ titleFontSize: size });
						}}
					/>
				</PanelBody>
				<PanelBody
					title={__("Time color", metadata.textdomain)}
					initialOpen={false}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.dateColor,
								onChange: (colorValue) =>
									setAttributes({ dateColor: colorValue }),
								label: __("Normal color"),
							},
						]}
					/>
					<Divider />
					<FontSizePicker
						value={attributes.timeFontSize}
						onChange={(size) => {
							setAttributes({ timeFontSize: size });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
